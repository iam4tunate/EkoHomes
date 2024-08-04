import { MoveLeft, MoveRight } from "lucide-react";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import PropertyCard from "./PropertyCard";

export default function PropertySlider() {
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
          } border border-primary p-1.5 rounded-full cursor-pointer`}>
          <MoveLeft size={18} className="text-primary" />
        </div>
        <div
          ref={nextRef}
          className={`${
            isEnd ? "opacity-20" : ""
          } border border-primary p-1.5 rounded-full cursor-pointer`}>
          <MoveRight size={18} className="text-primary" />
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
          delay: 5000,
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
          <PropertyCard />
        </SwiperSlide>
        <SwiperSlide>
          <PropertyCard />
        </SwiperSlide>
        <SwiperSlide>
          <PropertyCard />
        </SwiperSlide>
        <SwiperSlide>
          <PropertyCard />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
