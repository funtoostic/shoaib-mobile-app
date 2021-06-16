import React from 'react';
import {Box, HStack, Spacer, Text, useMediaQuery} from "@chakra-ui/react";

const PointsSection = () => {

    const [isLargerThan400] = useMediaQuery("(min-width: 400px)")

    return (
        <HStack pt={'2rem'} pb={'3rem'}>
            <Box display={'flex'}>

                <img src={'/header/b.svg'} alt="b"
                    style={{
                        widows: 'auto',
                        height:`${isLargerThan400 ? "70px" : "50px"}`,
                    }}
                />

                <Box px={4}>
                   <Text fontWeight={'bold'} fontSize={['1rem','1.3rem']}>
                       Your Points
                   </Text>
                    <Text letterSpacing={'2px'} color={'white'} fontWeight={'bold'} fontSize={['1.2rem','1.5rem']}>
                        50,257
                    </Text>
                </Box>

            </Box>
            <Spacer/>
            <Box>
                <img src={'/header/user.svg'} alt="user"
                     style={{
                         widows: 'auto',
                         height:`${isLargerThan400 ? "60px" : "50px"}`
                     }}
                />
            </Box>
        </HStack>
    );
};

export default PointsSection;
