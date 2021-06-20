import React from 'react';
import {Box, Container} from "@chakra-ui/react";
import PointsSection from "../src/components/home/PointsSection";
import BidTimeSection from "../src/components/home/BidTiimeSection/BidTimeSection";
import HeroCarousel from "../src/components/home/HeroCarousel/HeroCarousel";
import {client} from "../src/utils/utils";
import RewardTopCarousel from "../src/components/reward/RewardTopCarousel";

const RewardPage = ({pointsData,rewardsData}) => {

    const heroRewards = rewardsData.filter(reward => reward.type === 'HERO');
    const sleepingBannerRewards = rewardsData.filter(reward => reward.type === 'SLEEPING_BANNER')

    console.log(heroRewards)

    return (
        <Box bg={'dark.500'} minH={'100vh'} pb={'5rem'}>
            <Container maxW={'container.md'}>

                {/* Top points section*/}
                <Box pt={4} pb={6}>
                    <PointsSection pointsData={pointsData}/>
                </Box>

                {/*/ Bid time section*/}
                <Box>
                    <BidTimeSection/>
                </Box>

                {
                    sleepingBannerRewards.map((reward,i) => (
                        <RewardTopCarousel key={i} index={i} reward={reward}/>
                    ))
                }

                <Box mt={'-3.5rem'}>
                    {
                        heroRewards.map((reward,i) => (
                                <HeroCarousel key={i} reward={reward}/>
                        ))
                    }

                </Box>

            </Container>
        </Box>
    );
};

export async function getServerSideProps() {

    //here we are using axios
    const resPoints = await client.get('/v1/point')

    const resRewards = await client.get('/v1/rewards')

    const pointsData = await resPoints.data;

    const rewardsData = await resRewards.data.campaign.layout;

    if (!pointsData || !rewardsData) {
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
            rewardsData
        }, // will be passed to the page component as props
    }
}

export default RewardPage;
