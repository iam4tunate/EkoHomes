import HomeForm from '@/_auth/forms/HomeForm';
import { useUserContext } from '@/context/AuthContext';
import { HousePlus } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CreateHome() {
  const { user } = useUserContext();

  if (!user.id || user.label === 'client') {
    return (
      <div className='max-w-screen-md mx-auto padY padX '>
        {!user.id && (
          <p className='text-sm italic text-destructive pb-1'>
            No user found. Please log in to continue.
          </p>
        )}
        <div className='bg-red-100 rounded-md py-4 px-4'>
          <p>
            Only agents are allowed to create new listings.{' '}
            <Link
              to='/apply'
              className='w-fit after:w-full after:h-[1px] after:bg-primary after:block block text-primary pt-1 font-geist500'>
              Apply Now to Become an Agent
            </Link>
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className='max-w-screen-md mx-auto padY padX'>
      <div className='w-[70%] max-sm:w-full pb-4 flex items-center gap-x-1.5 text-primary'>
        <HousePlus className='w-6 h-66' />
        <div className='text-xl font-geist600 max-sm:text-xl'>
          Create New Home.
        </div>
      </div>
      <HomeForm action='Create' />
    </div>
  );
}
