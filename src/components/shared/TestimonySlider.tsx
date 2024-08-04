import { MoveLeft, MoveRight } from "lucide-react";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function TestimonySlider() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setInit] = useState<boolean>();
  const [isBegin, setIsBegin] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <>
      <div className="flex items-center justify-end gap-x-3 ml-auto pb-4">
        <div
          ref={prevRef}
          className={`${
            isBegin ? "opacity-20" : ""
          } border border-white p-1.5 rounded-full`}>
          <MoveLeft size={18} className="text-white" />
        </div>
        <div
          ref={nextRef}
          className={`${
            isEnd ? "opacity-20" : ""
          } border border-white p-1.5 rounded-full`}>
          <MoveRight size={18} className="text-white" />
        </div>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        className="mySwiper"
        onSlideChange={(swiper) => {
          setIsBegin(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}
        onInit={() => setInit(true)}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}>
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
            <p className="text-sm leading-snug pt-2 pb-3">
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
            <div className="text-lg font-geist600">Exceptional Service!</div>
            <p className="text-sm leading-snug pt-2 pb-3">
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
            <p className="text-sm leading-snug pt-2 pb-3">
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
            <p className="text-sm leading-snug pt-2 pb-3">
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
            <p className="text-sm leading-snug pt-2 pb-3">
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
            <p className="text-sm leading-snug pt-2 pb-3">
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
            <p className="text-sm leading-snug pt-2 pb-3">
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
      </Swiper>
    </>
  );
}
