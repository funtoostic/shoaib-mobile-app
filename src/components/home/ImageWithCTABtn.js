import React from "react";
import { Box, Flex, Button, Center, Text } from "@chakra-ui/react";
import Image from "next/image";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import Link from "next/link";

const ImageWithCTABtn = ({ imageSrc, id, title }) => {
  return (
    <Link href={`product/${id}`}>
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
          <Button
            fontWeight={"light"}
            justifyContent={"space-around"}
            p={["4px", "10px"]}
            size={["sm"]}
            fontSize={[".7rem", ".85rem"]}
            variant={"solid"}
            rightIcon={
              <IoArrowForwardCircleOutline size={20} color={"dark.700"} />
            }
          >
            Place Bid
          </Button>
        </Flex>
      </Box>
    </Link>
  );
};

export default ImageWithCTABtn;
