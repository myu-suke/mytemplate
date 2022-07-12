import { Box, Container, Heading, Link, Stack, Text, useColorModeValue } from "@chakra-ui/react";

const textcolor = "teal.500";
const Home = () => (
  <Container maxW="3xl" minH="100vh" bg={useColorModeValue("#fff", "#000")} pt={4}>
    <Stack as={Box} textAlign="center" spacing={{ base: 8, md: 14 }} py={{ base: 20, md: 36 }}>
      <Heading fontWeight={600} fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }} lineHeight="110%">
        <Link href="https://ja.vitejs.dev/" color={textcolor}>
          Vite
        </Link>
        ・
        <Link href="https://ja.reactjs.org/" color={textcolor}>
          React
        </Link>
        ・
        <Link href="https://chakra-ui.com/" color={textcolor}>
          Chakra
        </Link>
        <br />
        Template
      </Heading>
      <Text color="gray.500">
        using{" "}
        <Link href="https://recoiljs.org/" color={textcolor}>
          recoil
        </Link>{" "}
        +{" "}
        <Link href="https://tanstack.com/query/v4" color={textcolor}>
          react-query
        </Link>{" "}
        +{" "}
        <Link href="https://github.com/aspida/aspida/tree/master/packages/aspida/docs/ja#readme" color={textcolor}>
          aspida
        </Link>{" "}
        +{" "}
        <Link href="https://react-hook-form.com/jp/" color={textcolor}>
          react-hook-form
        </Link>{" "}
        +{" "}
        <Link href="https://zod.dev/" color={textcolor}>
          zod
        </Link>{" "}
      </Text>
      {/* <Link as={RouterLink} to="about">
        about
      </Link>
      <Link as={RouterLink} to="form">
        form
      </Link> */}
    </Stack>
  </Container>
);

export { Home };
