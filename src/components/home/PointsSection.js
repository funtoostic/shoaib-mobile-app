import React from 'react';
import {Box, HStack, Spacer, Text, useMediaQuery} from "@chakra-ui/react";
import Link from 'next/link'

const PointsSection = () => {

    const [isLargerThan480] = useMediaQuery("(min-width: 480px)")

    return (
        <HStack>
            <Box display={'flex'}>

                <Box cursor={'pointer'}>
                    <Box as={Link} href={'/'}>
                        <img src={'/header/b.svg'} alt="b"
                             style={{
                                 widows: 'auto',
                                 height: `${isLargerThan480 ? "70px" : "50px"}`,
                             }}
                        />
                    </Box>
                </Box>

                <Box px={4}>
                    <Text fontWeight={'bold'} fontSize={['1rem', null, '1.3rem']}>
                        Your Points
                    </Text>
                    <Text letterSpacing={'2px'} color={'white'} fontWeight={'bold'}
                          fontSize={['1.2rem', null, '1.5rem']}>
                        50,257
                    </Text>
                </Box>

            </Box>
            <Spacer/>
            <Box>
                <img src={'/header/user.svg'} alt="user"
                     style={{
                         widows: 'auto',
                         height: `${isLargerThan480 ? "60px" : "50px"}`
                     }}
                />
            </Box>
        </HStack>
    );
};

export default PointsSection;
