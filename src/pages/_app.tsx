import "@/styles/globals.css";
import { GraphQLProvider } from "@/graphql/GraphQLProvider";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GraphQLProvider>
      <Component {...pageProps} />
    </GraphQLProvider>
  );
}
