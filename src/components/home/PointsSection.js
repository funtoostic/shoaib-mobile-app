import React from 'react';
import {Box, HStack, Spacer, Text, useMediaQuery} from "@chakra-ui/react";
import Link from 'next/link'

const PointsSection = ({pointsData}) => {

    console.log(pointsData)

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
                        {pointsData.balance}
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

export async function getServerSideProps(context) {
    const res = await fetch('https://api.dev.billup.app/v1/point',{
        headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InJVRUNPMTlDOG1ZVWVISTFiQlJrdXRIcElyOTMiLCJwaG9uZSI6Iis5MTk3NDA2MDY3MjgiLCJpYXQiOjE2MjQwNTkxNDAsImV4cCI6MTYyOTI0MzE0MH0.gxpnZLdR8gZR7AocvTvVUmUzVVP-5TjFqzqdE2uM3oA`
        },
    })

    console.log(await res.json())

    const data = await res.data;

    console.log(data)

    if (!data) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }

    return {
        props: { data }, // will be passed to the page component as props
    }
}

export default PointsSection;
