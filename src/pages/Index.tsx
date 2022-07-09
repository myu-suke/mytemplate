import { Box, Heading, Container, Text, Stack, useColorModeValue } from "@chakra-ui/react";
import { Link } from "@tanstack/react-location";
import { useAspidaQuery } from "@aspida/react-query";
import { useQueryClient, useMutation } from "react-query";
import { useSetRecoilState } from "recoil";
import { fetcher } from "$/fetcher";
import { ColorThemeToggleButton } from "~/components/ui/buttons/ColorThemeToggleButton";
import api from "$/users/$api";
import { userListState } from "~/stores/users/userList";

const client = api(fetcher);

function postUser(body: { id: number; name: string }) {
  return client.$post({ body });
}

// const fetchA = async () => (await fetch("https://jsonplaceholder.typicode.com/users")).json();

const Users = () => {
  // Access the client
  const queryClient = useQueryClient();
  // Queries
  const { data, error } = useAspidaQuery(client, { query: { limit: 10 }, staleTime: 5000 });
  const setUserList = useSetRecoilState(userListState);
  data && setUserList(data);

  // Mutations
  const mutation = useMutation(postUser, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries(client.$path({ query: { limit: 10 } }));
    }
  });
  if (error) {
    return <div>{JSON.stringify(error)}</div>;
  }
  return (
    <div>
      <ul>
        {data?.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>

      <button
        onClick={() => {
          mutation.mutate({
            id: Date.now(),
            name: "Do Laundry"
          });
        }}
      >
        Add User
      </button>
    </div>
  );
};

const Index = () => (
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
      <Link to="form">form</Link>
      <Users />
    </Stack>
  </Container>
);

export { Index };
