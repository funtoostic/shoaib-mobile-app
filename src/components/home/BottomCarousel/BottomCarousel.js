import React from 'react';
import {Box} from "@chakra-ui/react";
import {Swiper, SwiperSlide} from "swiper/react";
import CarouselImageWithCTABtn from "./CarouselImageWithCTABtn";


const BottomCarousel = () => {
    return (
        <Box>
            <Swiper style={{marginTop: '-2rem'}} slidesPerView={'auto'} spaceBetween={1} className="mySwiper">

                <SwiperSlide style={{width: '85%'}}>
                    <CarouselImageWithCTABtn
                        imageSrc={'https://billupassets.blob.core.windows.net/rewards/sample/carousel-1.png'}/>
                </SwiperSlide>


                <SwiperSlide style={{width: '85%'}}>
                    <CarouselImageWithCTABtn
                        imageSrc={'https://billupassets.blob.core.windows.net/rewards/sample/carousel-1.png'}/>

                </SwiperSlide>

                <SwiperSlide style={{width: '85%'}}>
                    <CarouselImageWithCTABtn
                        imageSrc={'https://billupassets.blob.core.windows.net/rewards/sample/carousel-1.png'}

                    />
                </SwiperSlide>

            </Swiper>
        </Box>
    );
};

export default BottomCarousel;
