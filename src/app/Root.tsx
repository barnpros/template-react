import * as React from "react";
import Normalize from "react-normalize";
import { BrowserRouter } from "react-router-dom";

import { ApolloProvider } from "../lib";
import { App } from "./App";

export const Root: React.FC = () => (
  <>
    <Normalize />
    {console.log("hi")}

    <ApolloProvider>
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
    </ApolloProvider>
  </>
);
