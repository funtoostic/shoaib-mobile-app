import React from 'react';
import {Box, Button, HStack, Spacer, Text} from "@chakra-ui/react";
import { CgAdd } from "react-icons/cg";
import { FcMoneyTransfer } from "react-icons/fc";


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
                <HStack alignItems={'center'}>
                    <Box>
                        <FcMoneyTransfer size={40}/>
                    </Box>
                    <Box>
                        <Text>
                            {title}
                        </Text>
                        <Text>
                            {desc}
                        </Text>
                    </Box>
                </HStack>

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
