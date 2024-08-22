import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { FreeMode, Navigation, Thumbs, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

export default function GalleryThumb({ urls }: { urls: string[] }) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  return (
    <>
      <Swiper
        draggable={false}
        spaceBetween={10}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs, Pagination]}
        className='mySwiper2 galleryThumb1'>
        {urls.map((url, index) => (
          <SwiperSlide key={index}>
            <img src={url} alt={`Home ${index}`} className='object-cover rounded-xl' />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        draggable={false}
        spaceBetween={10}
        slidesPerView={3.5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        breakpoints={{
          550: {
            slidesPerView: 4.5,
          },
          // 768: {
          //   slidesPerView: 5.5,
          // },
        }}
        className='mySwiper galleryThumb2'>
        {urls.map((url, index) => (
          <SwiperSlide key={index}>
            <img src={url} alt={`Home ${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
