import { gql } from "apollo-server";

export default gql`
  type Pet {
    """
    아이디
    """
    id: ID!

    """
    이름
    """
    name: String!

    """
    별명
    """
    nickname: String
  }

  input PetInput {
    name: String!
  }

  type Query {
    """
    동물 칭구들
    """
    pets: [Pet!]
  }

  type Mutation {
    addPet(pet: PetInput): Pet
  }
`;
