import { Button } from '@/components/ui/button';
import { MoveRight } from 'lucide-react';
import { SwiperSlide } from 'swiper/react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { HomeCard, Loader, Slider } from '@/components/shared';
import { Link } from 'react-router-dom';
import StartJourney from '@/components/shared/StartJourney';
import { faqs, testimonies } from '@/lib/constants';
import { useGetFeaturedHomes } from '@/lib/react-query/queries';
import { Models } from 'appwrite';

export default function Home() {
  const { data: homes, isPending: isHomesLoading } = useGetFeaturedHomes();

  function shortenText(text: string) {
    if (text.length > 215) {
      return text.slice(0, 215) + '...';
    }
    return text;
  }

  return (
    <div>
      <div className=''>
        <div className='padX pt-16 flex flex-col items-center'>
          <div className='text-center w-[50%] max-xl:w-[60%] max-lg:w-[70%] max-sm:w-full pb-12'>
            <div className='text-6xl max-md:text-5xl max-sm:text-4xl font-geist700 max-md:font-geist700 uppercase leading-none tracking-tighter'>
              Find Your Perfect Home Today.
            </div>
            <p className='pt-5 pb-6 w-[70%] max-sm:w-full mx-auto leading-tight\'>
              Your journey to finding the perfect home starts here. Explore our
              listings to discover a home that matches your dreams
            </p>
            <div className='flex justify-center gap-x-8 gap-y-3 max-sm:flex-col'>
              <Link to='/explore'>
                <Button size='lg' className='w-full'>
                  Explore Homes
                </Button>
              </Link>
              <Link to='/apply' className='sm:hidden'>
                <Button size='lg' variant='outline' className='w-full'>
                  Become An Agent
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className='relative xl:h-[45rem] max-xl:h-[35rem] max-md:h-[30rem]'>
          <div className='absolute top-0 w-full bottom-0 bg-primary bg-opacity-10' />
          <img
            src='/images/agent.jpg'
            alt='keys'
            className='h-full object-cover object-center w-full'
          />
        </div>
      </div>

      <div
        style={{
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        }}
        className='relative grid grid-cols-4 max-lg:grid-cols-2 items-start justify-center gap-x-3 gap-y-4 container padX -translate-y-16 max-sm:-translate-y-12 z-10'>
        <div className='bg-primary hover:bg-opacity-95 text-white rounded-2xl pt-12 pb-28 px-4 relative h-full max-h-[400px]'>
          <h4>
            Home
            <br className='max-sm:hidden' /> Listings
          </h4>
          <p className='pt-5 max-sm:pt-3 pb-7 text-sm leading-relaxed'>
            {shortenText(
              "Discover a wide range of homes available for rent, carefully tailored to meet your unique needs and preferences. Whether you're searching for a cozy, spacious, or convenient apartment in the heart of the city, Ekohomes has you covered."
            )}
          </p>
          <Link to='/services'>
            <div className='w-fit flex items-center gap-x-2 text-sm cursor-pointer opacity-70'>
              <span>Learn more</span> <MoveRight size={15} />
            </div>
          </Link>
          <img
            src='/images/property_sales.png'
            alt=''
            className='absolute bottom-3 right-3 w-[7rem] max-sm:w-[8rem]'
          />
        </div>
        <div className='bg-primary hover:bg-opacity-95 text-white rounded-2xl pt-12 pb-28 px-4 relative h-full max-h-[400px]'>
          <h4>
            Consltation
            <br className='max-sm:hidden' /> Service
          </h4>
          <p className='pt-5 max-sm:pt-3 pb-7 text-sm leading-relaxed'>
            {' '}
            {shortenText(
              'Receive expert advice and insights to help you find the perfect rental property that fits your needs and lifestyle. Our dedicated team of real estate professionals is here to assist you in navigating the dynamic and sometimes complex rental market in Lagos State.'
            )}
          </p>
          <Link to='/services'>
            <div className='w-fit flex items-center gap-x-2 text-sm cursor-pointer opacity-70'>
              <span>Learn more</span> <MoveRight size={15} />
            </div>
          </Link>
          <img
            src='/images/property_manage.png'
            alt=''
            className='absolute bottom-3 right-3 w-[7rem] max-sm:w-[8rem]'
          />
        </div>
        <div className='bg-primary hover:bg-opacity-95 text-white rounded-2xl pt-12 pb-28 px-4 relative h-full max-h-[400px]'>
          <h4>
            Home Listing
            <br className='max-sm:hidden' /> Management
          </h4>
          <p className='pt-5 max-sm:pt-3 pb-7 text-sm leading-relaxed'>
            {shortenText(
              'Trust our experienced team to take care of all aspects of property management, ensuring your rental experience is not only smooth but also completely hassle-free. From routine maintenance and repairs to tenant communication and rent collection,'
            )}
          </p>
          <Link to='/services'>
            <div className='w-fit flex items-center gap-x-2 text-sm cursor-pointer opacity-70'>
              <span>Learn more</span> <MoveRight size={15} />
            </div>
          </Link>
          <img
            src='/images/consultation_service.png'
            alt=''
            className='absolute bottom-3 right-3 w-[7rem] max-sm:w-[8rem]'
          />
        </div>
        <div className='bg-primary hover:bg-opacity-95 text-white rounded-2xl relative pb-28 px-4 h-full pt-12 max-h-[400px]'>
          <h4>
            Rental
            <br className='max-sm:hidden' /> Opportunities
          </h4>
          <p className='pt-5 max-sm:pt-3 pb-7 text-sm leading-relaxed'>
            {shortenText(
              'Explore a diverse range of rental options, including modern apartments, spacious houses, and more, all carefully curated to cater to various budgets, preferences, and lifestyles.'
            )}
          </p>
          <Link to='/services'>
            <div className='w-fit flex items-center gap-x-2 text-sm cursor-pointer opacity-70'>
              <span>Learn more</span> <MoveRight size={15} />
            </div>
          </Link>
          <img
            src='/images/development.png'
            alt=''
            className='absolute bottom-3 right-3 w-[7rem] max-sm:w-[8rem]'
          />
        </div>
      </div>

      <Slider
        title='Featured Properties'
        text='Each listing provides a detailed view of outstanding rental homes and investment opportunities available through Ekohomes.'
        background='white'>
        {isHomesLoading ? (
          <div className='px-24 py-6 w-fit mx-auto'>
            <Loader color='green' size={50} />
          </div>
        ) : (
          homes?.documents.map((home: Models.Document) => (
            <SwiperSlide>
              <HomeCard key={home.$id} home={home} />
            </SwiperSlide>
          ))
        )}
      </Slider>

      <Slider
        title='What Our Client Say'
        text='Read the success stories and heartfelt testimonials from our satisfied clients. Find out why they trust Ekohomes for finding their perfect home.'
        background='green'>
        {testimonies.map((testimony) => (
          <SwiperSlide key={testimony.title}>
            <div className='pt-8 bg-gray-100 text-foreground px-4 py-4 rounded-lg'>
              <div className='leading-tight text-lg font-geist600'>
                {testimony.title}
              </div>
              <p className='text-sm leading-normal pt-2 pb-3'>
                {testimony.testimony}
              </p>
              <div className='flex items-center pt-3'>
                <div className='text-sm'>
                  <p className='font-geist500'>{testimony.name}</p>
                  <p className='text-xs'>{testimony.location}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Slider>

      <div className='padX padY container grid grid-cols-2 max-lg:grid-cols-1'>
        <div className='w-[80%] max-sm:w-full max-lg:pb-8 max-sm:pb-4'>
          <img
            src='/images/stars-green.svg'
            alt=''
            className='w-12 max-sm:w-10 mb-1 max-sm:mb-0.5'
          />
          <h3>Frequently Asked Questions</h3>
          <p className='leading-snug pt-1 text-sm'>
            Find answers to common questions about using our app, managing
            listings, and getting the most out of your real estate experience.
          </p>
        </div>
        <div className=''>
          <Accordion
            type='single'
            collapsible
            className='border rounded-lg px-4'>
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={`item-${faq.id}`}>
                <AccordionTrigger className='text-left'>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      <StartJourney />
    </div>
  );
}
