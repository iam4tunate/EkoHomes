import { INewHome, INewUser, IUpdateHome, IUpgradeAgent } from '@/types';
import {
  createHome,
  createUser,
  deleteHome,
  filterHomes,
  getCurrentUser,
  getFeaturedHomes,
  getHomeById,
  getHomes,
  getHomesByCreatorId,
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

export const useGetHomes = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_HOMES],
    queryFn: getHomes,
  });
};

export const useGetFeaturedHomes = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_FEATURED_HOMES],
    queryFn: getFeaturedHomes,
  });
};

export const useFilterHomes = (filterValues: {
  searchTerm: string;
  state: string;
  lga: string;
  priceRange: string;
}) => {
  const { searchTerm, state, lga, priceRange } = filterValues;
  return useQuery({
    queryKey: [QUERY_KEYS.GET_FILTERED_HOMES, filterValues],
    queryFn: () => filterHomes(filterValues),
    enabled: !!searchTerm || !!state || !!lga || !!priceRange,
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
        queryKey: [QUERY_KEYS.GET_HOMES],
      });
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_FEATURED_HOMES],
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
  return useMutation({
    mutationFn: (user: IUpgradeAgent) => upgradeToAgent(user),
    onSuccess: () => {
      toast({
        variant: 'success',
        description:
          "Congratulations! You've successfully been upgraded to agent status.",
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
