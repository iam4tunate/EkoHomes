import { Link } from 'react-router-dom';
import { Button } from '../ui/button';

export default function StartJourney() {
  return (
    <div className='padX padY container'>
      <div className='bg-primary text-white rounded-lg py-8 px-6 max-md:px-4 flex max-lg:flex-col max-lg:gap-y-6 max-lg:items-start items-center justify-between'>
        <div className=''>
          <h4 className='text-3xl max-md:text-2xl'>
            Start Your Home Search Today
          </h4>
          <p className='w-[60%] max-lg:w-[80%] max-sm:w-full leading-snug pt-2 text-sm'>
            Your perfect home is just a click away. Whether you’re searching for
            a new residence, exploring investment opportunities, or seeking
            expert advice, Ekohomes is here to guide you through every step of
            your real estate journey.
          </p>
        </div>
        <Link to='/explore'>
          <Button variant='secondary' size='lg'>
            Explore Homes
          </Button>
        </Link>
      </div>
    </div>
  );
}
