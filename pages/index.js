import {Box, Container} from "@chakra-ui/react";
import {DarkModeSwitch} from "../src/components/Buttons/DarkModeSwitch";
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment, selectCounterVale} from "../src/store/counter/counterSlice";
import PointsSection from "../src/components/home/PointsSection";
import StepperSection from "../src/components/home/StepperSection/StepperSection";
import BidTimeSection from "../src/components/home/BidTiimeSection/BidTimeSection";
import BottomCarousel from "../src/components/home/BottomCarousel/BottomCarousel";
import HeroCarousel from "../src/components/home/HeroCarousel/HeroCarousel";
import {client} from "../src/utils/utils";

const Home = ({pointsData,checkinData,rewardsData}) => {

    // const dispatch = useDispatch();
    //
    // const value = useSelector(selectCounterVale);
    // console.log(value);
    //
    // const incrementHandler = () => {
    //     dispatch(increment());
    // }
    //
    // const decrementHandler = () => {
    //     dispatch(decrement());
    // }

    const heroRewards = rewardsData.filter(reward => reward.type === 'HERO');
    const sleepingBannerRewards = rewardsData.filter(reward => reward.type === 'SLEEPING_BANNER')


    return (
        <Box bg={'dark.500'} minH={'100vh'} pb={'5rem'}>

            <Container maxW={'container.md'}>
                {/* Points section*/}
                <Box pt={'2rem'} pb={'3rem'}>
                    <PointsSection pointsData={pointsData}/>
                </Box>

                {/*Stepper Section*/}
                <Box>
                    <StepperSection checkinData={checkinData}/>
                </Box>

                {/* Bid time section*/}
                <Box pt={'2rem'}>
                    <BidTimeSection/>
                </Box>

                {/*Hero carousel*/}
                {
                    heroRewards.map((reward,i) => (
                        <Box key={i}>
                            <HeroCarousel index={i} reward={reward}/>
                        </Box>
                    ))
                }


                {/*Bottom Carousel*/}
                {
                    sleepingBannerRewards.map((reward,i)=> (
                        <Box key={i} >
                            <BottomCarousel index={i} reward={reward}/>
                        </Box>
                    ))
                }


            </Container>
        </Box>
    )
}

export async function getServerSideProps({req}) {
    // here we are using fetch api

    // const res = await fetch('https://api.dev.billup.app/v1/point',{
    //     headers: {
    //         Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InJVRUNPMTlDOG1ZVWVISTFiQlJrdXRIcElyOTMiLCJwaG9uZSI6Iis5MTk3NDA2MDY3MjgiLCJpYXQiOjE2MjQwNTkxNDAsImV4cCI6MTYyOTI0MzE0MH0.gxpnZLdR8gZR7AocvTvVUmUzVVP-5TjFqzqdE2uM3oA`
    //     },
    // })

    //here we are using axios
    const resPoints = await client.get('/v1/point')

    const resRewards = await client.get('/v1/rewards')

    const resCheckin = await client.get('v1/rewards/checkins');


    const pointsData = await resPoints.data;

    const checkinData = await resCheckin.data.data;

    const rewardsData = await resRewards.data.campaign.layout;

    if (!pointsData || !checkinData || !rewardsData) {
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
            checkinData,
            rewardsData,
            cookies: req.headers.cookie ?? "",
        }, // will be passed to the page component as props
    }
}

export default Home;