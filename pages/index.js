import {Box, Button, Container} from "@chakra-ui/react";
import {DarkModeSwitch} from "../src/components/Buttons/DarkModeSwitch";
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment, selectCounterVale} from "../src/store/counter/counterSlice";
import PointsSection from "../src/components/home/PointsSection";
import StepperSection from "../src/components/home/StepperSection/StepperSection";

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
        <Box bg={'dark.500'} minH={'100vh'}>
            <Container maxW={'container.md'}>
                <PointsSection/>
                <StepperSection/>
            </Container>
        </Box>
    )
}

export {getServerSideProps} from "../src/theme/Chakra";

export default Home;