import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { ReactNode } from "react";

export const client = new ApolloClient({
  uri: process.env.DB_READ_ENDPOINT,
  cache: new InMemoryCache(),
  ssrMode: true,
});

export const GraphQLProvider = ({ children }: { children: ReactNode }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
