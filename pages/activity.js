import React from 'react';
import {Box, Container, HStack, Spacer, VStack} from "@chakra-ui/react";
import ActivityCard from "../src/components/Activity/ActivityCard";
import {client} from "../src/utils/utils";

const Activity = ({billUploadHistory}) => {

    const billUpload = billUploadHistory[0];

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

export async function getServerSideProps({req}) {
    // here we are using fetch api

    // const res = await fetch('https://api.dev.billup.app/v1/point',{
    //     headers: {
    //         Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InJVRUNPMTlDOG1ZVWVISTFiQlJrdXRIcElyOTMiLCJwaG9uZSI6Iis5MTk3NDA2MDY3MjgiLCJpYXQiOjE2MjQwNTkxNDAsImV4cCI6MTYyOTI0MzE0MH0.gxpnZLdR8gZR7AocvTvVUmUzVVP-5TjFqzqdE2uM3oA`
    //     },
    // })

    //here we are using axios


    const resBillUploadHistory = await client.get('v1/receipt?page=0');




    const billUploadHistory = await resBillUploadHistory.data.transactions;



    if (!billUploadHistory ) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }

    return {
        props: {
           billUploadHistory

        }, // will be passed to the page component as props
    }
}

export default Activity;
