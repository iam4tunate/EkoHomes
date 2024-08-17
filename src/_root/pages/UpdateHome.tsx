import HomeForm from '@/_auth/forms/HomeForm';
import { Loader } from '@/components/shared';
import { useUserContext } from '@/context/AuthContext';
import { useGetHomeById } from '@/lib/react-query/queries';
import { FilePenLine } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

export default function UpdateHome() {
  const { id } = useParams();
  const { user } = useUserContext();
  const navigate = useNavigate();
  const { data: home, isPending } = useGetHomeById(id || '');

  if (!user.id || user.id !== home?.creator.$id) {
    return (
      <div className='max-w-screen-md mx-auto padY padX '>
        {!user.id && (
          <p className='text-sm italic text-destructive pb-1'>
            No user found. Please log in to continue.
          </p>
        )}
        <div className='bg-red-100 rounded-md py-4 px-4'>
          <p className='leading-tight'>
            Only the agent who originally uploaded the home listing is permitted
            to update.{' '}
            <div
              onClick={() => navigate(-1)}
              className='w-fit after:w-full after:h-[1px] after:bg-primary after:block block text-primary pt-2 font-geist500'>
              Go Back
            </div>
          </p>
        </div>
      </div>
    );
  }

  if (isPending) {
    return (
      <div className='my-16 flex items-center justify-center'>
        <Loader color='green' size={50} />
      </div>
    );
  }

  return (
    <div className='max-w-screen-md mx-auto padY padX'>
      <div className='w-[70%] max-sm:w-full pb-4 flex items-center gap-x-2 text-primary'>
        <FilePenLine size={30} />
        <h4>Update Home Details</h4>
      </div>
      <HomeForm action='Update' home={home} />
    </div>
  );
}
