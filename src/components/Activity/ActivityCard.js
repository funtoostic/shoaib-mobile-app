import React from 'react';
import {Box, HStack, Spacer, Text} from "@chakra-ui/react";
import Image from "next/image";

const ActivityCard = ({imgSrc, merchant, createdAt, price, status, bidTitle, bidValue}) => {

    let statusText;
    let statusColor;

    switch (status) {
        case 0: {
            statusText = 'Pending';
            statusColor = '#808080'
            break;
        }

        case 1: {
            statusText = 'Processing';
            statusColor = '#EAA363'
            break;
        }

        case 2: {
            statusText = 'Approved'
            statusColor = '#39B54A'
            break;
        }

        case 3: {
            statusText = 'Rejected'
            statusColor = '#ED7474'
            break;
        }
    }

    console.log(status)

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
                        <Box mx={'auto'} bg={'transparent'} display={'flex'} justifyContent={'center'} w={'100%'}
                             pos={'relative'}>
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
                            <Text fontWeight={'bold'} fontSize={'12px'}>
                                {merchant ? merchant : bidTitle}
                            </Text>
                        </Box>


                        {
                            createdAt && (
                                <Box fontSize={'10px'}>
                                    {createdAt}
                                </Box>
                            )
                        }


                    </Box>


                </HStack>

            </Box>

            <Spacer/>



                {
                    bidValue && (
                        <Box
                            fontSize={'10px'}
                            bg={'#39B54A'}
                            textAlign={'center'}
                            color={'#fff'}
                            borderRadius={'lg'}
                            p={1}
                            display={'flex'}
                            justifyContent={'center'}
                            alignItems={'center'}
                        >
                            {bidValue}
                        </Box>
                    )
                }

                <Box display={price ? "block" : 'none'}>

                {
                    price && (
                        <Box
                            fontSize={'10px'}
                            bg={statusColor}
                            color={'#fff'}
                            borderRadius={'lg'}
                            p={1}
                            display={'flex'}
                            justifyContent={'center'}
                            alignItems={'center'}
                        >
                            {price}
                        </Box>
                    )
                }

                {
                    statusText && (
                        <Text color={statusColor} mt={1} fontSize={'12px'}>
                            {statusText}
                        </Text>
                    )
                }
                </Box>



        </HStack>
    );
};

export default ActivityCard;
