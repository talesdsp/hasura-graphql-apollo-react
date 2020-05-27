import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache, split } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { WebSocketLink } from "@apollo/link-ws";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Planet from "./components/Planet";
import PlanetsSearch from "./components/PlanetSearch";
import Logo from "./components/shared/Logo";

const GRAPHQL_ENDPOINT = "hasura-planets.herokuapp.com/v1/graphql";

const httpLink = new HttpLink({ uri: "https://" + GRAPHQL_ENDPOINT });

const wsLink = new WebSocketLink({
  uri: "ws://" + GRAPHQL_ENDPOINT,
  options: { reconnect: true },
});

const splitUrl = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return definition.kind === "OperationDefinition" && definition.operation === "subscription";
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: splitUrl,
});

const App = () => {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Logo />

        <Switch>
          <Route exact path="/" component={PlanetsSearch} />
          <Route exact path="/planets/:id" component={Planet} />
        </Switch>
      </ApolloProvider>
    </BrowserRouter>
  );
};

export default App;
