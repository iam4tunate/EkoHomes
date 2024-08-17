import { useUserContext } from '@/context/AuthContext';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

type AuthLayoutProps = {
  img: string;
  children: React.ReactNode;
};

export default function AuthLayout({ img, children }: AuthLayoutProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useUserContext();
  const from = location.state?.from?.pathname || -1;

  useEffect(() => {
    if (user.id) {
      navigate(from, { replace: true });
    }
  }, [navigate, user.id, from]);

  return (
    <div className='grid grid-cols-2 max-lg:grid-cols-1 items-center max-md:items-start min-h-[calc(100vh-80px)] max-md:max-h-fit'>
      {children}
      <div className='self-stretch relative max-lg:hidden'>
        <div className='absolute top-0 w-full bottom-0 bg-primary bg-opacity-10' />
        <img src={img} alt='banner' className='h-full w-full object-cover' />
      </div>
    </div>
  );
}
