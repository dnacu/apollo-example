import { gql } from "@apollo/client";
import React from "react";
import { usePetsQuery } from "../generated/graphql";

const PETS_QUERY = gql`
  query pets {
    allPets: pets {
      id
      name
      nickname
    }
  }
`;

export const PetList: React.FC = () => {
  const { data, loading, error } = usePetsQuery();

  if (loading) {
    return <h1>로딩 중입니다</h1>;
  }

  if (error) {
    return <p>에러!!: {JSON.stringify(error)}</p>;
  }

  return (
    <ul>
      {(data?.allPets ?? []).map((pet) => (
        <li key={pet.id}>{pet.nickname}</li>
      ))}
    </ul>
  );
};
