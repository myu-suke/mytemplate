import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom";
import { Router, Outlet } from "@tanstack/react-location";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import { routes, location } from "~/router/routes";
import { theme } from "./theme";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <Router routes={routes} location={location}>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <Outlet />
          </Router>
        </QueryClientProvider>
      </RecoilRoot>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
