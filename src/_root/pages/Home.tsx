import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import { SwiperSlide } from "swiper/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { Cta, Slider } from "@/components/shared";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div className="">
        <div className="padX pt-16 flex flex-col items-center">
          <div className="text-center w-[50%] max-lg:w-[70%] max-sm:w-full pb-12">
            <div className="text-6xl max-md:text-5xl max-sm:text-4xl font-geist700 max-md:font-geist600 uppercase leading-none tracking-tighter">
              Discover your dream Home.
            </div>
            <p className="pt-5 pb-6 w-[70%] max-sm:w-full mx-auto">
              Your journey for finding the perfect property begins here. Explore
              our listings to find the home that matches you dream.
            </p>
            <div className="flex justify-center gap-x-8 gap-y-3 max-sm:flex-col">
              <Link to="/explore">
                <Button>Explore Properties</Button>
              </Link>
              <Button variant="outline">Contact us</Button>
            </div>
          </div>
        </div>
        <div className="relative xl:h-[45rem] max-xl:h-[35rem] max-md:h-[30rem]">
          <div className="absolute top-0 w-full bottom-0 bg-primary bg-opacity-10" />
          <img
            src="/public/images/keys.jpg"
            alt="keys"
            className="h-full object-cover object-bottom w-full"
          />
        </div>
      </div>

      <div
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        }}
        className="relative grid grid-cols-4 max-lg:grid-cols-2 items-start justify-center gap-x-3 gap-y-4 container padX -translate-y-16 max-sm:-translate-y-12 z-10">
        <div className="bg-primary hover:bg-opacity-95 text-white rounded-2xl pt-12 pb-28 px-4 relative h-full max-h-[400px]">
          <h4>
            Property
            <br className="max-sm:hidden" /> Sales
          </h4>
          <p className="pt-5 max-sm:pt-3 pb-7 text-sm leading-relaxed">
            Explore a diverse portfolio of properties for sale, including
            residential homes, commercial spaces, land parcels, and investment
            properties.
          </p>
          <div className="flex items-center gap-x-2 text-sm cursor-pointer">
            <span>Learn more</span> <MoveRight size={15} />
          </div>
          <img
            src="/public/images/property_sales.png"
            alt=""
            className="absolute bottom-3 right-3 w-[7rem] max-sm:w-[8rem]"
          />
        </div>
        <div className="bg-primary hover:bg-opacity-95 text-white rounded-2xl pt-12 pb-28 px-4 relative h-full max-h-[400px]">
          <h4>
            Property
            <br className="max-sm:hidden" /> Management
          </h4>
          <p className="pt-5 max-sm:pt-3 pb-7 text-sm leading-relaxed">
            Entrust your property management needs to our experienced team and
            enjoy peace of mind knowing that your investment is in capable
            hands.
          </p>
          <div className="flex items-center gap-x-2 text-sm cursor-pointer">
            <span>Learn more</span> <MoveRight size={15} />
          </div>
          <img
            src="/public/images/property_manage.png"
            alt=""
            className="absolute bottom-3 right-3 w-[7rem] max-sm:w-[8rem]"
          />
        </div>
        <div className="bg-primary hover:bg-opacity-95 text-white rounded-2xl pt-12 pb-28 px-4 relative h-full max-h-[400px]">
          <h4>
            Consultation
            <br className="max-sm:hidden" /> Service
          </h4>
          <p className="pt-5 max-sm:pt-3 pb-7 text-sm leading-relaxed">
            Benefit from expert advice and insights tailored to your specific
            real estate goals. Whether you&apos;re looking to buy, sell, rent,
            or invest.
          </p>
          <div className="flex items-center gap-x-2 text-sm cursor-pointer">
            <span>Learn more</span> <MoveRight size={15} />
          </div>
          <img
            src="/public/images/consultation_service.png"
            alt=""
            className="absolute bottom-3 right-3 w-[7rem] max-sm:w-[8rem]"
          />
        </div>
        <div className="bg-primary hover:bg-opacity-95 text-white rounded-2xl relative pb-28 px-4 h-full pt-12 max-h-[400px]">
          <h4>
            Property
            <br className="max-sm:hidden" /> Development
          </h4>
          <p className="pt-5 max-sm:pt-3 pb-7 text-sm leading-relaxed">
            Benefit from expert advice and insights tailored to your specific
            real estate goals. Whether you&apos;re looking to buy, sell, rent,
            or invest.
          </p>
          <div className="flex items-center gap-x-2 text-sm">
            <span>Learn more</span> <MoveRight size={15} />
          </div>
          <img
            src="/public/images/development.png"
            alt=""
            className="absolute bottom-3 right-3 w-[7rem] max-sm:w-[8rem]"
          />
        </div>
      </div>

      {/* <Slider
        title="Featured Properties"
        text="Each listing offers a glimpse into exceptional homes and investments available through KOA properties."
        background="white">
        <SwiperSlide>
          <HomeCard />
        </SwiperSlide>
        <SwiperSlide>
          <HomeCard />
        </SwiperSlide>
        <SwiperSlide>
          <HomeCard />
        </SwiperSlide>
        <SwiperSlide>
          <HomeCard />
        </SwiperSlide>
        <SwiperSlide>
          <HomeCard />
        </SwiperSlide>
      </Slider> */}

      <Slider
        title="What Our Client Say"
        text="Read the success stories and heartfelt testimonials from our valued
            clients. Discover why they chose Estatein for their real estate
            needs."
        background="green">
        <SwiperSlide>
          <div className="pt-8 bg-gray-100 text-foreground px-4 py-4 rounded-lg">
            <div className=" text-lg font-geist600">Exceptional Service!</div>
            <p className="text-sm leading-tight pt-2 pb-3">
              Our experience with KOA was outstanding. Their team&apos;s
              dedication and professionalism made finding our dream home a
              breeze. Highly recommended!
            </p>
            <div className="flex items-center pt-4">
              <img
                src="/public/images/passport.jpg"
                alt="avatar"
                className="w-10 h-10 object-cover object-top rounded-full"
              />
              <div className="text-sm pl-3">
                <p className="font-geist500">Wande Jamiu</p>
                <p className="text-xs">Lagos, Nigeria</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="pt-8 bg-gray-100 text-foreground px-4 py-4 rounded-lg">
            <div className=" text-lg font-geist600">Exceptional Service!</div>
            <p className="text-sm leading-tight pt-2 pb-3">
              Our experience with KOA was outstanding. Their team&apos;s
              dedication and professionalism made finding our dream home a
              breeze. Highly recommended!
            </p>
            <div className="flex items-center pt-4">
              <img
                src="/public/images/passport.jpg"
                alt="avatar"
                className="w-10 h-10 object-cover object-top rounded-full"
              />
              <div className="text-sm pl-3">
                <p className="font-geist500">Wande Jamiu</p>
                <p className="text-xs">Lagos, Nigeria</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="pt-8 bg-gray-100 text-foreground px-4 py-4 rounded-lg">
            <div className=" text-lg font-geist600">Exceptional Service!</div>
            <p className="text-sm leading-tight pt-2 pb-3">
              Our experience with KOA was outstanding. Their team&apos;s
              dedication and professionalism made finding our dream home a
              breeze. Highly recommended!
            </p>
            <div className="flex items-center pt-4">
              <img
                src="/public/images/passport.jpg"
                alt="avatar"
                className="w-10 h-10 object-cover object-top rounded-full"
              />
              <div className="text-sm pl-3">
                <p className="font-geist500">Wande Jamiu</p>
                <p className="text-xs">Lagos, Nigeria</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="pt-8 bg-gray-100 text-foreground px-4 py-4 rounded-lg">
            <div className=" text-lg font-geist600">Exceptional Service!</div>
            <p className="text-sm leading-tight pt-2 pb-3">
              Our experience with KOA was outstanding. Their team&apos;s
              dedication and professionalism made finding our dream home a
              breeze. Highly recommended!
            </p>
            <div className="flex items-center pt-4">
              <img
                src="/public/images/passport.jpg"
                alt="avatar"
                className="w-10 h-10 object-cover object-top rounded-full"
              />
              <div className="text-sm pl-3">
                <p className="font-geist500">Wande Jamiu</p>
                <p className="text-xs">Lagos, Nigeria</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Slider>

      <div className="padX padY container grid grid-cols-2 max-lg:grid-cols-1">
        <div className="w-[80%] max-sm:w-full max-lg:pb-8 max-sm:pb-4">
          <img
            src="/public/images/stars-green.svg"
            alt=""
            className="w-12 max-sm:w-10 mb-1 max-sm:mb-0.5"
          />
          <h3>Frequently Asked Questions</h3>
          <p className="leading-snug pt-1 text-sm">
            Read the success stories and heartfelt testimonials from our valued
            clients. Discover why they chose Estatein for their real estate
            needs.
          </p>
        </div>
        <div className="">
          <Accordion
            type="single"
            collapsible
            className="w-full border rounded-xl">
            <AccordionItem value="item-1" className="px-5">
              <AccordionTrigger className="text-base">
                Is it accessible?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="px-5">
              <AccordionTrigger className="text-base">
                Is it styled?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="px-5">
              <AccordionTrigger className="text-base">
                Is it animated?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <Cta />
    </div>
  );
}
