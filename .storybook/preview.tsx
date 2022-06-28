import { ChakraProvider, ChakraProviderProps } from "@chakra-ui/react";
import { Story } from "@storybook/react";
import React from "react";
import { theme } from "../src/theme";

const withChakra = (Story: Story) => {
  return (
    <ChakraProvider theme={theme}>
      <Story />
    </ChakraProvider>
  );
};

export const decorators = [withChakra];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};
