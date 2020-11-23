import { gql } from "apollo-server";

export default gql`
  type Product {
    id: ID!
    title: String!
    price: Int!
  }

  input ProductInput {
    title: String!
    price: Int!
  }

  type Query {
    products(offset: Int, limit: Int): [Product!]
  }

  type Mutation {
    addProduct(product: ProductInput): Product
  }
`;
