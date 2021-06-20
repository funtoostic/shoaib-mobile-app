import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import CarouselImageWithCTABtn from "../home/BottomCarousel/CarouselImageWithCTABtn";

const RewardTopCarousel = ({reward,index}) => {
    return (
        <Swiper style={{marginTop: (index === 0) ? "-2rem" : '-4rem'}} slidesPerView={'auto'} spaceBetween={15} className="mySwiper">
            {
                reward.slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <CarouselImageWithCTABtn
                            id={slide.id}
                            imageSrc={slide.banner}
                        />
                    </SwiperSlide>
                ))
            }

        </Swiper>

    );
};

export default RewardTopCarousel;
