import { INewHome, INewUser, IUpdateHome, IUpgradeAgent } from '@/types';
import {
  createHome,
  createUser,
  deleteHome,
  getCurrentUser,
  getHomeById,
  getHomesByCreatorId,
  getRecentHomes,
  getUserById,
  loginUser,
  logoutUser,
  updateHome,
  upgradeToAgent,
} from '../appwrite/api';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { QUERY_KEYS } from './query-keys';
import { toast } from '@/components/ui/use-toast';

export const useCreateUser = () => {
  return useMutation({
    mutationFn: (user: INewUser) => createUser(user),
    onSuccess: () => {
      toast({
        variant: 'success',
        description: 'Account created successfully.',
      });
    },
    onError: (error) => {
      toast({
        variant: 'destructive',
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
        variant: 'success',
        description: 'Logged in successfully.',
      });
    },
    onError: (error) => {
      toast({
        variant: 'destructive',
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
    onSuccess: (data) => {
      console.log('first', data);
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_HOMES],
      });
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_HOMES_BY_CREATOR_ID, data.$id],
      });
      toast({
        variant: 'success',
        description: 'Home listing created successfully.',
      });
    },
    onError: (error) => {
      toast({
        variant: 'destructive',
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
    queryKey: [QUERY_KEYS.GET_HOME_BY_ID, homeId],
    queryFn: () => getHomeById(homeId),
    enabled: !!homeId,
  });
};

export const useGetHomesByCreatorId = (id: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_HOMES_BY_CREATOR_ID, id],
    queryFn: () => getHomesByCreatorId(id),
    enabled: !!id,
  });
};

export const useUpdateHome = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (home: IUpdateHome) => updateHome(home),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_HOME_BY_ID, data?.$id],
      });
    },
    onError: (error) => {
      toast({
        variant: 'destructive',
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
    }) => deleteHome(homeId ?? '', imageIds),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_RECENT_HOMES],
      });
      toast({
        variant: 'success',
        description: 'Home listing deleted successfully',
      });
    },
    onError: (error) => {
      toast({
        variant: 'destructive',
        description: error.message,
      });
    },
  });
};

export const useGetUserById = (id: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_USER_BY_ID, id],
    queryFn: () => getUserById(id),
    enabled: !!id,
  });
};

export const useUpgradeToAgent = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (user: IUpgradeAgent) => upgradeToAgent(user),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_CURRENT_USER],
      });
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_USER_BY_ID, data.$id],
      });
    },
    onError: (error) => {
      toast({
        variant: 'destructive',
        description: error.message,
      });
    },
  });
};
