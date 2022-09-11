import { Box, Container, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { Link } from "@tanstack/react-location";

const About = () => (
  <Container maxW="3xl" minH="100vh" pt={4}>
    <Stack as={Box} textAlign="center" spacing={{ base: 8, md: 14 }} py={{ base: 20, md: 36 }}>
      <Text color={useColorModeValue("#000", "#fff")}>this is about page</Text>
      <Text color={useColorModeValue("#000", "#fff")}>
        <Link to="/">Topへ</Link>
      </Text>
    </Stack>
  </Container>
);

export { About };
