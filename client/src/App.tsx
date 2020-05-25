import { ApolloProvider } from "@apollo/client";
import React from "react";
import { PetList } from "./components/PetList";
import { createApolloClient } from "./core/createApolloClient";

const client = createApolloClient();

function App() {
  return (
    <ApolloProvider client={client}>
      <PetList />
    </ApolloProvider>
  );
}

export default App;
