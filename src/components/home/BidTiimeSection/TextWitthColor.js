import React from 'react';
import {Box} from "@chakra-ui/react";

const TextWithColor = ({color,children}) => {
    return (
        <Box display={'inline-block'} color={color}>
            {children}
        </Box>
    );
};

export default TextWithColor;
