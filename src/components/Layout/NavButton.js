import React from 'react';
import { Button, forwardRef, Text, useMediaQuery} from "@chakra-ui/react";

const MyComponent  = forwardRef  (({icon,heading,...props},ref) => {

    const [isLargerThan400] = useMediaQuery("(min-width: 400px)")

    return (
        <Button fontWeight={'normal'} variant={'unstyled'} cursor={'pointer'} ref={ref} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} {...props}>
            {icon}
            <Text mt={1} fontSize={isLargerThan400 ? '1rem' : '13px'} color={'#fff'}>{heading}</Text>
        </Button>
    );
})

export default MyComponent;
