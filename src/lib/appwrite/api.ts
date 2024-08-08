import { INewHome, INewUser } from "@/types";
import { account, appwriteConfig, avatars, databases, storage } from "./config";
import { ID, Query } from "appwrite";

export async function createUser(user: INewUser) {
  const name = `${user.first_name} ${user.last_name}`;
  const newAccount = await account.create(
    ID.unique(),
    user.email,
    user.password,
    name
  );
  if (!newAccount) throw Error;

  const avatarUrl = avatars.getInitials(name);

  const newUser = await saveUserToDB({
    accountId: newAccount.$id,
    first_name: user.first_name,
    last_name: user.last_name,
    phone_number: user.phone_number,
    email: newAccount.email,
    imageUrl: avatarUrl,
  });
  return newUser;
}

// CREATE USER FUNCTION WITH THE TRY AND CATCH
// export async function createUser(user: INewUser) {
//   try {
//     const name = `${user.first_name} ${user.last_name}`;
//     const newAccount = await account.create(
//       ID.unique(),
//       user.email,
//       user.password,
//       name
//     );
//     console.log(newAccount);
//     if (!newAccount) throw Error;

//     const avatarUrl = avatars.getInitials(name);

//     const newUser = await saveUserToDB({
//       accountId: newAccount.$id,
//       first_name: user.first_name,
//       last_name: user.last_name,
//       phone_number: user.phone_number,
//       email: newAccount.email,
//       imageUrl: avatarUrl,
//     });
//     return newUser;
//   } catch (error) {
//     if (error instanceof Error && "code" in error) {
//       if (error.code === 409) {
//         return toast({
//           variant: "destructive",
//           title: "User already exists",
//         });
//       } else if (error.code === 429) {
//         return toast({
//           variant: "destructive",
//           title:
//             "Rate limit has been exceeded. Please try again after some time",
//         });
//       } else if (error.code === 0) {
//         return toast({
//           variant: "destructive",
//           title: "Natwork Error.",
//         });
//       }
//       console.log("hi", error.code);
//       console.log("hi", error.message);
//     }
//   }
// }

export async function saveUserToDB(user: {
  accountId: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  imageUrl: URL;
}) {
  const newUser = await databases.createDocument(
    appwriteConfig.databaseId,
    appwriteConfig.usersId,
    ID.unique(),
    user
  );
  return newUser;
}

export async function loginUser(user: { email: string; password: string }) {
  const session = await account.createEmailPasswordSession(
    user.email,
    user.password
  );
  return session;
}

export async function getCurrentUser() {
  const currentAccount = await account.get();
  if (!currentAccount) throw Error;
  const currentUser = await databases.listDocuments(
    appwriteConfig.databaseId,
    appwriteConfig.usersId,
    [Query.equal("accountId", currentAccount.$id)]
  );
  if (!currentUser) throw Error;
  return currentUser.documents[0];
}

export async function logoutUser() {
  const session = await account.deleteSession("current");
  return session;
}

export async function createHome(home: INewHome) {
  const uploadedFiles: UploadedFile[] = [];
  try {
    for (const file of home.files) {
      const uploadedFile = await uploadFile(file);
      if (uploadedFile) {
        uploadedFiles.push(uploadedFile);
      } else {
        throw new Error("File upload failed.");
      }
    }

    const fileUrls = uploadedFiles.map((uploadedFile) => {
      const previewUrl = getFilePreview(uploadedFile.$id);
      return previewUrl;
    });

    const features =
      home.features?.split(/\.\s*/).filter((str) => str !== "") || [];

    const newHome = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.homesId,
      ID.unique(),
      {
        title: home.title,
        price: Number(home.price),
        address: home.address,
        no_of_bathrooms: Number(home.no_of_bathrooms),
        no_of_bedrooms: Number(home.no_of_bedrooms),
        year_built: Number(home.year_built),
        sqm: Number(home.sqm),
        payment_method: home.payment_method,
        description: home.description,
        features: features,
        imageUrls: fileUrls,
      }
    );

    return newHome;
  } catch (error) {
    for (const uploadedFile of uploadedFiles) {
      await deleteFile(uploadedFile.$id);
    }
    throw error;
  }
}
interface UploadedFile {
  $id: string;
}

export async function uploadFile(file: File) {
  const uploadedFile = await storage.createFile(
    appwriteConfig.storageId,
    ID.unique(),
    file
  );
  return uploadedFile;
}

export function getFilePreview(fileId: string) {
  const fileUrl = storage.getFilePreview(
    appwriteConfig.storageId,
    fileId,
    2000,
    2000,
    // 'top',
    undefined,
    100
  );

  return fileUrl;
}

export async function deleteFile(fileId: string) {
  await storage.deleteFile(appwriteConfig.storageId, fileId);
  return { status: "ok" };
}
