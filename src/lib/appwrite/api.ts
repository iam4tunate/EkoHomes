import { INewUser } from "@/types";
import { account, appwriteConfig, avatars, databases } from "./config";
import { ID, Query } from "appwrite";
import { toast } from "@/components/ui/use-toast";

export async function createUser(user: INewUser) {
  try {
    const name = `${user.first_name} ${user.last_name}`;
    const newAccount = await account.create(
      ID.unique(),
      user.email,
      user.password,
      name
    );
    console.log(newAccount);
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
  } catch (error) {
    if (error instanceof Error && "code" in error) {
      if (error.code === 409) {
        return toast({
          variant: "destructive",
          title: "User already exists",
        });
      } else if (error.code === 429) {
        return toast({
          variant: "destructive",
          title:
            "Rate limit has been exceeded. Please try again after some time",
        });
      } else if (error.code === 0) {
        return toast({
          variant: "destructive",
          title: "Natwork Error.",
        });
      }
      console.log("hi", error.code);
      console.log("hi", error.message);
    }
  }
}

export async function saveUserToDB(user: {
  accountId: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  imageUrl: URL;
}) {
  try {
    const newUser = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.usersId,
      ID.unique(),
      user
    );
    return newUser;
  } catch (error) {
    console.log(error);
  }
}

export async function loginUser(user: { email: string; password: string }) {
  try {
    const session = await account.createEmailPasswordSession(
      user.email,
      user.password
    );
    return session;
  } catch (error) {
    if (error instanceof Error && "code" in error) {
      if (error.code === 401) {
        return toast({
          variant: "destructive",
          title: "Invalid credentials. Please check the email and password.",
        });
      } else if (error.code === 429) {
        return toast({
          variant: "destructive",
          title:
            "Rate limit has been exceeded. Please try again after some time",
        });
      } else if (error.code === 0) {
        return toast({
          variant: "destructive",
          title: "Natwork Error.",
        });
      }
      console.log("hi", error.code);
      console.log("hi", error.message);
    }
  }
}

export async function getCurrentUser() {
  try {
    const currentAccount = await account.get();
    if (!currentAccount) throw Error;
    const currentUser = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.usersId,
      [Query.equal("accountId", currentAccount.$id)]
    );
    if (!currentUser) throw Error;
    return currentUser.documents[0];
  } catch (error) {
    console.log(error);
  }
}

export async function logoutUser() {
  try {
    const session = await account.deleteSession("current");
    return session;
  } catch (error) {
    console.log(error);
  }
}
