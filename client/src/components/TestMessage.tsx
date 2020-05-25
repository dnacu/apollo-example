import { gql, useQuery } from "@apollo/client";
import React from "react";

const GET_TEST_MESSAGE = gql`
  query GetTestMessage {
    testMessage
  }
`;

export const TestMessage: React.FC = () => {
  const { loading, error, data } = useQuery(GET_TEST_MESSAGE);

  return <div>{data?.testMessage}</div>;
};
