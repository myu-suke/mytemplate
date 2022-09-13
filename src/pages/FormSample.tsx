import { fetcher } from "$/fetcher";
import api from "$/users/$api";
import { Box, Button, Container, Stack, useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "~/components/functional/useForm";
import { FormInput } from "~/components/ui/forms/FormInput";
import { FormMultiCheckbox } from "~/components/ui/forms/FormMultiCheckbox";
import { FormRadio } from "~/components/ui/forms/FormRadio";
import { FormSelect } from "~/components/ui/forms/FormSelect";
import { FormSingleCheckbox } from "~/components/ui/forms/FormSingleCheckbox";
import { Form } from "~/components/ui/forms/FormWrapper";
import { UserFormSchema, UserSchema } from "~/types/user";

const client = api(fetcher);

const postUser = (body: UserFormSchema) => client.$post({ body });

const checkList = [
  {
    checkLabel: "test1",
    value: "test1"
  },
  {
    checkLabel: "test2",
    value: "test2"
  }
];

const radioList = [
  { radioLabel: "testA", value: "testAVal" },
  { radioLabel: "testB", value: "testBVal" }
];

const FormSample = () => {
  const [value, setValue] = useState<any>({});
  // this is hook is required to use form
  const form = useForm({
    schema: UserSchema,
    defaultValues: {
      name: "This is default value",
      address: { suite: "testAVal", zipcode: [], street: true, city: "testCity" }
    }
  });

  return (
    <Container maxW="3xl" minH="" bg={useColorModeValue("#fff", "#000")}>
      <Form
        form={form}
        onSubmit={async (values) => {
          // FIXME ここにリクエストメソッドを記載
          setValue(values);
          window.console.log({ values });
          await postUser(values);
        }}
      >
        <FormInput label="Your first name" type="text" placeholder="John" required {...form.register("name")} />
        <FormInput label="Choose username" type="text" placeholder="im_john_doe" {...form.register("username")} />
        <FormInput label="Email Address" type="email" placeholder="you@example.com" {...form.register("email")} />
        <FormSelect label="country" placeholder="Select country" {...form.register("address.city")}>
          <option value="testCity">test</option>
          <option value="test2City">test2</option>
        </FormSelect>
        <FormSingleCheckbox label="label" value {...form.register("address.street")}>
          check
        </FormSingleCheckbox>
        <FormMultiCheckbox label="label" values={checkList} {...form.register("address.zipcode")} />
        <FormRadio label="label" values={radioList} {...form.register("address.suite")} />

        <Button type="submit">Submit </Button>
      </Form>
      <Stack>
        <Box>request :{JSON.stringify(value)}</Box>
      </Stack>
    </Container>
  );
};

export { FormSample };
