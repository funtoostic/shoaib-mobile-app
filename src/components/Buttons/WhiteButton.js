import React from 'react';
import {Button, forwardRef} from "@chakra-ui/react";

const WhiteButton = forwardRef (({children,...props},ref)=> {
    return (
        <Button  background={'#fff'}
                 _hover={{
                     background: '#eee'
                 }} ref={ref} {...props}>
            {children}
        </Button>
    );
}) ;

export default WhiteButton;
