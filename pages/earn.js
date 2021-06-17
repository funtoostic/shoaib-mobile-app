import React from 'react';
import {Box, Button, Container, VStack} from "@chakra-ui/react";
import PointsSection from "../src/components/home/PointsSection";
import Image from "next/image";
import {IoArrowForwardCircleOutline} from "react-icons/io5";
import PriceCard from "../src/components/Earn/PriceCard";

const Earn = () => {
    return (
        <Box bg={'dark.500'} minH={'100vh'} pb={'7rem'}>
            <Container maxW={'container.md'}>

                {/* Top points section*/}
                <Box pt={4} pb={6}>
                    <PointsSection/>
                </Box>

                {/*    Banner image*/}
                <Box mt={'-1.5rem'}
                     mx={'auto'}
                     h={['auto']}
                     display={'flex'}
                     justifyContent={'center'}
                     w={'100%'}
                     pos={'relative'}
                >
                    <Image
                        src={'https://billupassets.blob.core.windows.net/rewards/sample/upload-bills.png'}
                        priority={'true'}
                        placeholder={'blur'}
                        width={'568'}
                        height={'384'}
                        layout={'intrinsic'}
                        objectFit={'contain'}
                    />
                </Box>

                {/*    price cards*/}

                <VStack spacing={4}>
                    <PriceCard desc={'This is description'} price={50} title={'Title'}/>
                    <PriceCard desc={'This is description'} price={60} title={'Title'}/>
                    <PriceCard desc={'This is description'} price={70} title={'Title'}/>
                    <PriceCard desc={'This is description'} price={100} title={'Title'}/>
                </VStack>

            {/*     bottom banner*/}
                <Box mt={4} mx={'auto'} h={['auto']} display={'flex'} justifyContent={'center'} w={'100%'} pos={'relative'}>
                    <Image
                        src={'https://billupassets.blob.core.windows.net/rewards/sample/refer.png'}
                        priority={'true'}
                        placeholder={'blur'}
                        width={'968'}
                        height={'912'}
                        layout={'intrinsic'}
                        objectFit={'contain'}
                    />
                    <Box pos={'absolute'} right={'8%'} h={'100%'}>
                        <Box height={['80%']}/>

                        <Button borderRadius={'20px'}  justifyContent={'space-around'}
                                 variant={'solid'}
                                leftIcon={<IoArrowForwardCircleOutline size={20} color={'dark.700'}/>}>
                            Refer
                        </Button>

                    </Box>
                </Box>

            </Container>
        </Box>
    );
};

export default Earn;
