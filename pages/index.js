import {Box, Button} from "@chakra-ui/react";
import {DarkModeSwitch} from "../src/components/Buttons/DarkModeSwitch";
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment,selectCounterVale} from "../src/store/counter/counterSlice";

const Home = () => {

    const dispatch = useDispatch();

    const value = useSelector(selectCounterVale);
    console.log(value);

    const incrementHandler = () => {
        dispatch(increment());
    }

    const decrementHandler = () => {
        dispatch(decrement());
    }

    return (
        <Box>
            {/*<Button onClick={incrementHandler} colorScheme={'blue'}>Increment</Button>*/}
            {/*<Button onClick={decrementHandler} colorScheme={'blue'}>Decrement</Button>*/}
           main page

            {/*main page*/}
            {/*<Box>{value}</Box>*/}
            {/*<Box>*/}
            {/*    <DarkModeSwitch/>*/}
            {/*</Box>*/}
        </Box>
    )
}

export {getServerSideProps} from "../src/theme/Chakra";

export default Home;