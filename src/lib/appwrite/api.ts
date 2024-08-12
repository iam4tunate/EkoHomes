import { INewHome, INewUser, IUpdateHome } from "@/types";
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
    appwriteConfig.usersCollectionId,
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
    appwriteConfig.usersCollectionId,
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

    const fileIds = uploadedFiles.map((uploadedFile) => {
      return uploadedFile.$id;
    });

    const features =
      home.features?.split(/\.\s*/).filter((str) => str !== "") || [];

    const newHome = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.homesCollectionId,
      ID.unique(),
      {
        title: home.title,
        creator: home.userId,
        price: Number(home.price),
        address: home.address,
        bathrooms: Number(home.bathrooms),
        bedrooms: Number(home.bedrooms),
        toilets: Number(home.toilets),
        year_built: Number(home.year_built),
        state: home.state,
        lga: home.lga,
        payment_method: home.payment_method,
        description: home.description,
        features: features,
        imageUrls: fileUrls,
        imageIds: fileIds,
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

export async function getRecentHomes() {
  const homes = await databases.listDocuments(
    appwriteConfig.databaseId,
    appwriteConfig.homesCollectionId,
    [Query.orderDesc("$createdAt"), Query.limit(20)]
  );
  return homes;
}

export async function getHomeById(homeId: string) {
  const home = await databases.getDocument(
    appwriteConfig.databaseId,
    appwriteConfig.homesCollectionId,
    homeId
  );
  return home;
}

export async function updateHome(home: IUpdateHome) {
  const hasFilesToUpdate = home.files.length > 0;
  const uploadedFiles: UploadedFile[] = [];

  try {
    let images = {
      imageUrls: home.imageUrls as string[],
      imageIds: home.imageIds as string[],
    };

    // Step 1: Delete old files if there are new files to update
    if (hasFilesToUpdate) {
      if (images.imageIds.length > 0) {
        // Delete existing files from Appwrite storage
        for (const fileId of images.imageIds) {
          await deleteFile(fileId);
        }
      }

      // Step 2: Upload new files
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
        return previewUrl.toString();
      });
      const fileIds = uploadedFiles.map((uploadedFile) => {
        return uploadedFile.$id;
      });

      images = {
        ...images,
        imageUrls: [...fileUrls], // Merge arrays
        imageIds: [...fileIds], // Merge arrays
      };
    }

    const features =
      home.features?.split(/\.\s*/).filter((str) => str !== "") || [];

    const updatedHome = await databases.updateDocument(
      appwriteConfig.databaseId,
      appwriteConfig.homesCollectionId,
      home.homeId,
      {
        title: home.title,
        price: home.price,
        year_built: home.year_built,
        payment_method: home.payment_method,
        bathrooms: home.bathrooms,
        bedrooms: home.bedrooms,
        toilets: home.toilets,
        address: home.address,
        state: home.state,
        lga: home.lga,
        description: home.description,
        features: features,
        imageIds: images.imageIds,
        imageUrls: images.imageUrls,
      }
    );
    return updatedHome;
  } catch (error) {
    for (const uploadedFile of uploadedFiles) {
      await deleteFile(uploadedFile.$id);
    }
    throw error;
  }
}

export async function deleteHome(homeId: string, imageIds: string[]) {
  if (!homeId || !imageIds) throw Error;
  const deleteHome = await databases.deleteDocument(
    appwriteConfig.databaseId,
    appwriteConfig.homesCollectionId,
    homeId
  );
  for (const fileId of imageIds) {
    await deleteFile(fileId);
  }
  if (deleteHome) {
    return { status: "ok" };
  }
}

//! getDocument \ listDocuments
export async function getHomesByCreatorId(id: string) {
  const homes = await databases.listDocuments(
    appwriteConfig.databaseId,
    appwriteConfig.homesCollectionId,
    [Query.equal("creator", id)]
  );
  return homes;
}

export async function getUserById(id: string) {
  const user = await databases.getDocument(
    appwriteConfig.databaseId,
    appwriteConfig.usersCollectionId,
    id
  );
  return user;
}
