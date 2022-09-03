import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false // クライアントのカラーモードと合わせる場合はtrue
};

const theme = extendTheme({
  config,
  semanticTokens: {
    colors: {
      bgTheme: {
        default: "#fff",
        _dark: "#000000"
      }
    }
  },
  styles: {
    global: (props: any) => ({
      body: {
        fontFamily: "body",
        color: mode("gray.800", "whiteAlpha.900")(props),
        bg: mode("white", "black")(props),
        lineHeight: "base"
      },
      "*::placeholder": {
        color: mode("gray.400", "whiteAlpha.400")(props)
      },
      "*, *::before, &::after": {
        borderColor: mode("gray.200", "whiteAlpha.300")(props),
        wordWrap: "break-word"
      }
    })
  }
});

export { theme };
