import React from 'react';
import {Box, forwardRef, Text, useMediaQuery} from "@chakra-ui/react";
import {AiFillHome} from "react-icons/ai";

const MyComponent  = forwardRef  (({icon,heading,...props},ref) => {

    const [isLargerThan400] = useMediaQuery("(min-width: 400px)")

    return (
        <Box cursor={'pointer'} ref={ref} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} {...props}>
            {icon}
            <Text mt={1} fontSize={isLargerThan400 ? '1rem' : '13px'} color={'#fff'}>{heading}</Text>
        </Box>
    );
})

export default MyComponent;
