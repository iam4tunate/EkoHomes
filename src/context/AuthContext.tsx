import { getCurrentUser } from '@/lib/appwrite/api';
import { IUser } from '@/types';
import { createContext, useContext, useEffect, useState } from 'react';

const INITIAL_USER = {
  id: '',
  accountId: '',
  first_name: '',
  last_name: '',
  phone_number: '',
  email: '',
  imageUrl: '',
  label: '',
};

const INITIAL_STATE = {
  user: INITIAL_USER,
  isLoading: false,
  isAuthenticated: false,
  setUser: () => {},
  setIsAuthenticated: () => {},
  checkAuthUser: async () => false as boolean,
};

type IContextType = {
  user: IUser;
  isLoading: boolean;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  checkAuthUser: () => Promise<boolean>;
};

const AuthContext = createContext<IContextType>(INITIAL_STATE);

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<IUser>(INITIAL_USER);
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const checkAuthUser = async () => {
    setIsLoading(true);
    try {
      const currentAccount = await getCurrentUser();
      console.log('curr', currentAccount);
      if (currentAccount) {
        setUser({
          id: currentAccount.$id,
          accountId: currentAccount.accountId,
          first_name: currentAccount.first_name,
          last_name: currentAccount.last_name,
          phone_number: currentAccount.phone_number,
          email: currentAccount.email,
          imageUrl: currentAccount.imageUrl,
          label: currentAccount.label,
        });
        setIsAuthenticated(true);
        return true;
      }
      return false;
    } catch (error) {
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    checkAuthUser();
  }, []);

  const value = {
    user,
    setUser,
    isLoading,
    isAuthenticated,
    setIsAuthenticated,
    checkAuthUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useUserContext = () => useContext(AuthContext);
