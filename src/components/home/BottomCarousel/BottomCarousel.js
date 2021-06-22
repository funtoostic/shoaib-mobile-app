import React from 'react';
import {Box} from "@chakra-ui/react";
import {Swiper, SwiperSlide} from "swiper/react";
import CarouselImageWithCTABtn from "./CarouselImageWithCTABtn";

const BottomCarousel = ({reward,index}) => {
    return (
        <Box>
            <Swiper style={{ marginTop: (index === 0) ? "-2rem" : '-3rem'}} slidesPerView={'auto'} spaceBetween={10} className="mySwiper">

                {
                    reward.slides.map((slide) => (
                        <SwiperSlide key={slide.id} style={{width: '85%'}}>
                            <CarouselImageWithCTABtn
                                id={slide.id}
                                imageSrc={slide.banner}/>
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </Box>
    );
};

export default BottomCarousel;
