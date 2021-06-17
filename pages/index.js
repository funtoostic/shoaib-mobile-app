import {Box, Container} from "@chakra-ui/react";
import {DarkModeSwitch} from "../src/components/Buttons/DarkModeSwitch";
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment, selectCounterVale} from "../src/store/counter/counterSlice";
import PointsSection from "../src/components/home/PointsSection";
import StepperSection from "../src/components/home/StepperSection/StepperSection";
import BidTimeSection from "../src/components/home/BidTiimeSection/BidTimeSection";
import ImageWithCTABtn from "../src/components/home/ImageWithCTABtn";
import BottomCarousel from "../src/components/home/BottomCarousel/BottomCarousel";
import HeroCarousel from "../src/components/home/HeroCarousel/HeroCarousel";

const Home = () => {

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

    return (
        <Box bg={'dark.500'} minH={'100vh'} pb={'5rem'}>

            <Container maxW={'container.md'}>
                {/* Points section*/}
                <Box pt={'2rem'} pb={'3rem'}>
                    <PointsSection/>
                </Box>

                {/*Stepper Section*/}
                <Box>
                    <StepperSection/>
                </Box>

                {/* Bid time section*/}
                <Box pt={'2rem'}>
                    <BidTimeSection/>
                </Box>

                {/*Hero carousel*/}
                <Box>
                    <HeroCarousel/>
                </Box>

                {/*Bottom Carousel*/}
                <Box>
                    <BottomCarousel/>
                </Box>

            </Container>
        </Box>
    )
}

export {getServerSideProps} from "../src/theme/Chakra";

export default Home;