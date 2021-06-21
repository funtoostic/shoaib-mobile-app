import React from 'react';
import {Box, Container, VStack} from "@chakra-ui/react";
import PointsSection from "../src/components/home/PointsSection";
import Image from "next/image";
import {IoArrowForwardCircleOutline} from "react-icons/io5";
import PriceCard from "../src/components/Earn/PriceCard";
import {client} from "../src/utils/utils";
import WhiteButton from "../src/components/Buttons/WhiteButton";

const Earn = ({pointsData}) => {

    return (
        <Box bg={'dark.500'} minH={'100vh'} pb={'7rem'}>
            <Container maxW={'container.md'}>

                {/* Top points section*/}
                <Box pt={4} pb={6}>
                    <PointsSection pointsData={pointsData}/>
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

                        <WhiteButton borderRadius={'20px'}  justifyContent={'space-around'}
                                 variant={'solid'}
                                leftIcon={<IoArrowForwardCircleOutline size={20} color={'dark.700'}/>}
                        >
                            Refer
                        </WhiteButton>

                    </Box>
                </Box>

            </Container>
        </Box>
    );
};

export async function getServerSideProps(context) {

    //here we are using axios
    const resPoints = await client.get('/v1/point')


    const pointsData = await resPoints.data;


    if (!pointsData ) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }

    return {
        props: {
            pointsData,
        },
    }
}

export default Earn;
