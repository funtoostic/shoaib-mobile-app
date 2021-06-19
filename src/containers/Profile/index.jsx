import React from "react";
import { Box, Container, Flex, VStack } from "@chakra-ui/react";
import ProfileHeader from "../../components/ProfileHeader";
import ProfileContent from "../../components/ProfileContent";

export default function Profile() {
  return (
    <div>
      <VStack
        bg={"dark.500"}
        minH={"100vh"}
        justifyContent={"space-between"}
        alignItems="stretch"
      >
        <Container
          maxW={"container.md"}
          minW={"100%"}
          justifyContent={"stretch"}
        >
          <Box pt={"1rem"} pb={"2rem"}>
            <ProfileHeader />
          </Box>
        </Container>
        <Box borderRadius={20} p={5} bg="white" jus flex="1">
          <ProfileContent />
        </Box>
      </VStack>
    </div>
  );
}
