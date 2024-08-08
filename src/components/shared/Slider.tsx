import { MoveLeft, MoveRight } from "lucide-react";
import { useRef, useState } from "react";
import { Swiper } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import SectionHeading from "./SectionHeading";

export default function Slider({
  children,
  background,
  title,
  text,
}: {
  children: React.ReactNode;
  background: "white" | "green";
  title: string;
  text: string;
}) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setInit] = useState<boolean>();
  const [isBegin, setIsBegin] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className={`${background === "green" && "bg-primary"}`}>
      <div className="container padX padY">
        <div className="-mb-6 max-sm:-mb-0">
          <SectionHeading
            icon={background === "white" ? "green" : "white"}
            title={title}
            paragraph={text}
          />
        </div>
        <div className="flex items-center justify-end gap-x-3 ml-auto pb-4">
          <div
            ref={prevRef}
            className={`${isBegin && "opacity-20"} ${
              background === "white" ? "border-primary" : "border-white"
            } border  p-1.5 rounded-full`}>
            <MoveLeft
              size={18}
              className={background === "white" ? "text-primary" : "text-white"}
            />
          </div>
          <div
            ref={nextRef}
            className={`${isEnd && "opacity-20"} ${
              background === "white" ? "border-primary" : "border-white"
            } border p-1.5 rounded-full`}>
            <MoveRight
              size={18}
              className={background === "white" ? "text-primary" : "text-white"}
            />
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
          {children}
        </Swiper>
      </div>
    </div>
  );
}
