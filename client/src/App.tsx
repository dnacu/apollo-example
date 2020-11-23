import { ApolloProvider } from "@apollo/client";
import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { ProductDetail } from "./components/ProductDetail";
import { ProductList } from "./components/ProductList";
import { createApolloClient } from "./core/createApolloClient";

const client = createApolloClient();

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route exact path="/product/:id" component={ProductDetail} />
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
