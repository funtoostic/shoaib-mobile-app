import React from 'react';
import {Box, Button} from "@chakra-ui/react";
import Image from 'next/image'
import {IoArrowForwardCircleOutline} from "react-icons/io5";
import Link from 'next/link'

const ImageWithCTABtn = ({imageSrc, id}) => {

    return (
        <Box mx={'auto'} bg={'transparent'} display={'flex'} justifyContent={'center'} w={'96%'} pos={'relative'}>
            <Image
                src={imageSrc}
                priority={'true'}
                placeholder={'blur'}
                width={'568'}
                height={'824'}
                layout={'intrinsic'}
                objectFit={'contain'}

            />
            <Box pos={'absolute'} left={'50%'} transform={'translateX(-50%)'} h={'100%'}>
                <Box height={['82%']}/>

                <Link href={`product/${id}`}>
                    <Button fontWeight={'light'}
                            justifyContent={'space-around'}
                            p={['6px', '10px']}
                            w={['7rem', '9rem']}
                            size={['sm', 'md']}
                            fontSize={['.8rem', '1rem']}
                            variant={'solid'}
                            rightIcon={<IoArrowForwardCircleOutline
                                size={20}
                                color={'dark.700'}/>}
                    >
                        Place Bid
                    </Button>
                </Link>
            </Box>
        </Box>
    );
};

export default ImageWithCTABtn;
