import React from 'react';
import {Box, Container, HStack, Spacer, VStack} from "@chakra-ui/react";
import ActivityCard from "../src/components/Activity/ActivityCard";
import {client} from "../src/utils/utils";

const Activity = ({billUploadHistory,bids}) => {

    const billUpload = billUploadHistory[0];

    const merchantName = billUpload.merchant || 'Unknown';

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
                        {bids.length} / 3
                    </Box>

                    <Spacer/>

                    <Box color={'white'} fontSize={'1.3rem'} fontWeight={'bold'}>My Bids</Box>

                </HStack>

                <VStack w={'100%'} mt={8}>
                    <ActivityCard
                        price={'+20'}
                        imgSrc={billUpload.thumbnailUrl}
                        merchant={merchantName}
                        createdAt={billUpload.createdAt}
                        status={0}
                    />

                    <ActivityCard
                        price={'+20'}
                        imgSrc={'https://billupassets.blob.core.windows.net/rewards/sample/hero.png'}
                        merchant={'Heading'}
                        createdAt={'Description'}
                        status={3}
                    />

                    <ActivityCard
                        price={'+20'}
                        imgSrc={'https://billupassets.blob.core.windows.net/rewards/sample/hero.png'}
                        merchant={'Heading'}
                        createdAt={'Description'}
                        status={2}
                    />

                    <ActivityCard
                        price={'+20'}
                        imgSrc={'https://billupassets.blob.core.windows.net/rewards/sample/hero.png'}
                        merchant={'Heading'}
                        createdAt={'Description'}
                        status={1}
                    />

                </VStack>

            </Container>
        </Box>
    );
};

export async function getServerSideProps() {

    const resBillUploadHistory = await client.get('/v1/receipt?page=0');

    const resBids = await client.get('/v1/reward/bids');

    const billUploadHistory = await resBillUploadHistory.data.transactions;

    const bids = await resBids.data.bids;

    if (!billUploadHistory) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }

    return {
        props: {
            billUploadHistory,
            bids
        }, // will be passed to the page component as props
    }
}

export default Activity;
