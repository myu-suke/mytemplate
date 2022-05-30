import React from "react";
import { UserSchema } from "~/types/user";
import { FormInput } from "~/components/ui/forms/FormInput";
import { useForm } from "~/components/functional/useForm";
import { Form } from "~/components/ui/forms/FormWrapper";
import { FormSelect } from "~/components/ui/forms/FormSelect";
import { FormSingleCheckbox } from "~/components/ui/forms/FormSingleCheckbox";
import { FormMultiCheckbox } from "~/components/ui/forms/FormMultiCheckbox";
import { FormRadio } from "~/components/ui/forms/FormRadio";

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
    <Form form={form} onSubmit={(values) => console.log(values)}>
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

      <button type="submit">Submit </button>
    </Form>
  );
};

export { FormSample };
