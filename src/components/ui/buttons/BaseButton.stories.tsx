import { ComponentStory, Meta } from "@storybook/react";
// import React from "react";
import { BaseButton } from "./BaseButton";

export default {
  title: "UI/Button",
  component: BaseButton
} as Meta<typeof BaseButton>;

// type Template = Story<typeof BaseButton>;
type Template = ComponentStory<typeof BaseButton>;

const StoryView: Template = (args) => <BaseButton {...args}>Default</BaseButton>;

export const Default: Template = StoryView.bind({});
Default.args = {};

export const ChangeColorSchema = {
  args: {
    colorScheme: "red",
    children: "ChangeColorSchema"
  }
};

export const OutLine = {
  args: {
    variant: "outline",
    children: "OutLine"
  }
};
