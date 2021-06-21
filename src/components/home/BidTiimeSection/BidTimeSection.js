import React from 'react';
import Countdown from 'react-countdown';
import {HStack, Spacer, Text} from "@chakra-ui/react";
import TimeRenderer from "./TimeRenderer";


const BidTimeSection = ({endingTime}) => {

    const date = new Date;

    const lastTime = new Date(endingTime);

    const remainingTime = lastTime.getTime() - date.getTime();


    return (
        <HStack color={'white'} fontWeight={'bold'} fontSize={['10px', null, '12px']}>
            <Text>
                Place your bid beforee
            </Text>
            <Spacer/>
            <Countdown intervalDelay={0}
                       precision={3}
                       renderer={TimeRenderer}
                       date={remainingTime}
            />,
        </HStack>
    );
};

export default BidTimeSection;
