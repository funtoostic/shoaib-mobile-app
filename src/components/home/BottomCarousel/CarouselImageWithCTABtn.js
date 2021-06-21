import React, {useState} from 'react';
import {Box} from "@chakra-ui/react";
import Image from "next/image";
import {IoArrowForwardCircleOutline} from "react-icons/io5";

import WhiteButton from "../../Buttons/WhiteButton";
import {useRouter} from "next/router";

const CarouselImageWithCTABtn = ({imageSrc, id}) => {

    const router = useRouter();

    const [isLoading, setIsLoading] = useState();

    const buttonClickHandler = () => {

        setIsLoading(true);

        router.push(`product/${id}`)


    }

    return (
        <Box mx={'auto'} h={['auto']} display={'flex'} justifyContent={'center'} w={'100%'} pos={'relative'}>
            <Image
                src={imageSrc}
                priority={'true'}
                placeholder={'blur'}
                width={'568'}
                height={'384'}
                layout={'intrinsic'}
                objectFit={'contain'}
            />
            <Box pos={'absolute'} right={'8%'} h={'100%'}>
                <Box height={['60%']}/>

                {/*<Link href={`/product/${id}`}>*/}
                    <WhiteButton
                        isLoading={isLoading}
                        onClick={buttonClickHandler}
                        fontWeight={'light'}
                        justifyContent={'space-around'}
                        p={['6px']}
                        size={['xs']}
                            fontSize={['8px']}
                        variant={'solid'}
                            rightIcon={<IoArrowForwardCircleOutline
                                size={15}
                                color={'dark.700'}/>}
                    >
                        Place Bid
                    </WhiteButton>
                {/*</Link>*/}

            </Box>
        </Box>
    );
};

export default CarouselImageWithCTABtn;
