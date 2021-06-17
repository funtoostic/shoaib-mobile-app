import React from 'react';
import {Box, Button, HStack, Spacer, Text} from "@chakra-ui/react";
import { CgAdd } from "react-icons/cg";


const PriceCard = ({title,desc,price}) => {
    return (
        <HStack
            p={4}
            bg={'brand.lightPurple'}
            borderRadius={'lg'}
            w={'100%'}
        >
            {/* left box*/}
            <Box>
                <Text>
                    {title}
                </Text>
                <Text>
                    {desc}
                </Text>
            </Box>

            <Spacer/>

            {/* right box*/}
            <Box>
                <Button leftIcon={<CgAdd size={'15'}/>} variant={'solid'} borderRadius={'20px'}>
                    {price}
                </Button>
            </Box>

        </HStack>
    );
};

export default PriceCard;
