import React from 'react';
import {Box, Text, useMediaQuery} from "@chakra-ui/react";

const StepperSection = () => {

    const [isLargerThan400] = useMediaQuery("(min-width: 400px)");

    const [isLargerThan600] = useMediaQuery("(min-width: 600px)");

    return (
        <Box py={8} px={4} borderRadius={'20px'} border={'1px solid #333333'}>
           <Text textAlign={isLargerThan600 ? "left" : "center"} fontSize={isLargerThan400 ? '1rem' : '12px'} letterSpacing={1.5} fontWeight={'bold'} color={'white'}>
               You're on a streak! Come back tomorrow to get 5 Coins
           </Text>

        </Box>
    );
};

export default StepperSection;
