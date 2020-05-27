import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from "@apollo/client";
import React from "react";
import Planets from "./components/Planets";
import Search from "./components/Search";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({ uri: "https://hasura-planets.herokuapp.com/v1/graphql" }),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Search />
      <Planets />
    </ApolloProvider>
  );
};

export default App;
