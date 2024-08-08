import { INewHome, INewUser } from "@/types";
import { createHome, createUser, loginUser, logoutUser } from "../appwrite/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { QUERY_KEYS } from "./query-keys";
import { toast } from "@/components/ui/use-toast";

export const useCreateUser = () => {
  return useMutation({
    mutationFn: (user: INewUser) => createUser(user),
    onSuccess: () => {
      toast({
        variant: "success",
        title: "Account creation successful.",
      });
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: error.message,
      });
    },
  });
};

export const useLoginUser = () => {
  return useMutation({
    mutationFn: (user: { email: string; password: string }) => loginUser(user),
    onSuccess: () => {
      toast({
        variant: "success",
        title: "Login successful",
      });
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: error.message,
      });
    },
  });
};

export const useLogoutUuser = () => {
  return useMutation({
    mutationFn: logoutUser,
  });
};

export const useCreateHome = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (home: INewHome) => createHome(home),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_HOMES],
      });
      toast({
        variant: "success",
        title: "Home creation successful",
      });
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: error.message,
      });
    },
  });
};
