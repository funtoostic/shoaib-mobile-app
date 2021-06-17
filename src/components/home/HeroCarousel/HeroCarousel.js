import React from 'react';
import {Box} from "@chakra-ui/react";
import {Swiper, SwiperSlide} from "swiper/react";
import ImageWithCTABtn from "../ImageWithCTABtn";

const HeroCarousel = () => {
    return (
        <Swiper slidesPerView={'auto'} spaceBetween={5} className="mySwiper">

            <SwiperSlide >
                <ImageWithCTABtn imageSrc={`https://billupassets.blob.core.windows.net/rewards/sample/hero.png`}/>

            </SwiperSlide>


            <SwiperSlide >

                <ImageWithCTABtn imageSrc={`https://billupassets.blob.core.windows.net/rewards/sample/hero.png`}/>

            </SwiperSlide>

            <SwiperSlide >
                <ImageWithCTABtn imageSrc={`https://billupassets.blob.core.windows.net/rewards/sample/hero.png`}/>

            </SwiperSlide>

        </Swiper>
    );
};

export default HeroCarousel;
