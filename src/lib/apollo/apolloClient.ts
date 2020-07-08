import { ApolloClient } from "apollo-client";
import { ApolloLink } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { onError } from "apollo-link-error";

import {
  REACT_APP_API_ENDPOINT,
  REACT_APP_API_URL,
} from "../../constants/environmentVariables";

const cache = new InMemoryCache({});

export const apolloClient = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      console.error(graphQLErrors);
      console.error(networkError);
    }),
    new HttpLink({
      uri: `${REACT_APP_API_URL}${REACT_APP_API_ENDPOINT}`,
      credentials: "include",
    }),
  ]),
  cache,
});
