import { Bath, Bed } from 'lucide-react';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import { formatNumberWithCommas, shortenText } from '@/lib/utils';
import { Models } from 'appwrite';

export default function HomeCard({ home }: { home: Models.Document }) {
  const getLength = (number: number, text: string) => {
    if (number > 1) {
      return `${number} ${text}s`;
    } else {
      return `${number} ${text}`;
    }
  };

  return (
    <div className='relative border rounded-xl w-full py-4 px-3 max-sm:p-2.5 bg-white overflow-hidden'>
      <figure className='h-[300px]'>
        <img
          src={home.imageUrls[0]}
          alt='property'
          className='rounded-lg w-full h-full hover:scale- animate-in duration-200 object-cover'
        />
      </figure>
      <div className='pt-4 font-geist600 truncate ...'>{home.title}</div>
      <p className='text-sm leading-tight pt-2 pb-3 font-geist400'>
        {shortenText(home.description, 130)}
      </p>
      <div className='flex flex-wrap gap-y-2 items-center gap-x-4'>
        <div className='border rounded-full flex items-center gap-x-2 py-1 px-2'>
          <Bed size={15} />
          <span className='text-xs'>{getLength(home.bedrooms, 'Bedroom')}</span>
        </div>
        <div className='border rounded-full flex items-center gap-x-2 py-1 px-2'>
          <Bath size={15} />
          <span className='text-xs'>
            {getLength(home.bathrooms, 'Bathroom')}
          </span>
        </div>
        <div className='border rounded-full flex items-center gap-x-2 py-1 px-2'>
          <Bath size={15} />
          <span className='text-xs'>{getLength(home.toilets, 'Toilet')}</span>
        </div>
      </div>
      <div className='pt-6 flex items-end justify-between'>
        <div className=''>
          <span className='text-sm'>Price:</span>
          <p className='text-lg font-geist700'>
            {formatNumberWithCommas(home.price)}
          </p>
        </div>
        <Link to={`/home/${home.$id}`}>
          <Button>View Details</Button>
        </Link>
      </div>
    </div>
  );
}
