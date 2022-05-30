import { Box, Container, Text, Stack, useColorModeValue } from "@chakra-ui/react";
import { Link } from "@tanstack/react-location";

const About = () => (
  <Container maxW="3xl" minH="100vh" bg={useColorModeValue("#ddc", "#112")} pt={4}>
    <Stack as={Box} textAlign="center" spacing={{ base: 8, md: 14 }} py={{ base: 20, md: 36 }}>
      <Text color="gray.500">this is about page</Text>
      <Text color="gray.500">
        <Link to="/">Topへ</Link>
      </Text>
    </Stack>
  </Container>
);

export { About };
