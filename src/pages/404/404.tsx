import * as React from "react";

import { DefaultPageLayout } from "../../components/templates";

export const NotFound: React.FC = () => (
  <DefaultPageLayout pageTitle="404: Not Found">
    <h1>Whoops! Looks like that page can&apos;t be found!</h1>
  </DefaultPageLayout>
);
