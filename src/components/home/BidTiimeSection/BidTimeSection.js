import React from "react";
import Countdown from "react-countdown";
import { HStack, Spacer, Text } from "@chakra-ui/react";
import TimeRenderer from "./TimeRenderer";

const BidTimeSection = () => {
  const date = new Date();

  return (
    <HStack
      color={"white"}
      fontWeight={"bold"}
      fontSize={["10px", null, "12px"]}
    >
      <Text>Place your bid before</Text>
      <Spacer />
      <Countdown
        intervalDelay={0}
        precision={3}
        renderer={TimeRenderer}
        date={date.getTime() + 9810000}
      />
      ,
    </HStack>
  );
};

export default BidTimeSection;
