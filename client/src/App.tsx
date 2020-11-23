import { ApolloProvider } from "@apollo/client";
import React from "react";
import { ProductList } from "./components/ProductList";
import { createApolloClient } from "./core/createApolloClient";

const client = createApolloClient();

function App() {
  return (
    <ApolloProvider client={client}>
      <ProductList />
    </ApolloProvider>
  );
}

export default App;
