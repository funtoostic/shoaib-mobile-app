import React from 'react';
import {Box, Container} from "@chakra-ui/react";
import PointsSection from "../src/components/home/PointsSection";
import BidTimeSection from "../src/components/home/BidTiimeSection/BidTimeSection";
import CarouselImageWithCTABtn from "../src/components/home/BottomCarousel/CarouselImageWithCTABtn";
import HeroCarousel from "../src/components/home/HeroCarousel/HeroCarousel";
import {Swiper, SwiperSlide} from "swiper/react";

const RewardPage = () => {
    return (
        <Box bg={'dark.500'} minH={'100vh'} pb={'5rem'}>
            <Container maxW={'container.md'}>

                {/* Top points section*/}
                <Box pt={4} pb={6}>
                    <PointsSection/>
                </Box>

                {/*/ Bid time section*/}
                <Box>
                    <BidTimeSection/>
                </Box>

                {/* First image carousel*/}
                <Swiper style={{marginTop: '-2rem'}} slidesPerView={'auto'} spaceBetween={5} className="mySwiper">

                    <SwiperSlide>
                        <CarouselImageWithCTABtn
                            imageSrc={'https://billupassets.blob.core.windows.net/rewards/sample/carousel-1.png'}
                        />

                    </SwiperSlide>


                    <SwiperSlide>
                        <CarouselImageWithCTABtn
                            imageSrc={'https://billupassets.blob.core.windows.net/rewards/sample/carousel-1.png'}
                        />

                    </SwiperSlide>

                    <SwiperSlide>
                        <CarouselImageWithCTABtn
                            imageSrc={'https://billupassets.blob.core.windows.net/rewards/sample/carousel-1.png'}
                        />

                    </SwiperSlide>

                </Swiper>


                {/* Second image carouel*/}
                <Swiper style={{marginTop: '-4.5rem'}} slidesPerView={'auto'} spaceBetween={5} className="mySwiper">

                    <SwiperSlide>
                        <CarouselImageWithCTABtn
                            imageSrc={'https://billupassets.blob.core.windows.net/rewards/sample/carousel-1.png'}
                        />


                    </SwiperSlide>


                    <SwiperSlide>
                        <CarouselImageWithCTABtn
                            imageSrc={'https://billupassets.blob.core.windows.net/rewards/sample/carousel-1.png'}
                        />


                    </SwiperSlide>

                    <SwiperSlide>
                        <CarouselImageWithCTABtn
                            imageSrc={'https://billupassets.blob.core.windows.net/rewards/sample/carousel-1.png'}
                        />

                    </SwiperSlide>

                </Swiper>


                {/* Hero image carousel*/}
                <Box mt={'-3.5rem'}>
                    <HeroCarousel/>
                </Box>

            </Container>
        </Box>
    );
};

export default RewardPage;
