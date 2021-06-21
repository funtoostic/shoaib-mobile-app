import React from "react";
import { Swiper, SwiperSlide, pagination } from "swiper/react";
import ImageWithCTABtn from "../ImageWithCTABtn";
import SwiperCore, { Pagination } from "swiper/core";

SwiperCore.use([Pagination]);

const HeroCarousel = ({ reward, index }) => {
  console.log(reward);

  return (
    <Swiper
      style={{ marginTop: index === 0 ? "0" : "-2rem" }}
      slidesPerView={"auto"}
      spaceBetween={5}
      className="mySwiper"
      pagination
    >
      {reward.slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <ImageWithCTABtn
            id={slide.id}
            imageSrc={slide.banner}
            title={reward.title}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroCarousel;
