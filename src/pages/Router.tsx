import * as React from "react";
import { Route, Switch } from "react-router-dom";

import { NotFound } from "./404";
import { Welcome } from "./Welcome";

export const Router: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Welcome} />

    <Route path="*" component={NotFound} />
  </Switch>
);
