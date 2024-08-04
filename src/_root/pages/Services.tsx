import SectionHeading from "@/components/shared/SectionHeading";

type ServiceProps = {
  right?: boolean;
  heading: string;
  text: string;
  btnText: string;
  img: string;
};

const Service = ({ right, heading, text, btnText, img }: ServiceProps) => {
  return (
    <div
      className={`${
        right && "flex-row-reverse"
      } md:h-[520px] lg:h-[580px] max-md:h-full flex items-center justify-between relative container mb-24 max-lg:mb-8 last-of-type:mb-0`}>
      <div className="bg-primary z-10 text-white w-[40%] max-md:w-full max-lg:w-[60%] px-6 py-12 max-lg:py-12 max-md:py-16 relative rounded-2xl">
        <p className="font-avenirBlack text-3xl max-sm:text-2xl">{heading}</p>
        <p className="pt-6 pb-8 leading-relaxed">{text}</p>
        <button className="border rounded-md w-fit px-10 py-2 text-center hover:bg-white hover:text-black">
          {btnText}
        </button>
      </div>
      <figure
        className={` ${
          right ? "left-0" : "right-0"
        } w-[80%] max-md:hidden max-lg:left-0 max-lg:right-0 max-lg:w-full absolute my-auto`}>
        <img
          src={img}
          alt=""
          className="md:h-[520px] lg:h-[580px] rounded-2xl object-cover h-full w-full"
        />
      </figure>
    </div>
  );
};

export default function Services() {
  return (
    <div className="container padY padX">
      <SectionHeading
        icon="green"
        title="Our Services"
        paragraph="these are some of the services we offer."
      />
      <div className="py-3" />
      <Service
        img="/public/images/service.png"
        heading="Property Sales"
        text="Explore a diverse portfolio of properties for sale, including residential homes, commercial spaces, land parcels, and investment properties. With our in-depth knowledge of the market and personalized approach, we help you find the perfect property that aligns with your preferences, budget, and lifestyle."
        btnText="View Property"
      />
      <Service
        right
        img="/public/images/service.png"
        heading="Property Management"
        text="Entrust your property management needs to our experienced team and enjoy peace of mind knowing that your investment is in capable hands. From tenant screening and rent collection to maintenance and repairs, we handle every aspect of property management efficiently and professionally."
        btnText="Call Us"
      />
      <Service
        img="/public/images/service2.png"
        heading="Consultation Services"
        text="Benefit from expert advice and insights tailored to your specific real estate goals. Whether you're looking to buy, sell, rent, or invest, our seasoned professionals provide strategic guidance and actionable recommendations to help you make informed decisions and achieve optimal outcomes."
        btnText="Call Us"
      />
      <Service
        right
        img="/public/images/service.png"
        heading="Property Development"
        text="our Property Development service is designed to bring your vision to life. We handle every aspect of development, from initial concept to final construction, ensuring seamless execution and exceptional quality. Our team of experienced professionals works diligently to create innovative, sustainable, and aesthetically pleasing properties that meet the highest standards."
        btnText="Call Us"
      />
    </div>
  );
}
