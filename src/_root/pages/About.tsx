import { SectionHeading } from "@/components/shared";
import Cta from "@/components/shared/Cta";
import { GraduationCap, Handshake, Star, Users } from "lucide-react";

export default function About() {
  return (
    <div>
      <div className="max-lg:padX grid grid-cols-2 max-lg:grid-cols-1 items-center justify-between">
        <div className="lg:padX py-12 lg:max-w-2xl ml-auto  max-lg:w-full max-lg:ml-">
          <img
            src="/public/images/stars-green.svg"
            alt=""
            className="w-12 max-sm:w-10 mb-1 max-sm:mb-0.5"
          />
          <h3>Our Journey</h3>
          <p className="leading-snug pt-2 text-sm">
            Our story is one of continuous growth and evolution. We started as a
            small team with big dreams, determined to create a real estate
            platform that transcended the ordinary. Over the years, we&apos;ve
            expanded our reach, forged valuable partnerships, and gained the
            trust of countless clients.
          </p>
          <div className="pt-6 flex items-center max-sm:grid max-sm:grid-cols-1 max-sm:gap-y-4 gap-x-6">
            <div className="border-primary border py-3 px-4 rounded-sm">
              <div className="text-2xl font-geist600">200+</div>
              <p className="text-sm">Happy Customers</p>
            </div>
            <div className="border-primary border py-3 px-4 rounded-sm">
              <div className="text-2xl font-geist600">10k+</div>
              <p className="text-sm">Properties Sold</p>
            </div>
            <div className="border-primary border py-3 px-4 rounded-sm">
              <div className="text-2xl font-geist600">18+</div>
              <p className="text-sm">Years of Experience</p>
            </div>
          </div>
        </div>
        <div className="max-lg:hidden">
          <img
            src="/public/images/houseOnHand.svg"
            alt="house on hand"
            className="w-full object-cover ml-auto"
          />
        </div>
      </div>

      <div className="bg-primary text-white text-opacity-90">
        <div className="container padX py-14 grid grid-cols-[40%_55%] max-lg:grid-cols-1 justify-between gap-x-12">
          <div className="max-lg:pb-8 max-sm:pb-4 max-lg:w-[70%] max-sm:w-full">
            <img
              src="/public/images/stars-white.svg"
              alt=""
              className="w-12 max-sm:w-10 mb-1 max-sm:mb-0.5"
            />
            <h3>Our Values</h3>
            <p className="leading-snug pt-1 text-sm">
              Our story is one of continuous growth and evolution. We started as
              a small team with big dreams, determined to create a real estate
              platform that transcended the ordinary.
            </p>
          </div>
          <div className="border border-white border-opacity-20 text-opacity-90 px-8 max-sm:px-4 py-12 grid grid-cols-2 max-sm:grid-cols-1 gap-x-8 gap-y-10 rounded-xl">
            <div className="">
              <div className="flex items-center gap-x-2">
                <div className="border-2 border-white border-opacity-80 rounded-full p-2">
                  <Handshake color="#fff" size={23} />
                </div>
                <div className="text-lg font-medium">Trust</div>
              </div>
              <p className="text-sm pt-2">
                Trust is the cornerstone of every successful real estate
                transaction.
              </p>
            </div>
            <div className="">
              <div className="flex items-center gap-x-2">
                <div className="border-2 border-white border-opacity-80 rounded-full p-2">
                  <GraduationCap color="#fff" size={23} />
                </div>
                <div className="text-lg font-medium">Excelence</div>
              </div>
              <p className="text-sm pt-2">
                We set the bar high for ourselves. From the properties we list
                to the services we provide.
              </p>
            </div>
            <div className="">
              <div className="flex items-center gap-x-2">
                <div className="border-2 border-white border-opacity-80 rounded-full p-2">
                  <Users color="#ffffff" size={23} />
                </div>
                <div className="text-lg font-medium">Client-Centric</div>
              </div>
              <p className="text-sm pt-2">
                Your dreams and needs are at the center of our universe. We
                listen, understand.
              </p>
            </div>
            <div className="">
              <div className="flex items-center gap-x-2">
                <div className="border-2 border-white border-opacity-80 rounded-full p-2">
                  <Star color="#fff" size={23} />
                </div>
                <div className="text-lg font-medium">Our Commitment</div>
              </div>
              <p className="text-sm pt-2">
                We are dedicated to providing you with the highest level of
                service, professionalism, and support.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="padX padY">
        <SectionHeading
          icon="green"
          title="Our Achievements"
          paragraph="Our story is one of continuous growth and evolution. We started as a
            small team with big dreams, determined to create a real estate
            platform that transcended the ordinary."
        />
        <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-x-6 gap-y-6">
          <div className="border border-primary py-8 px-4 rounded-lg">
            <h4 className="font-medium">3+ Years of Excellence</h4>
            <p className="text-sm leading-tight pt-2 pb-3">
              Our experience with KOA was outstanding. Their team&apos;s
              dedication and professionalism made finding our dream home a
              breeze. Highly recommended!
            </p>
          </div>
          <div className="border border-primary py-8 px-4 rounded-lg">
            <h4 className="font-medium">Happy Clients</h4>
            <p className="text-sm leading-tight pt-2 pb-3">
              Our greatest achievement is the satisfaction of our clients. Their
              success stories fuel our passion for what we do.
            </p>
          </div>
          <div className="border border-primary py-8 px-4 rounded-lg">
            <h4 className="font-medium">Industry Recognition</h4>
            <p className="text-sm leading-tight pt-2 pb-3">
              We&apos;ve earned the respect of our peers and industry leaders,
              with accolades and awards that reflect our commitment to
              excellence.
            </p>
          </div>
        </div>
      </div>

      <Cta />
    </div>
  );
}
