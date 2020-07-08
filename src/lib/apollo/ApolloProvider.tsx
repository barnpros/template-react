import * as React from "react";
import { ApolloProvider as LibraryApolloProvider } from "@apollo/react-hooks";

import { apolloClient } from "./apolloClient";

export const ApolloProvider: React.FC = ({ children }) => (
  <LibraryApolloProvider client={apolloClient}>
    {children}
  </LibraryApolloProvider>
);
