import {Box, Container} from "@chakra-ui/react";
import {DarkModeSwitch} from "../src/components/Buttons/DarkModeSwitch";
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment, selectCounterVale} from "../src/store/counter/counterSlice";
import PointsSection from "../src/components/home/PointsSection";
import StepperSection from "../src/components/home/StepperSection/StepperSection";
import BidTimeSection from "../src/components/home/BidTiimeSection/BidTimeSection";
import ImageWithCTABtn from "../src/components/home/ImageWithCTABtn";
import BottomCarousel from "../src/components/home/BottomCarousel/BottomCarousel";

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
                <Box pt={'2rem'} pb={'3rem'}>

                <PointsSection/>
                </Box>
                <StepperSection/>
                <Box pt={'2rem'}>

                <BidTimeSection/>
                </Box>
                <ImageWithCTABtn imageSrc={`https://billupassets.blob.core.windows.net/rewards/sample/hero.png`}/>
                <BottomCarousel/>
            </Container>
        </Box>
    )
}

export {getServerSideProps} from "../src/theme/Chakra";

export default Home;