import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { offsetLimitPagination } from "@apollo/client/utilities";

export function createApolloClient() {
  const client = new ApolloClient({
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            // offsetLimitPagination 동작 구현
            products: {
              // 결과값을 캐시데이터에 분리해서 저장할 것인가?
              keyArgs: false,
              // 새로운 값이 들어왔을 때 캐시에 저장할 방식에 대한 정의
              merge(existing = [], incoming) {
                return [...existing, ...incoming];
              },
            },
          },
        },
      },
    }),
    link: new HttpLink({
      uri: "http://localhost:4000",
    }),
  });
  return client;
}
