import React from 'react';
import {Box, Container, VStack} from "@chakra-ui/react";
import PointsSection from "../src/components/home/PointsSection";
import Image from "next/image";
import {IoArrowForwardCircleOutline} from "react-icons/io5";
import PriceCard from "../src/components/Earn/PriceCard";
import {client} from "../src/utils/utils";
import WhiteButton from "../src/components/Buttons/WhiteButton";

// OTHERS = 0,
//     SHOPPING = 1,
//     HOUSEHOLD_UTILITIES = 3,
//     FINANCE = 2,
//     ENTERTAINMENT = 4,

const Earn = ({pointsData, billUploadQuota}) => {

    console.log(billUploadQuota)

    const billUploadQuotaKeyValue = Object.entries(billUploadQuota);

    const billUploadQuotaArray = billUploadQuotaKeyValue.map(([key, val]) => {

        let title;
        let desc;

        switch (key) {
            case '0': {
                title = 'others';
                desc = 'Fuel, Medical ...';
                break;
            }

            case '1': {
                title = 'SHOPPING';
                desc = 'Flipkart, Chroma, Groceries etc';
                break;
            }

            case '2': {
                title = 'FINANCE';
                desc = 'EMI, Creditcard bills, UPI, Insurance';
                break;
            }

            case '3': {
                title = 'HOUSEHOLD_UTILITIES';
                desc = 'EB, Water, Gas, DTH, Rent, Education ...';
                break;
            }

            case '4': {
                title = 'ENTERTAINMENT';
                desc = 'Dining, Travel & Stays, Subscriptions ...';
                break;
            }
        }


        return {
            ...val,
            title,
            desc,
        }
    })

    // validating the quota where limit is available
    const billUploadQuotaArrayValid = billUploadQuotaArray.filter(quota => quota.uploads < quota.limit)

    return (
        <Box bg={'dark.500'} minH={'100vh'} pb={'7rem'}>
            <Container maxW={'container.md'}>

                {/* Top points section*/}
                <Box pt={4} pb={6}>
                    <PointsSection pointsData={pointsData}/>
                </Box>

                {/*    Banner image*/}
                <Box mt={'-1.5rem'}
                     mx={'auto'}
                     h={['auto']}
                     display={'flex'}
                     justifyContent={'center'}
                     w={'100%'}
                     pos={'relative'}
                >
                    <Image
                        src={'https://billupassets.blob.core.windows.net/rewards/sample/upload-bills.png'}
                        priority={'true'}
                        placeholder={'blur'}
                        width={'568'}
                        height={'384'}
                        layout={'intrinsic'}
                        objectFit={'contain'}
                    />
                </Box>

                {/*    price cards*/}

                <VStack spacing={4}>
                    {
                        billUploadQuotaArrayValid.map((quota,index) => (
                            <PriceCard key={index} desc={quota.desc} limit={quota.limit} uploads={quota.uploads}
                                       title={quota.title}/>
                        ))
                    }

                </VStack>

                {/*     bottom banner*/}
                <Box mt={4} mx={'auto'} h={['auto']} display={'flex'} justifyContent={'center'} w={'100%'}
                     pos={'relative'}>
                    <Image
                        src={'https://billupassets.blob.core.windows.net/rewards/sample/refer.png'}
                        priority={'true'}
                        placeholder={'blur'}
                        width={'968'}
                        height={'912'}
                        layout={'intrinsic'}
                        objectFit={'contain'}
                    />
                    <Box pos={'absolute'} right={'8%'} h={'100%'}>
                        <Box height={['80%']}/>

                        <WhiteButton borderRadius={'20px'} justifyContent={'space-around'}
                                     variant={'solid'}
                                     leftIcon={<IoArrowForwardCircleOutline size={20} color={'dark.700'}/>}
                        >
                            Refer
                        </WhiteButton>

                    </Box>
                </Box>

            </Container>
        </Box>
    );
};

export async function getServerSideProps(context) {

    //here we are using axios
    const resPoints = await client.get('/v1/point')


    const pointsData = await resPoints.data;

    const resBillUploadQuota = await client.get('/v1/receipt/quota')

    const billUploadQuota = await resBillUploadQuota.data.quota;


    if (!pointsData || !billUploadQuota) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }

    return {
        props: {
            pointsData,
            billUploadQuota
        },
    }
}

export default Earn;
