import { ComponentStory, Meta } from "@storybook/react";
// import React from "react";
import { useForm } from "~/components/functional/useForm";
import { FormInput } from "./FormInput";
import { Form } from "./FormWrapper";
import { UserSchema } from "~/types/user";

export default {
  title: "Form/FormInput",
  component: FormInput
} as Meta<typeof FormInput>;

// type Template = Story<typeof BaseButton>;
type Template = ComponentStory<typeof FormInput>;

const StoryView: Template = (args) => {
  const form = useForm({
    schema: UserSchema,
    defaultValues: { username: "test" }
  });
  return (
    <Form form={form} onSubmit={(values) => console.log(values)}>
      <FormInput {...form.register("username")} {...args} />
    </Form>
  );
};
export const Default: Template = StoryView.bind({});
Default.args = {
  label: "ユーザ名",
  type: "text",
  placeholder: "User Name"
};
