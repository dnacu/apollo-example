import { ApolloProvider } from "@apollo/client";
import React from "react";
import { TestMessage } from "./components/TestMessage";
import { createApolloClient } from "./core/createApolloClient";

const client = createApolloClient();

function App() {
  return (
    <ApolloProvider client={client}>
      <TestMessage />
    </ApolloProvider>
  );
}

export default App;
