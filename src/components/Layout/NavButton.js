import React from 'react';
import {Box, Button, forwardRef, Text, useMediaQuery} from "@chakra-ui/react";

const MyComponent = forwardRef(({icon, heading,isLoading, ...props}, ref) => {

    const [isLargerThan400] = useMediaQuery("(min-width: 400px)")

    return (
        <Box display={'flex'}
             flexDirection={'column'} justifyContent={'center'} alignItems={'center'}
             fontWeight={'normal'}  cursor={'pointer'} ref={ref}  {...props}
        >
            <Button display={'grid'} placeItems={'center'} variant={'unstyled'} isLoading={isLoading}>
                {icon}
            </Button>
            <Text mt={-1} fontSize={isLargerThan400 ? '1rem' : '13px'} color={'#fff'}>{heading}</Text>
        </Box>
    );
})

export default MyComponent;
