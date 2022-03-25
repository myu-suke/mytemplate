import { Box, Heading, Container, Text, Stack, useColorModeValue } from "@chakra-ui/react";
import { Link } from "@tanstack/react-location";
import ColorThemeToggleButton from "~/components/atoms/ColorThemeToggleButton";

const App = () => (
  <Container maxW="3xl" minH="100vh" bg={useColorModeValue("#ddc", "#112")} pt={4}>
    <ColorThemeToggleButton />
    <Stack as={Box} textAlign="center" spacing={{ base: 8, md: 14 }} py={{ base: 20, md: 36 }}>
      <Heading fontWeight={600} fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }} lineHeight="110%">
        Make money from <br />
        <Text as="span" color="green.400">
          your audience
        </Text>
      </Heading>
      <Text color="gray.500">
        Monetize your content by charging your most loyal readers and reward them loyalty points. Give back to your
        loyal readers by granting them access to your pre-releases and sneak-peaks.
      </Text>
      <Link to="about">about</Link>
    </Stack>
  </Container>
);

export default App;
