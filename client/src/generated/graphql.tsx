import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Pet = {
  __typename?: 'Pet';
  /** 아이디 */
  id: Scalars['ID'];
  /** 이름 */
  name: Scalars['String'];
  /** 별명 */
  nickname?: Maybe<Scalars['String']>;
};

export type PetInput = {
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  /** 동물 칭구들 */
  pets?: Maybe<Array<Pet>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addPet?: Maybe<Pet>;
};


export type MutationAddPetArgs = {
  pet?: Maybe<PetInput>;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}


export type PetsQueryVariables = {};


export type PetsQuery = (
  { __typename?: 'Query' }
  & { pets?: Maybe<Array<(
    { __typename?: 'Pet' }
    & Pick<Pet, 'id' | 'name' | 'nickname'>
  )>> }
);

export type AddPetMutationVariables = {
  pet?: Maybe<PetInput>;
};


export type AddPetMutation = (
  { __typename?: 'Mutation' }
  & { addPet?: Maybe<(
    { __typename?: 'Pet' }
    & Pick<Pet, 'id' | 'name'>
  )> }
);


export const PetsDocument = gql`
    query pets {
  pets {
    id
    name
    nickname
  }
}
    `;

/**
 * __usePetsQuery__
 *
 * To run a query within a React component, call `usePetsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePetsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePetsQuery({
 *   variables: {
 *   },
 * });
 */
export function usePetsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PetsQuery, PetsQueryVariables>) {
        return ApolloReactHooks.useQuery<PetsQuery, PetsQueryVariables>(PetsDocument, baseOptions);
      }
export function usePetsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PetsQuery, PetsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<PetsQuery, PetsQueryVariables>(PetsDocument, baseOptions);
        }
export type PetsQueryHookResult = ReturnType<typeof usePetsQuery>;
export type PetsLazyQueryHookResult = ReturnType<typeof usePetsLazyQuery>;
export type PetsQueryResult = ApolloReactCommon.QueryResult<PetsQuery, PetsQueryVariables>;
export const AddPetDocument = gql`
    mutation addPet($pet: PetInput) {
  addPet(pet: $pet) {
    id
    name
  }
}
    `;
export type AddPetMutationFn = ApolloReactCommon.MutationFunction<AddPetMutation, AddPetMutationVariables>;

/**
 * __useAddPetMutation__
 *
 * To run a mutation, you first call `useAddPetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddPetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addPetMutation, { data, loading, error }] = useAddPetMutation({
 *   variables: {
 *      pet: // value for 'pet'
 *   },
 * });
 */
export function useAddPetMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddPetMutation, AddPetMutationVariables>) {
        return ApolloReactHooks.useMutation<AddPetMutation, AddPetMutationVariables>(AddPetDocument, baseOptions);
      }
export type AddPetMutationHookResult = ReturnType<typeof useAddPetMutation>;
export type AddPetMutationResult = ApolloReactCommon.MutationResult<AddPetMutation>;
export type AddPetMutationOptions = ApolloReactCommon.BaseMutationOptions<AddPetMutation, AddPetMutationVariables>;