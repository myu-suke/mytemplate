import { Box, ChakraProvider, ColorModeScript, Flex, Spacer } from "@chakra-ui/react";
import { Outlet, Router } from "@tanstack/react-location";
import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import { GrobalMenuButton } from "./components/ui/buttons/GrobalMenuButton";
import { theme } from "./theme";
import { location, routes } from "~/router/routes";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <Router routes={routes} location={location}>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            {/* FIXME グローバルメニューが不要な際はFlexタグ一式を削除 */}
            <Flex>
              <Spacer />
              <Box p={8}>
                <GrobalMenuButton />
              </Box>
            </Flex>
            <Outlet />
          </Router>
        </QueryClientProvider>
      </RecoilRoot>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
