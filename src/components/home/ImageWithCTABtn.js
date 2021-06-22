import React, { useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import WhiteButton from "../Buttons/WhiteButton";
import { useRouter } from "next/router";

const ImageWithCTABtn = ({ imageSrc, id, title }) => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState();

  const buttonClickHandler = () => {
    setIsLoading(true);

    router.push(`product/${id}`);
  };

  return (
    <Box
      mx={"auto"}
      bg={"transparent"}
      display={"flex"}
      justifyContent={"center"}
      w={"96%"}
      pos={"relative"}
    >
      <Image
        src={imageSrc}
        priority={"true"}
        placeholder={"blur"}
        width={"568"}
        height={"824"}
        layout={"intrinsic"}
        objectFit={"contain"}
      />
      <Flex
        pos={"absolute"}
        left={0}
        right={0}
        bottom={14}
        px={4}
        justifyContent={"space-evenly"}
      >
        <Flex alignItems="center" /* bg="blackAlpha.100"  */ px={3}>
          <Text fontSize={"1.15rem"} color="white" lineHeight={".75rem"}>
            {title}
          </Text>
        </Flex>

        {/*<Link href={`product/${id}`}>*/}
        <WhiteButton
          isLoading={isLoading}
          onClick={buttonClickHandler}
          fontWeight={"light"}
          justifyContent={"space-around"}
          py={"4px"}
          px={"10px"}
          lineHeight={1}
          size={["sm", "md"]}
          fontSize={[".7rem", ".75rem"]}
          variant={"solid"}
          rightIcon={
            <IoArrowForwardCircleOutline size={20} color={"dark.700"} />
          }
        >
          Place Bid
        </WhiteButton>
        {/*</Link>*/}
      </Flex>
    </Box>
  );
};

export default ImageWithCTABtn;
