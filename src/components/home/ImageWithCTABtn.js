import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
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
      <Box
        pos={"absolute"}
        left={"50%"}
        transform={"translateX(-50%)"}
        h={"100%"}
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
          p={["6px", "10px"]}
          w={["7rem", "9rem"]}
          size={["sm", "md"]}
          fontSize={[".8rem", "1rem"]}
          variant={"solid"}
          rightIcon={
            <IoArrowForwardCircleOutline size={20} color={"dark.700"} />
          }
        >
          Place Bid
        </WhiteButton>
        {/*</Link>*/}
      </Box>
    </Box>
  );
};

export default ImageWithCTABtn;
