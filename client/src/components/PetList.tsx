import { gql } from "@apollo/client";
import React from "react";
import {
  PetsQuery,
  useAddPetMutation,
  usePetsQuery,
} from "../generated/graphql";

const PETS_QUERY = gql`
  query pets {
    pets {
      id
      name
      nickname
    }
  }
`;

const ADD_PET_MUTATION = gql`
  mutation addPet($pet: PetInput) {
    addPet(pet: $pet) {
      id
      name
    }
  }
`;

export const PetList: React.FC = () => {
  const { data, loading, error, refetch } = usePetsQuery({
    fetchPolicy: "cache-first",
  });
  const [addPet] = useAddPetMutation({
    update(cache, { data }) {
      console.log("upadted!", data);
      const { addPet } = data!;
      const { pets } = cache.readQuery<PetsQuery>({
        query: PETS_QUERY,
      })!;
      cache.writeQuery({
        query: PETS_QUERY,
        data: { pets: pets!.concat([addPet!]) },
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
      {(data?.pets ?? []).map((pet) => (
        <li key={pet.id}>{pet.name}</li>
      ))}
      <button
        onClick={() => {
          const name = prompt() ?? "";
          addPet({
            variables: {
              pet: {
                name: name,
              },
            },
            optimisticResponse: {
              addPet: {
                __typename: "Pet",
                id: "pet_unknown",
                name,
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
