import React, { useState } from "react";
import {
  Box,
  Container,
  Heading,
  HStack,
  Spacer,
  Text,
  useMediaQuery,
  useToast,
} from "@chakra-ui/react";
import BidTimeSection from "../../src/components/home/BidTiimeSection/BidTimeSection";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { client } from "../../src/utils/utils";
import parse from "html-react-parser";
import WhiteButton from "../../src/components/Buttons/WhiteButton";

const ProductDetails = ({ productData, pointsData, id }) => {
  const [isLargerThan480] = useMediaQuery("(min-width: 480px)");

  const toast = useToast();

  const [isLoading, setIsLoading] = useState(false);

  const placeBidHandler = () => {
    // if the user has less balance then it will return
    if (pointsData.balance < productData.minimumBid) {
      toast({
        title: "Error",
        description: "Insufficient Funds",
        status: "error",
        duration: 9000,
        isClosable: true,
      });

      return;
    }

    // if the user has balance then the logic goes here
    setIsLoading(true);

    client
      .post(`/v1/reward/${id}/bid`, {
        bidValue: productData.minimumBid,
      })
      .then(() => {
        setIsLoading(false);

        toast({
          title: "Success",
          description: "Bid Successful",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      })
      .catch((err) => {
        setIsLoading(false);

        toast({
          title: "Error",
          description: err.message,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      });
  };

  console.log(productData);

  return (
    <Box minH={"100vh"} pb={"5rem"}>
      <Container px={0} maxW={"container.md"}>
        {/* Image section*/}
        <Box mx={"auto"}>
          <Box
            mt={"-4.5rem"}
            bg={"transparent"}
            display={"flex"}
            justifyContent={"center"}
            w={"100%"}
            pos={"relative"}
          >
            <Image
              src={productData.details.productBanner}
              priority={"true"}
              placeholder={"blur"}
              width={"568"}
              height={"824"}
              layout={"intrinsic"}
              objectFit={"contain"}
            />

            <Box
              px={4}
              position={"absolute"}
              top={["60px", "80px", "110px"]}
              left={0}
              width={"100%"}
            >
              <HStack>
                <Box as={Link} href={"/rewards"}>
                  <Box cursor={"pointer"}>
                    <IoIosArrowDropleftCircle size={20} />
                  </Box>
                </Box>
                <Box flexGrow={1}>
                  <BidTimeSection />
                </Box>
              </HStack>
            </Box>

            {/*    Description section*/}
            <Box
              w={"100%"}
              pos={"absolute"}
              top={"88%"}
              mb={"-2rem"}
              p={4}
              zIndex={60}
              bg={"#fff"}
              borderRadius={"15px 15px 0 0"}
              pb={["13rem", "14rem", "15rem"]}
            >
              {/*<HStack>*/}
              {/*left box*/}
              <Box>
                <Text fontSize={"20px"} as={"h3"}>
                  {productData.details.title}
                </Text>
                <Text fontSize={"1rem"}>{productData.details.subTitle}</Text>
              </Box>

              {/*<Spacer/>*/}

              {/*/!*right box*!/*/}
              {/*<Box>*/}
              {/*    <Heading fontSize={'20px'} as={'h3'}>*/}
              {/*        ₹ 9,999*/}
              {/*    </Heading>*/}
              {/*    <Text fontSize={'1rem'}>*/}
              {/*        48MP | 6000mAh*/}
              {/*    </Text>*/}
              {/*</Box>*/}

              {/*</HStack>*/}

              {/*    Desc Text*/}
              <Box my={4} px={3}>
                {parse(productData.details.description)}
              </Box>

              <Text fontSize={"20px"} as={"h3"}>
                Rules to participate
              </Text>

              <Box mt={4}>{parse(productData.details.rules)}</Box>
            </Box>
          </Box>
        </Box>

        {/*    Fixed Button*/}

        <Box
          width={"100%"}
          bottom={["95", "100", "110px"]}
          pos={"fixed"}
          p={4}
          zIndex={100}
        >
          <HStack p={4} bg={"dark.500"} borderRadius={"lg"} mx={"auto"}>
            <Box display={"flex"}>
              <Box cursor={"pointer"}>
                <Box as={Link} href={"/"}>
                  <img
                    src={"/header/b.svg"}
                    alt="b"
                    style={{
                      widows: "auto",
                      height: `${isLargerThan480 ? "50px" : "40px"}`,
                    }}
                  />
                </Box>
              </Box>

              <Box px={4}>
                <Text fontWeight={"normal"} fontSize={["1rem"]}>
                  User Points
                </Text>
                <Text
                  letterSpacing={"2px"}
                  color={"white"}
                  fontWeight={"bold"}
                  fontSize={["12px"]}
                >
                  {pointsData.balance}
                </Text>
              </Box>
            </Box>

            <Spacer />
            <Box>
              <WhiteButton
                isLoading={isLoading}
                onClick={placeBidHandler}
                fontSize={"12px"}
                size={"sm"}
                rightIcon={<IoArrowForwardCircleOutline />}
              >
                Place Bid
              </WhiteButton>
            </Box>
          </HStack>
        </Box>
      </Container>
    </Box>
  );
};

export async function getServerSideProps({ query: { id } }) {
  //here we are using axios
  const resProduct = await client.get(`/v1/reward/${id}`);
  const resPoints = await client.get("/v1/point");

  const pointsData = await resPoints.data;
  const productData = await resProduct.data;

  if (!productData) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      productData,
      pointsData,
      id,
    },
  };
}

export default ProductDetails;
