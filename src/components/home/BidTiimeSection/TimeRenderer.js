import {Box} from "@chakra-ui/react";
import TextWithColor from "./TextWitthColor";

const Renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
        // Render a completed state
        return (<Box>
            Completed
        </Box>);
    } else {
        // Render a countdown
        return <TextWithColor color={'brand.yellow'}>{days} <TextWithColor color={'white'}>days</TextWithColor> : {hours} <TextWithColor color={'white'}>hr</TextWithColor> : {minutes} <TextWithColor color={'white'}>min</TextWithColor> : {seconds} <TextWithColor color={'white'}>sec</TextWithColor></TextWithColor>;
    }
};

export default Renderer;