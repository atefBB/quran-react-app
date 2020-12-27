import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.scss";

import "./assets/css/app.css";

export default function App() {
  const [currentPage, setCurrentPage] = React.useState<number>(0);

  const slides = Array.from({ length: 611 }).map(
    (el, index) => `Slide ${index + 1}`
  );

  return (
    <div className="App">
      <section>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          onSlideChange={() => setCurrentPage(currentPage + 1)}
          onSwiper={(swiper: any) => {
            setCurrentPage(currentPage + 1);
            console.log(currentPage);
          }}
        >
          {slides.map((el: any, index: number) => {
            return (
              <SwiperSlide key={el} virtualIndex={index}>
                <img
                  src={`/assets/images/quran/${index}.png`}
                  alt={`page ${currentPage}`}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </div>
  );
}
