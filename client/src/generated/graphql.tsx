import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
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

export type Product = {
  __typename?: 'Product';
  id: Scalars['ID'];
  title: Scalars['String'];
  price: Scalars['Int'];
};

export type ProductInput = {
  title: Scalars['String'];
  price: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  products?: Maybe<Array<Product>>;
};


export type QueryProductsArgs = {
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addProduct?: Maybe<Product>;
};


export type MutationAddProductArgs = {
  product?: Maybe<ProductInput>;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}


export type ProductsQueryVariables = Exact<{
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
}>;


export type ProductsQuery = (
  { __typename?: 'Query' }
  & { products?: Maybe<Array<(
    { __typename?: 'Product' }
    & Pick<Product, 'id' | 'title' | 'price'>
  )>> }
);

export type AddProductMutationVariables = Exact<{
  product?: Maybe<ProductInput>;
}>;


export type AddProductMutation = (
  { __typename?: 'Mutation' }
  & { addProduct?: Maybe<(
    { __typename?: 'Product' }
    & Pick<Product, 'id' | 'title' | 'price'>
  )> }
);


export const ProductsDocument = gql`
    query products($offset: Int, $limit: Int) {
  products(offset: $offset, limit: $limit) {
    id
    title
    price
  }
}
    `;

/**
 * __useProductsQuery__
 *
 * To run a query within a React component, call `useProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsQuery({
 *   variables: {
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useProductsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
        return ApolloReactHooks.useQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, baseOptions);
      }
export function useProductsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, baseOptions);
        }
export type ProductsQueryHookResult = ReturnType<typeof useProductsQuery>;
export type ProductsLazyQueryHookResult = ReturnType<typeof useProductsLazyQuery>;
export type ProductsQueryResult = ApolloReactCommon.QueryResult<ProductsQuery, ProductsQueryVariables>;
export const AddProductDocument = gql`
    mutation addProduct($product: ProductInput) {
  addProduct(product: $product) {
    id
    title
    price
  }
}
    `;
export type AddProductMutationFn = ApolloReactCommon.MutationFunction<AddProductMutation, AddProductMutationVariables>;

/**
 * __useAddProductMutation__
 *
 * To run a mutation, you first call `useAddProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addProductMutation, { data, loading, error }] = useAddProductMutation({
 *   variables: {
 *      product: // value for 'product'
 *   },
 * });
 */
export function useAddProductMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddProductMutation, AddProductMutationVariables>) {
        return ApolloReactHooks.useMutation<AddProductMutation, AddProductMutationVariables>(AddProductDocument, baseOptions);
      }
export type AddProductMutationHookResult = ReturnType<typeof useAddProductMutation>;
export type AddProductMutationResult = ApolloReactCommon.MutationResult<AddProductMutation>;
export type AddProductMutationOptions = ApolloReactCommon.BaseMutationOptions<AddProductMutation, AddProductMutationVariables>;