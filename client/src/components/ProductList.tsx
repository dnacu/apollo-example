import { gql } from "@apollo/client";
import React from "react";
import {
  ProductsQuery,
  useAddProductMutation,
  useProductsQuery,
} from "../generated/graphql";

const PRODUCTS_QUERY = gql`
  query products {
    products {
      id
      title
      price
    }
  }
`;

const ADD_PRODUCT_MUTATION = gql`
  mutation addProduct($product: ProductInput) {
    addProduct(product: $product) {
      id
      title
      price
    }
  }
`;

export const ProductList: React.FC = () => {
  const { data, loading, error, refetch } = useProductsQuery({
    fetchPolicy: "cache-first",
  });

  const [addProduct] = useAddProductMutation({
    update(cache, { data }) {
      const { addProduct } = data!;
      const { products } = cache.readQuery<ProductsQuery>({
        query: PRODUCTS_QUERY,
      })!;
      cache.writeQuery({
        query: PRODUCTS_QUERY,
        data: {
          products: products?.concat([addProduct!]),
        },
      });
    },
  });
  if (loading) {
    return <h1>로딩 중입니다</h1>;
  }

  if (error) {
    return <p>에러!!: {JSON.stringify(error)}</p>;
  }

  return (
    <ul>
      {(data?.products ?? []).map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
      <button
        onClick={() => {
          const title = prompt() ?? "";
          const price = 10000;
          addProduct({
            variables: {
              product: {
                title,
                price,
              },
            },
            // optimisticResponse: {
            // addPet: {
            //   __typename: "Pet",
            //   id: "pet_unknown",
            //   name,
            // },
            // addProduct: {
            //   __typename: "Product",
            //   title,
            //   price,
            // }
            // },
          });
        }}
      >
        추가
      </button>
    </ul>
  );
};
