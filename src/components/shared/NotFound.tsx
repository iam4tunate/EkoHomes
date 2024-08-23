import { Link } from 'react-router-dom';
import { Button } from '../ui/button';

export default function NotFound() {
  return (
    <div className='max-w-md mx-auto text-center py-16 padX'>
      <img src='/images/404.jpg' alt='Not Found' className='' />
      <h3 className=''>404 - Page Not Found</h3>
      <p className='pt-1 pb-3 font-geist500'>
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link to='/'>
        <Button variant='outline'>Go Back to Home</Button>
      </Link>
    </div>
  );
}
