import React, {useState} from 'react';
import {Box, Container, HStack, Spacer, Text, VStack} from "@chakra-ui/react";
import ActivityCard from "../src/components/Activity/ActivityCard";
import {client} from "../src/utils/utils";
import InfiniteScroll from "react-infinite-scroll-component";

const Activity = ({billUploadHistory, bids}) => {

    const billUpload = billUploadHistory[0];

    const [uploadedBills, setUploadeddBills] = useState(billUploadHistory);

    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const fetchData = async () => {

        try {
            const resBillUploadHistory = await client.get(`/v1/receipt?page=${page}`);

            const billUploadHistory = await resBillUploadHistory.data.transactions;

            console.log('bill upload history', billUploadHistory)

            setUploadeddBills((prevBillls) => {
                return [...prevBillls, ...billUploadHistory]
            })

            if (billUploadHistory.length === 0 || !billUploadHistory) {
                setHasMore(false)
                return;
            }

            setPage(page + 1);

        } catch (err) {
            console.log(err);
        }


    }

    console.log(uploadedBills)

    return (
        <Box bg={'dark.500'} minH={'100vh'} pb={'8rem'}>

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

                    {
                        bids.map(bid => {

                            return (
                                <ActivityCard
                                    bidValue={`+ ${bid.bidValue}`}
                                    // price={`+ ${bid.bidValue}`}
                                    imgSrc={bid.image}
                                    bidTitle={bid.title}
                                    // createdAt={billUpload.createdAt}
                                    // status={0}
                                />
                            )
                        })
                    }


                </VStack>

                <Text mb={'-1rem'} mt={'2rem'} fontWeight={'bold'} fontSize={'16px'} color={'#fff'}>
                    Bill History
                </Text>


                <InfiniteScroll
                    dataLength={uploadedBills.length} //This is important field to render the next data
                    next={fetchData}
                    hasMore={hasMore}
                    loader={
                        <Box color={'white'} textAlign={'center'}>
                            Loading...
                        </Box>
                    }
                    endMessage={
                        <Text fontWeight={'300'} color={'#fff'} textAlign={'center'}>
                            <b>Yay! You have seen all bills</b>
                        </Text>
                    }
                    // below props only if you need pull down functionality
                    // refreshFunction={this.refresh}
                    // pullDownToRefresh
                    // pullDownToRefreshThreshold={50}
                    // pullDownToRefreshContent={
                    //     <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
                    // }
                    // releaseToRefreshContent={
                    //     <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
                    // }
                >
                    <VStack w={'100%'} mt={8} mb={8}>

                        {
                            uploadedBills.map((bill) => {

                                const merchantName = bill.merchant || 'Unknown';

                                return (
                                    <ActivityCard
                                        price={`+ ${bill.points}`}
                                        // todo set the correct imagge url after fixing the pdf-
                                        // the corrrect image url is given below
                                        // imgSrc={bill.thumbnailUrl}

                                        // this is dummy image url
                                        imgSrc={billUpload.thumbnailUrl}
                                        merchant={merchantName}
                                        createdAt={bill.createdAt}
                                        status={bill.status}
                                    />
                                )
                            })
                        }


                    </VStack>
                </InfiniteScroll>

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
