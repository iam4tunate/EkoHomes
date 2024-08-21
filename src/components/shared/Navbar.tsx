import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';
import { useUserContext } from '@/context/AuthContext';
import { useEffect } from 'react';
import { useLogoutUuser } from '@/lib/react-query/queries';
import Logo from './Logo';
import {
  BriefcaseBusiness,
  Home,
  HousePlus,
  List,
  MenuIcon,
  Telescope,
  UserRoundCheck,
  UserRoundPen,
} from 'lucide-react';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import Loader from './Loader';

export default function Navbar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { user, isAuthenticated, isLoading: isUserLoading } = useUserContext();
  const { mutate: logout, isSuccess } = useLogoutUuser();

  useEffect(() => {
    if (isSuccess) navigate(0);
  }, [navigate, isSuccess]);

  const activeLink = 'bg-primary bg-opacity-15 text-primary';

  return (
    <div className='flex items-center justify-between container padX h-20 border-b'>
      <Logo />
      <ul className='max-md:hidden ml-auto flex items-center gap-x-12 text-sm font-geist500 pr-8'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About us</Link>
        </li>
        <li>
          <Link to='/services'>Services</Link>
        </li>
        <li>
          <Link to='/explore'>Explore</Link>
        </li>
      </ul>
      <div className='flex items-center gap-x-2'>
        <Sheet>
          <SheetTrigger asChild>
            <div className='cursor-pointer'>
              <MenuIcon className='w-7 h-7' />
            </div>
          </SheetTrigger>
          <SheetContent
            side='left'
            className='w-[300px] md:w-[350px] max-[310px]:w-full px-3'>
            <div className='pb-8 px-4'>
              <Logo />
            </div>
            <div className='pb-1 font-geist600 px-4 text-sm'>Navigation</div>
            <ul>
              <SheetClose asChild>
                <NavLink
                  to='/'
                  className={`${
                    pathname === '/'
                      ? activeLink
                      : 'hover:bg-primary hover:bg-opacity-5'
                  } flex items-center gap-x-3 py-2.5 px-4 rounded-lg`}>
                  <Home size={20} />
                  <span className='font-geist500 text-[15px]'>Home</span>
                </NavLink>
              </SheetClose>
              <SheetClose asChild>
                <NavLink
                  to='/about'
                  className={`${
                    pathname === '/about'
                      ? activeLink
                      : 'hover:bg-primary hover:bg-opacity-5'
                  } flex items-center gap-x-3 py-2.5 px-4 rounded-lg`}>
                  <UserRoundCheck size={20} />
                  <span className='font-geist500 text-[15px]'>About us</span>
                </NavLink>
              </SheetClose>
              <SheetClose asChild>
                <NavLink
                  to='/services'
                  className={`${
                    pathname === '/services'
                      ? activeLink
                      : 'hover:bg-primary hover:bg-opacity-5'
                  } flex items-center gap-x-3 py-2.5 px-4 rounded-lg`}>
                  <BriefcaseBusiness size={20} />
                  <span className='font-geist500 text-[15px]'>Services</span>
                </NavLink>
              </SheetClose>
              <SheetClose asChild>
                <NavLink
                  to='/explore'
                  className={`${
                    pathname === '/explore'
                      ? activeLink
                      : 'hover:bg-primary hover:bg-opacity-5'
                  } flex items-center gap-x-3 py-2.5 px-4 rounded-lg`}>
                  <Telescope size={20} />
                  <span className='font-geist500 text-[15px]'>Explore</span>
                </NavLink>
              </SheetClose>
            </ul>
            <div className='pb-1 font-geist600 px-4 text-sm pt-8'>Account</div>
            <ul className='space-y-1'>
              <SheetClose asChild>
                <NavLink
                  to={`/listings/${user.id}`}
                  className={`${
                    pathname === `/listings/${user.id}`
                      ? activeLink
                      : 'hover:bg-primary hover:bg-opacity-5'
                  } flex items-center gap-x-3 py-2.5 px-4 rounded-lg`}>
                  <List size={20} />
                  <span className='font-geist500 text-[15px]'>Listings</span>
                </NavLink>
              </SheetClose>
              <SheetClose asChild>
                <NavLink
                  to='/create'
                  className={`${
                    pathname === '/create'
                      ? activeLink
                      : 'hover:bg-primary hover:bg-opacity-5'
                  } flex items-center gap-x-3 py-2.5 px-4 rounded-lg`}>
                  <HousePlus size={20} />
                  <span className='font-geist500 text-[15px]'>Create</span>
                </NavLink>
              </SheetClose>
              {isAuthenticated && (
                <SheetClose asChild>
                  <NavLink
                    to='/profile'
                    className={`${
                      pathname === '/profile'
                        ? activeLink
                        : 'hover:bg-primary hover:bg-opacity-5'
                    } flex items-center gap-x-3 py-2.5 px-4 rounded-lg`}>
                    <UserRoundPen size={20} />
                    <span className='font-geist500 text-[15px]'>Profile</span>
                  </NavLink>
                </SheetClose>
              )}
              <div className='pt-6 space-y-3'>
                {user.id &&
                  user.label !== 'agent' &&
                  user.label !== 'admin' && (
                    <SheetClose asChild>
                      <Link to='/apply'>
                        <Button className='w-full bg-primary text-white'>
                          Become an Agent
                        </Button>
                      </Link>
                    </SheetClose>
                  )}
                {isAuthenticated ? (
                  <SheetClose asChild>
                    <Button
                      onClick={() => logout()}
                      className='w-full bg-red-100 text-destructive hover:bg-red-300'>
                      Log out
                    </Button>
                  </SheetClose>
                ) : (
                  <SheetClose asChild>
                    <Button
                      onClick={() => navigate('/login')}
                      className='w-full bg-primary'>
                      Log in
                    </Button>
                  </SheetClose>
                )}
              </div>
            </ul>
          </SheetContent>
        </Sheet>

        {isUserLoading ? (
          <Loader color='green' size={20} />
        ) : isAuthenticated && !isUserLoading ? (
          <div className='flex items-center gap-x-2 rounded-full px-0.5 py-0.5 border hover:shadow cursor-pointer'>
            <img
              src={user.imageUrl || '/images/user-placeholder.png'}
              alt=''
              className='rounded-full w-10 h-10'
            />
          </div>
        ) : null}

        {user.id && user.label !== 'agent' && user.label !== 'admin' && (
          <Link to='/apply' className='max-sm:hidden'>
            <Button>Become an Agent</Button>
          </Link>
        )}

        <Link
          to='/login'
          className={`pl-3 cursor-pointer py-2 px-3 hover:bg-primary hover:bg-opacity-10 text-primary rounded-md text-[15px] font-geist500 ${
            (isAuthenticated || isUserLoading) && 'hidden'
          }`}>
          Log in
        </Link>
      </div>
    </div>
  );
}
