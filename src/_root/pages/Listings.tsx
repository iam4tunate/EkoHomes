import { HomeCard, Loader } from '@/components/shared';
import { Button } from '@/components/ui/button';
import { useUserContext } from '@/context/AuthContext';
import {
  useGetHomesByCreatorId,
  useGetUserById,
} from '@/lib/react-query/queries';
import { Models } from 'appwrite';
import { HousePlus } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

export default function Listings() {
  const { id } = useParams();
  const { user } = useUserContext();

  const { data: homes, isPending: isLoadingHomes } = useGetHomesByCreatorId(
    id || ''
  );
  const { data: agent, isPending: isLoadingAgent } = useGetUserById(id || '');
  const isAgent = id === user.id;

  if (!user.id || user.label === 'client' && user.id === id) {
    return (
      <div className='max-w-screen-md mx-auto padY padX '>
        {!user.id && (
          <p className='text-sm italic text-destructive pb-1'>
            No user found. Please log in to continue.
          </p>
        )}
        <div className='bg-red-100 rounded-md py-4 px-4'>
          <p>
            Only agents are allowed to create & view their listings. Interested?{' '}
            <Link
              to='/apply'
              className='w-fit after:w-full after:h-[1px] after:bg-primary after:block block text-primary pt-1 font-geist500'>
              Apply now to become an agent!
            </Link>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className='container padX padY'>
      <div className='flex flex-wrap gap-x-6 gap-y-2 items-center justify-between'>
        <div className='flex items-center gap-x-2 text-primary'>
          <h4 className='inline'>
            All Listings by{' '}
            {isAgent ? (
              <span className='pl-1.5'>you</span>
            ) : isLoadingAgent ? (
              <div className='pl-2 inline'>
                <Loader color='green' size={15} />
              </div>
            ) : (
              <span className='capitalize'>
                {agent?.first_name} {agent?.last_name}
              </span>
            )}
          </h4>
        </div>
        {isAgent && (
          <Link to='/create'>
            <Button variant="secondary" className='flex items-center gap-x-1'>
              <HousePlus className='h-5 w-5' />
              Create Home Listing
            </Button>
          </Link>
        )}
      </div>
      <div className=''>
        {isLoadingHomes ? (
          <div className='padY flex items-center justify-center w-fit mx-auto'>
            <Loader color='green' size={50} />
          </div>
        ) : (
          <div className='grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-x-6 gap-y-8 pt-7'>
            {homes?.documents.map((home: Models.Document) => (
              <HomeCard key={home.$id} home={home} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
