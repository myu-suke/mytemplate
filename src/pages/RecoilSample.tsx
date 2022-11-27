import { fetcher } from "$/fetcher";
import api from "$/users/$api";
import { useAspidaQuery } from "@aspida/react-query";
import { Container, Spinner, Tab, TabList, TabPanel, TabPanels, Tabs, useColorModeValue } from "@chakra-ui/react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { userState } from "~/stores/users/userList";

// FIXME このコードはサンプルのため、実装時はコンポーネントを分けて実装する
const client = api(fetcher);

// const postUser = (body: UserFormSchema) => client.$post({ body });

const GetUserInfo = () => {
  // Queries
  const { data, error, isLoading } = useAspidaQuery(client._userId(1), { staleTime: 5000 });
  const setUser = useSetRecoilState(userState);
  data && setUser(data);
  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <div>{JSON.stringify(error)}</div>;
  }
  return <div>{JSON.stringify(data, null, 2)}</div>;
};

const ShowUserInfo = () => {
  // recoil sample
  const user = useRecoilValue(userState);

  return <div>Recoile state : {JSON.stringify(user, null, 2)}</div>;
};

const RecoilSample = () => (
  <Container maxW="3xl" minH="" bg={useColorModeValue("#fff", "#000")}>
    <Tabs>
      <TabList>
        <Tab>GET UserInfo</Tab>
        <Tab>Show UserInfo</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <GetUserInfo />
        </TabPanel>
        <TabPanel>
          <ShowUserInfo />
        </TabPanel>
      </TabPanels>
    </Tabs>
  </Container>
);

export { RecoilSample };
