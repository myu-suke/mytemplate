import { fetcher } from "$/fetcher";
import api from "$/users/$api";
import { useAspidaQuery } from "@aspida/react-query";
import { Container, Tab, TabList, TabPanel, TabPanels, Tabs, useColorModeValue } from "@chakra-ui/react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { userState } from "~/stores/users/userList";

// FIXME このコードはサンプルのため、実装時はコンポーネントを分けて実装する
const client = api(fetcher);

// const postUser = (body: UserFormSchema) => client.$post({ body });

const GetUserInfo = () => {
  console.log("GetUserInfo render");
  // Queries
  const { data, error } = useAspidaQuery(client._userId(1), { staleTime: 5000 });
  const setUser = useSetRecoilState(userState);
  data && setUser(data);
  if (error) {
    return <div>{JSON.stringify(error)}</div>;
  }
  return <div>{JSON.stringify(data)}</div>;
};

const ShowUserInfo = () => {
  console.log("ShowUserInfo render");
  // recoil sample
  const user = useRecoilValue(userState);

  return <div>Recoile state : {JSON.stringify(user)}</div>;
};

const RecoilSample = () => {
  console.log("RecoileSample render");
  // const [value, setValue] = useState<any>({});
  // this is hook is required to use form
  // const form = useForm({
  //   schema: UserSchema,
  //   defaultValues: {
  //     name: "This is default value",
  //     address: { suite: "testAVal", zipcode: [], street: true, city: "testCity" }
  //   }
  // });

  return (
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
};

export { RecoilSample };
