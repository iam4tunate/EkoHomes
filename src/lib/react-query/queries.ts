import { INewUser } from "@/types";
import { createUser, loginUser, logoutUser } from "../appwrite/api";
import { useMutation } from "@tanstack/react-query";

export const useCreateUser = () => {
  return useMutation({
    mutationFn: (user: INewUser) => createUser(user),
  });
};

export const useLoginUser = () => {
  return useMutation({
    mutationFn: (user: { email: string; password: string }) => loginUser(user),
  });
};

export const useLogoutUuser = () => {
  return useMutation({
    mutationFn: logoutUser,
  });
};
