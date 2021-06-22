import React from "react";
import { Box } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import ImageWithCTABtn from "../ImageWithCTABtn";
import SwiperCore, { Pagination } from "swiper/core";

SwiperCore.use([Pagination]);

const HeroCarousel = ({ reward, index }) => {
  console.log(reward);

  return (
    <Box pb={2}>
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
    </Box>
  );
};

export default HeroCarousel;
