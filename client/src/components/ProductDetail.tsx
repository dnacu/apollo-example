import { gql } from "@apollo/client";
import React from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { useProductQuery } from "../generated/graphql";

type Props = {};

interface ParamType {
  id: string;
}

const PRODUCT_QUERY = gql`
  query product($id: ID!) {
    product(id: $id) {
      id
      title
      price
    }
  }
`;

export const ProductDetail = (props: Props) => {
  const { id } = useParams<ParamType>();
  const history = useHistory();

  const { data, error, loading } = useProductQuery({ variables: { id } });

  if (loading) return <p className="loading">로딩중...</p>;

  if (error) return <p className="error">에러!!: {JSON.stringify(error)}</p>;

  return (
    <div>
      <div className="product">
        <div className="title">{data?.product?.title}</div>
        <div className="price">{data?.product?.price}</div>
      </div>
      <button
        className="back"
        onClick={() => {
          history.goBack();
        }}
      >
        메인으로...
      </button>
    </div>
  );
};
