import { useUserContext } from '@/context/AuthContext';
import { getGreeting } from '@/lib/utils';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Profile() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated } = useUserContext();
  const from = location.state?.from?.pathname || -1;
  const { user } = useUserContext();
  console.log(user);

  useEffect(() => {
    if (!isAuthenticated) {
      return navigate(from, { replace: true });
    }
  }, [navigate, from, isAuthenticated]);

  return (
    <div className='container padX padY'>
      <div className='capitalize font-geist600 text-lg pb-3 flex items-center'>
        {getGreeting()}
        <img
          src='/images/wave.png'
          alt=''
          className='w-5 h-5 object-cover ml-1'
        />{' '}
        {user.first_name}.
      </div>
      <div className='bg-destructive-foreground py-4 px-6 max-sm:px-3 rounded-xl shadow space-y-5 max-w-xl'>
        <div className=''>
          <p className='pb-1 text-sm opacity-90'>Profile picture</p>
          <img src={user.imageUrl} alt='' className='w-20 h-20 rounded-full' />
        </div>
        <div className=''>
          <p className='pb-1 text-sm opacity-90'>Name</p>
          <p className='capitalize'>
            {user.first_name} {user.last_name}
          </p>
        </div>
        <div className=''>
          <p className='pb-1 text-sm opacity-90'>Email</p>
          <p className='lowercase'>{user.email}</p>
        </div>
        <div className=''>
          <p className='pb-1 text-sm opacity-90'>Phone Number</p>
          <p className=''>{user.phone_number}</p>
        </div>
        <div className=''>
          <p className='pb-1 text-sm opacity-90'>Status</p>
          <p className='font-geist600 uppercase bg-primary bg-opacity-15 w-fit py-1 px-2 rounded-md text-sm'>
            {user.label}
          </p>
        </div>
      </div>
    </div>
  );
}
