import { SectionHeading } from '@/components/shared';
import { servicesList } from '@/lib/constants';

export default function Services() {
  return (
    <div className='padY'>
      <div className='padX w-[60%] max-lg:w-[80%] max-sm:w-full pb-8 max-sm:pb-4'>
        <h3>Our Services</h3>
        <p className='leading-snug pt-2 text-[15px]'>
          At Ekohomes, we are dedicated to making your home search and
          management experience seamless and stress-free. Whether
          you're looking for a new home in Lagos State or managing property
          listings, our comprehensive services have you covered.
        </p>
      </div>
      <div className=''>
        {servicesList.map((service, index) => (
          <div
            key={index}
            className={`${
              service.ccolouredBg ? 'bg-primary text-white' : 'bg-white'
            } padX py-12`}>
            <SectionHeading
              icon={service.ccolouredBg ? 'white' : 'green'}
              title={service.heading}
              paragraph={service.subHeading}
            />
            <div className='max-sm:pt-4 grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-x-4 gap-y-4'>
              {service.subServices.map((item) => (
                <div
                  className={`${
                    service.ccolouredBg
                      ? 'border-white border-opacity-70'
                      : 'border-primary'
                  } border py-7 px-4 max-sm:px-2 max-sm:py-6 rounded-lg`}>
                  <h4 className='font-medium'>{item.title}</h4>
                  <p className='text-sm leading-tight pt-2 pb-3'>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
