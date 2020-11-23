import { gql, NetworkStatus } from "@apollo/client";
import React from "react";
import { Link } from "react-router-dom";
import {
  ProductsQuery,
  useAddProductMutation,
  useProductsQuery,
} from "../generated/graphql";

const PRODUCTS_QUERY = gql`
  query products($offset: Int = 0, $limit: Int = 10) {
    products(offset: $offset, limit: $limit) {
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
  const { data, error, networkStatus, fetchMore } = useProductsQuery({
    fetchPolicy: "cache-first",
    notifyOnNetworkStatusChange: true,
    variables: {
      offset: 0,
      limit: 10,
    },
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
  if (networkStatus === NetworkStatus.loading) {
    return <h1>로딩 중입니다</h1>;
  }

  if (networkStatus === NetworkStatus.error) {
    return <p>에러!!: {JSON.stringify(error)}</p>;
  }

  const renderFetchMoreIndicator = () => {
    return (
      networkStatus === NetworkStatus.fetchMore && (
        <div className="loading">fetch more...</div>
      )
    );
  };

  return (
    <ul>
      {(data?.products ?? []).map((product) => (
        <li key={product.id}>
          <Link to={`/product/${product.id}`}>{product.title}</Link>
        </li>
      ))}
      {renderFetchMoreIndicator()}
      <button
        onClick={() => {
          fetchMore({ variables: { offset: data?.products?.length } });
        }}
      >
        더보기
      </button>
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
            optimisticResponse: {
              addProduct: {
                __typename: "Product",
                id: "prd_unknown",
                title,
                price,
              },
            },
          });
        }}
      >
        추가
      </button>
    </ul>
  );
};
