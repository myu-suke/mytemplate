import React from "react";
import { useRecoilValue } from "recoil";
import { Button } from "@chakra-ui/react";
import { UserSchema } from "~/types/user";
import { FormInput } from "~/components/ui/forms/FormInput";
import { useForm } from "~/components/functional/useForm";
import { Form } from "~/components/ui/forms/FormWrapper";
import { FormSelect } from "~/components/ui/forms/FormSelect";
import { FormSingleCheckbox } from "~/components/ui/forms/FormSingleCheckbox";
import { FormMultiCheckbox } from "~/components/ui/forms/FormMultiCheckbox";
import { FormRadio } from "~/components/ui/forms/FormRadio";
import { userListState } from "~/stores/users/userList";

// recoil sample
const Users = () => {
  const user = useRecoilValue(userListState);

  return (
    <div>
      <ul>
        {user.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
};

const FormSample = () => {
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
  // this is hook is required to use form
  const form = useForm({
    schema: UserSchema,
    defaultValues: { name: "test" }
  });
  return (
    <>
      <Users />

      <Form form={form} onSubmit={(values) => window.console.log(values)}>
        <FormInput
          label="Your first name"
          type="text"
          placeholder="John"
          required
          // press ctrl + space when you type firstName
          {...form.register("name")}
        />
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
        <FormRadio values={radioList} {...form.register("address.suite")} />

        <Button type="submit">Submit </Button>
      </Form>
    </>
  );
};

export { FormSample };
