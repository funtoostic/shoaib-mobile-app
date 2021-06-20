import React from 'react';
import {Box, HStack, Spacer, Text} from "@chakra-ui/react";
import Image from "next/image";

const ActivityCard = ({imgSrc,heading,desc,price}) => {
    return (
        <HStack
            cursor={'pointer'}
            w={'100%'}
            bg={'#fff'}
            p={4}
            borderRadius={'xl'}
        >

            <Box>

                <HStack>
                    <Box>
                        <Box mx={'auto'} bg={'transparent'} display={'flex'} justifyContent={'center'} w={'100%'}  pos={'relative'}>
                            <Image
                                src={imgSrc}
                                priority={'true'}
                                placeholder={'blur'}
                                width={'50'}
                                height={'50'}
                                layout={'intrinsic'}
                                objectFit={'contain'}
                            />
                        </Box>
                    </Box>

                    <Box>
                        <Box mb={'5px'}>
                            <Text fontWeight={'bold'} fontSize={'14px'}>
                                {heading}
                            </Text>
                        </Box>
                        <Box fontSize={'12px'}>
                            {desc}
                        </Box>
                    </Box>


                </HStack>

            </Box>

            <Spacer/>

            <Box>

                <Box
                    bg={'dark.600'}
                    color={'#fff'}
                    borderRadius={'lg'}
                    p={2}
                >
                    {price}
                </Box>

            </Box>

        </HStack>
    );
};

export default ActivityCard;
