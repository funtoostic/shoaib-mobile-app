import React from 'react';
import {Box, Container} from "@chakra-ui/react";
import PointsSection from "../src/components/home/PointsSection";
import BidTimeSection from "../src/components/home/BidTiimeSection/BidTimeSection";
import CarouselImageWithCTABtn from "../src/components/home/BottomCarousel/CarouselImageWithCTABtn";
import ImageWithCTABtn from "../src/components/home/ImageWithCTABtn";

const RewardPage = () => {
    return (
        <Box bg={'dark.500'} minH={'100vh'} pb={'5rem'}>
            <Container maxW={'container.md'}>
                <Box pt={4} pb={6}>
                    <PointsSection/>
                </Box>

                <Box>
                    <BidTimeSection/>
                </Box>

                <Box mt={'-2rem'}>
                    <CarouselImageWithCTABtn imageSrc={'https://billupassets.blob.core.windows.net/rewards/sample/carousel-1.png'}/>
                </Box>

                <Box mt={'-4.5rem'}>
                    <CarouselImageWithCTABtn imageSrc={'https://billupassets.blob.core.windows.net/rewards/sample/carousel-1.png'}/>
                </Box>

                <Box mt={'-3.5rem'}>
                    <ImageWithCTABtn imageSrc={`https://billupassets.blob.core.windows.net/rewards/sample/hero.png`}/>
                </Box>

            </Container>
        </Box>
    );
};

export default RewardPage;
