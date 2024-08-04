import Image from 'next/image';
import registerBanner from '@/public/register.jpg';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Register() {
  return (
    <div className='grid grid-cols-2 max-lg:grid-cols-1 items-center max-md:items-start min-h-[calc(100vh-80px)] max-md:max-h-fit'>
      <div className='padX padY sm:max-w-xl mx-auto w-full'>
        <div className='text-center'>
          <h4>Hello, valued client, please proceed to create your account.</h4>
          <p className='text-sm pt-1.5'>
            Please verify you are submiting your correct details.
          </p>
        </div>
        <form className='pt-8 max-sm:pt-6 space-y-4'>
          <div className=''>
            <Label htmlFor='email'>First Name</Label>
            <Input type='text' />
          </div>
          <div className=''>
            <Label htmlFor='email'>Last Name</Label>
            <Input type='text' />
          </div>
          <div className=''>
            <Label htmlFor='email'>Email Address</Label>
            <Input type='text' />
          </div>
          <div className=''>
            <Label htmlFor='email'>Phone Number</Label>
            <Input type='text' />
          </div>
          <Button className='w-full'>Register</Button>
        </form>
        <p className='pt-3 text-sm'>
          Already have an account?
          <Link href='/login'>
            <span className='pl-1 text-primary font-medium'>Log in</span>
          </Link>
        </p>
      </div>
      <div className='self-stretch relative max-lg:hidden'>
        <div className='absolute top-0 w-full bottom-0 bg-primary bg-opacity-10' />
        <Image
          src={registerBanner}
          alt='banner'
          placeholder='blur'
          className='h-full w-full object-cover'
        />
      </div>
    </div>
  );
}
