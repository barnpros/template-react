import * as React from "react";
import Normalize from "react-normalize";
import { BrowserRouter } from "react-router-dom";

import { ApolloProvider } from "../lib";
import { App } from "./App";
import { GlobalStyles } from "../utils/style";

export const Root: React.FC = () => (
  <>
    {/* Global Stylesheets */}
    <Normalize />
    <GlobalStyles />

    {/* Wrappers */}
    <ApolloProvider>
      <BrowserRouter>
        <React.StrictMode>
          {/* App Entrypoint */}
          <App />
        </React.StrictMode>
      </BrowserRouter>
    </ApolloProvider>
  </>
);
