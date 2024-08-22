import { useUserContext } from '@/context/AuthContext';
import { agentBenefits } from '@/lib/constants';
import { useLocation, useNavigate } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';
import { useLogoutUuser, useUpgradeToAgent } from '@/lib/react-query/queries';
import { useEffect } from 'react';
import PaystackPop from '@paystack/inline-js';
import { Button } from '@/components/ui/button';

export default function Apply() {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const { user, isAuthenticated } = useUserContext();
  const from = location.state?.from?.pathname || -1;

  const { mutateAsync: upgrade } = useUpgradeToAgent();
  const { mutate: logout, isSuccess } = useLogoutUuser();

  useEffect(() => {
    if (!isAuthenticated || user.label !== 'client') {
      return navigate(from, { replace: true });
    }
  }, [navigate, user, from, isAuthenticated]);

  const publicKey = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY;
  const amount = 12000;
  function payWithPaystack(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const paystack = new PaystackPop();
    paystack.newTransaction({
      key: publicKey,
      amount: amount * 100,
      email: user.email,
      firstname: user.first_name,
      lastname: user.last_name,
      onSuccess: () => {
        toast({
          variant: 'success',
          description: 'Payment Successful',
        });

        const data = {
          id: user.id,
          label: 'agent',
        };
        upgrade(data);
        logout();
      },
      onClose: () => {
        toast({
          variant: 'destructive',
          description:
            'We encountered an issue while attempting to upgrade your account. Please try again',
        });
      },
    });
  }

  useEffect(() => {
    if (isSuccess) navigate(0);
  }, [navigate, isSuccess]);

  return (
    <div className='grid grid-cols-2 gap-x-12 max-lg:grid-cols-1 min-h-[calc(100vh-80px)] max-md:max-h-fit'>
      <div className='padX padY sm:max-w-3xl w-full'>
        <h3>Become an Agent on Ekohomes</h3>
        <p className='pt-2 pb-5'>
          As an agent on our real estate platform, you unlock exclusive features
          designed to help you manage your listings with ease:
        </p>
        <ul className='space-y-6'>
          {agentBenefits.map((benefit, index) => (
            <li key={index} className='grid grid-cols-[8px_1fr] gap-x-2'>
              <div className='w-2 h-2 bg-primary rounded-full mt-1.5'></div>
              <span>
                <span className='font-geist600 pr-1'>{benefit.title}:</span>
                {benefit.text}
              </span>
            </li>
          ))}
        </ul>
        <div className='pt-6'>
          <p className='font-geist600 text-primary pb-6'>
            Join our community of agents today and take full control of your
            real estate portfolio!
          </p>
          <Button onClick={payWithPaystack}>Apply Now</Button>
          <p className='text-red-500 italic pt-4'>
            Note: Paystack is currently in Test Mode, so there's no need to use
            your actual credit card. No real transactions will occur, and your
            money won't be deducted.
          </p>
        </div>
      </div>
      <div className='self-stretch relative max-lg:hidden'>
        <div className='absolute top-0 w-full bottom-0 bg-primary bg-opacity-10' />
        <img
          src='/images/register.jpg'
          alt='banner'
          className='h-full w-full object-cover'
        />
      </div>
    </div>
  );
}
