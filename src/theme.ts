import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false // クライアントのカラーモードと合わせる場合はtrue
};

const theme = extendTheme({ config });

export { theme };
