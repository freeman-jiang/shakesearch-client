import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NavProvider } from "@/context/navigator";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <NavProvider>
        <Component {...pageProps} />
      </NavProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
