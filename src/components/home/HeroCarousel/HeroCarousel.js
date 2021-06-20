import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import ImageWithCTABtn from "../ImageWithCTABtn";

const HeroCarousel = ({reward,index}) => {

    console.log(reward)

    return (
        <Swiper style={{marginTop: (index === 0) ? "0" : "-2rem"}} slidesPerView={'auto'} spaceBetween={5} className="mySwiper">

            {
                reward.slides.map((slide,index) => (

                    <SwiperSlide key={index}>
                        <ImageWithCTABtn id={slide.id} imageSrc={slide.banner}/>

                    </SwiperSlide>
                ))
            }

        </Swiper>
    );
};

export default HeroCarousel;
