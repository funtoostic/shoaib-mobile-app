import React from 'react';
import {Box, Container, HStack, IconButton, Text} from "@chakra-ui/react";
import {AiFillHome, AiFillStar} from "react-icons/ai";
import NavButton from "./NavButton";
import { useMediaQuery } from "@chakra-ui/react"

const Footer = () => {

    const [isLargerThan400] = useMediaQuery("(min-width: 400px)")

    const iconSize = isLargerThan400 ? 25 : 18;

    return (
        <Box bg={'dark.600'} pos={'fixed'} bottom={0} left={0} width={'100%'}>

            <Container h={'100%'} maxW={'container.md'}>

                <HStack h={'100%'} alignItems={'center'} position={'relative'} py={4}>

                    <NavButton flexGrow={1} heading={'Home'} icon={<AiFillHome size={iconSize} color={'#fff'}/>}/>

                    <NavButton flexGrow={1} heading={'Rewards'} icon={<AiFillStar size={iconSize} color={'#fff'}/>}/>

                    <Box flexGrow={2} display={'flex'} flexDirection={'column'} justifyContent={'center'}
                         alignItems={'center'}>
                        <Box
                            cursor={'pointer'}
                            pos={'absolute'}
                            top={'-30%'}
                            bg={'#FDFF00'}
                            border={`${isLargerThan400 ? '7px' : '5px'} solid`}
                            borderColor={'dark.500'}
                            borderRadius={'50%'}
                            p={1}
                        >
                            <img style={{
                                filter: 'brightness(1)',
                                width: '45px',
                                height: '45px',
                                fill: '#fff'
                            }}
                                 src={'/menu/earn.svg'} alt="bills"
                            />
                        </Box>
                        <Text fontSize={isLargerThan400 ? '1rem' : '13px'} mt={isLargerThan400 ? '1.8rem' : '1.5rem'} color={'#fff'}>Earn</Text>
                    </Box>

                    <NavButton
                        flexGrow={1}
                        heading={'History'}
                        icon={
                            <img style={{
                                filter: 'brightness(1)',
                                width: `${iconSize}px`,
                                height: `${iconSize}px`,
                                fill: '#fff',

                            }}
                                 src={'/menu/bills.svg'} alt="bills"
                            />
                        }
                    />

                    <NavButton
                        flexGrow={1}
                        heading={'Bills'}
                        icon={
                            <img style={{
                                filter: 'brightness(1)',
                                width: `${iconSize}px`,
                                height: `${iconSize}px`,
                                fill: '#fff',

                            }}
                                 src={'/menu/history.svg'} alt="bills"
                            />
                        }
                    />

                </HStack>

            </Container>

        </Box>
    );
};

export default Footer;
