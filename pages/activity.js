import React from 'react';
import {Box, Container, HStack, Spacer, VStack} from "@chakra-ui/react";
import ActivityCard from "../src/components/Activity/ActivityCard";

const Activity = () => {
    return (
        <Box bg={'dark.500'} minH={'100vh'} pb={'5rem'}>

            <Container
                pt={6}
                maxW={'container.md'}
            >

                <HStack
                    borderRadius={'xl'}
                    p={4}
                    bg={'brand.lightRed'}
                >
                    <Box color={'white'} fontSize={'1.3rem'} fontWeight={'bold'}>
                        0 / 4
                    </Box>

                    <Spacer/>

                    <Box color={'white'} fontSize={'1.3rem'} fontWeight={'bold'}>My Bids</Box>

                </HStack>

                <VStack w={'100%'} mt={8}>
                    <ActivityCard
                        price={'+20'}
                    imgSrc={'https://billupassets.blob.core.windows.net/rewards/sample/hero.png'}
                                  heading={'Heading'}
                                  desc={'Description'}
                    />

                    <ActivityCard
                        price={'+20'}
                    imgSrc={'https://billupassets.blob.core.windows.net/rewards/sample/hero.png'}
                                  heading={'Heading'}
                                  desc={'Description'}
                    />

                    <ActivityCard
                        price={'+20'}
                    imgSrc={'https://billupassets.blob.core.windows.net/rewards/sample/hero.png'}
                                  heading={'Heading'}
                                  desc={'Description'}
                    />

                    <ActivityCard
                        price={'+20'}
                    imgSrc={'https://billupassets.blob.core.windows.net/rewards/sample/hero.png'}
                                  heading={'Heading'}
                                  desc={'Description'}
                    />

                </VStack>

            </Container>
        </Box>
    );
};

export default Activity;
