import React from "react";
import { Box, Button } from "@chakra-ui/react";
import Image from "next/image";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import Link from "next/link";

const CarouselImageWithCTABtn = ({ imageSrc, id }) => {
  return (
    <Link href={`/product/${id}`}>
      <Box
        mx={"auto"}
        h={["auto"]}
        display={"flex"}
        justifyContent={"center"}
        w={"100%"}
        pos={"relative"}
      >
        <Image
          src={imageSrc}
          priority={"true"}
          placeholder={"blur"}
          width={"568"}
          height={"384"}
          layout={"intrinsic"}
          objectFit={"contain"}
        />
        <Box pos={"absolute"} right={"8%"} h={"100%"}>
          <Box height={["63%"]} />

          <Button
            fontWeight={"light"}
            justifyContent={"space-around"}
            p={["6px"]}
            size={["xs"]}
            fontSize={["10px"]}
            variant={"solid"}
            rightIcon={
              <IoArrowForwardCircleOutline size={15} color={"dark.700"} />
            }
          >
            Place Bid
          </Button>
        </Box>
      </Box>
    </Link>
  );
};

export default CarouselImageWithCTABtn;
