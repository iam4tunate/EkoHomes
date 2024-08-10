import { INewHome, INewUser, IUpdateHome } from "@/types";
import {
  createHome,
  createUser,
  deleteHome,
  getCurrentUser,
  getHomeById,
  getRecentHomes,
  loginUser,
  logoutUser,
  updateHome,
} from "../appwrite/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { QUERY_KEYS } from "./query-keys";
import { toast } from "@/components/ui/use-toast";

export const useCreateUser = () => {
  return useMutation({
    mutationFn: (user: INewUser) => createUser(user),
    onSuccess: () => {
      toast({
        variant: "success",
        description: "Account created successfully.",
      });
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        description: error.message,
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
        description: "Logged in successfully.",
      });
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        description: error.message,
      });
    },
  });
};

export const useLogoutUuser = () => {
  return useMutation({
    mutationFn: logoutUser,
  });
};

export const useGetCurrentUser = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_CURRENT_USER],
    queryFn: getCurrentUser,
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
        description: "Document created successfully.",
      });
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        description: error.message,
      });
    },
  });
};

export const useGetRecentHomes = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_RECENT_HOMES],
    queryFn: getRecentHomes,
  });
};

export const useGetHomeById = (homeId: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_POST_BY_ID, homeId],
    queryFn: () => getHomeById(homeId),
    enabled: !!homeId,
  });
};

export const useUpdateHome = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (home: IUpdateHome) => updateHome(home),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_POST_BY_ID, data?.$id],
      });
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        description: error.message,
      });
    },
  });
};

export const useDeleteHome = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      homeId,
      imageIds,
    }: {
      homeId: string | undefined;
      imageIds: string[];
    }) => deleteHome(homeId ?? "", imageIds),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_RECENT_HOMES],
      });
      toast({
        variant: "success",
        description: "Document deleted successfully",
      });
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        description: error.message,
      });
    },
  });
};
