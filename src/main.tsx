import React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./components/screens/home/Home.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import ThemeProvider from "./providers/ThemeProvider.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
        <Home />
        </QueryClientProvider>
      </ThemeProvider>
    </ChakraProvider>
  </React.StrictMode>
);
