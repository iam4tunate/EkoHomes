import { HomeCard, Loader } from '@/components/shared';
import { Button } from '@/components/ui/button';
import { useUserContext } from '@/context/AuthContext';
import {
  useGetHomesByCreatorId,
  useGetUserById,
} from '@/lib/react-query/queries';
import { Models } from 'appwrite';
import { HousePlus } from 'lucide-react';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function Listings() {
  const { id } = useParams();
  const { user } = useUserContext();
  const navigate = useNavigate();

  const { data: homes, isPending: isLoadingHomes } = useGetHomesByCreatorId(
    id || ''
  );
  const { data: agent, isPending: isLoadingAgent } = useGetUserById(id || '');
  const isAgent = id === user.id;
  console.log('hi', id);
  if (id === '') navigate('/login');

  return (
    <div className='container padX padY'>
      <div className='flex items-center justify-between'>
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
            <Button className='flex items-center gap-x-1'>
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
