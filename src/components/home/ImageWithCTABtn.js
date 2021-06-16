import React from 'react';
import {Box, Button} from "@chakra-ui/react";
import Image from 'next/image'
import { IoArrowForwardCircleOutline } from "react-icons/io5";

const ImageWithCTABtn = ({imageSrc}) => {

    return (
        <Box mx={'auto'} display={'flex'} justifyContent={'center'} w={'100%'}  pos={'relative'}>
            <Image
                src={imageSrc}
                priority={'true'}
                // placeholder={'blur'}
                width={'568'}
                height={'824'}
                layout={'intrinsic'}
                objectFit={'contain'}
            />
            <Box pos={'absolute'} left={'50%'} transform={'translateX(-50%)'} h={'100%'} >
                <Box height={['82%']}/>

                <Button fontWeight={'light'} justifyContent={'space-around'} p={['6px','10px']} w={['7rem','9rem']} size={['sm','md']} fontSize={['.8rem','1rem']} variant={'solid'} rightIcon={<IoArrowForwardCircleOutline size={20} color={'dark.700'}/>}>
                    Place Bid
                </Button>
            </Box>
        </Box>
    );
};

export default ImageWithCTABtn;
