import React from "react";
import { Flex, Image, Center, Text, VStack } from "@chakra-ui/react";
import { ArrowLeftIcon } from "@chakra-ui/icons";

function ProfileHeader() {
  return (
    <>
      <Flex color="white" pb={5}>
        <Center marginEnd={3}>
          <Image
            boxSize="35px"
            objectFit="cover"
            src="/assets/images/back-arrow.svg"
            alt="<"
          />
        </Center>
        <Center>
          <Text fontSize="xl">Account</Text>
        </Center>
      </Flex>
      <Flex color="white" pt="1rem">
        <Center marginEnd={4}>
          <Image
            boxSize="70px"
            objectFit="cover"
            src="/assets/images/profile.svg"
            alt="<"
          />
        </Center>
        <VStack justifyContent="space-around" alignItems="left">
          <Text fontSize="xl">Your Name</Text>
          <Text fontSize="md" color={"#A3A3A3"}>
            91+ 98765 43210
          </Text>
        </VStack>
      </Flex>
    </>
  );
}

export default ProfileHeader;
