import Link from "next/link";
import React from "react";
import { Flex, Image, Center, Text, VStack, Divider } from "@chakra-ui/react";

function ProfileContent() {
  return (
    <>
      <VStack alignItems="left" color="#1E1E1E" pb={5}>
        <Link href="#">
          <Flex p={1} as="a">
            <Center marginEnd={3}>
              <Image
                boxSize="35px"
                objectFit="cover"
                src="/assets/images/refer.svg"
                alt="Refer and earn"
              />
            </Center>
            <Center>
              <Text fontSize="md">Refer and Earn</Text>
            </Center>
          </Flex>
        </Link>

        <Link href="#">
          <Flex p={1} as="a">
            <Center marginEnd={3}>
              <Image
                boxSize="35px"
                objectFit="cover"
                src="/assets/images/support.svg"
                alt="Support"
              />
            </Center>
            <Center>
              <Text fontSize="md">Supoort</Text>
            </Center>
          </Flex>
        </Link>

        <Link href="#">
          <Flex p={1} as="a">
            <Center marginEnd={3}>
              <Image
                boxSize="35px"
                objectFit="cover"
                src="/assets/images/document.svg"
                alt=""
              />
            </Center>
            <Center>
              <Text fontSize="md">Terms and Conditions</Text>
            </Center>
          </Flex>
        </Link>

        <Link href="#">
          <Flex p={1} as="a">
            <Center marginEnd={3}>
              <Image
                boxSize="35px"
                objectFit="cover"
                src="/assets/images/shield-lock.svg"
                alt="shield-lock"
              />
            </Center>
            <Center>
              <Text fontSize="md">Privary Policy</Text>
            </Center>
          </Flex>
        </Link>
        <Divider orientation="horizontal" />
        <Link href="#">
          <Flex p={1} as="a">
            <Center marginEnd={3}>
              <Image
                boxSize="35px"
                objectFit="cover"
                src="/assets/images/logout.svg"
                alt="Logout"
              />
            </Center>
            <Center>
              <Text fontSize="md">Logout</Text>
            </Center>
          </Flex>
        </Link>
      </VStack>
    </>
  );
}

export default ProfileContent;
