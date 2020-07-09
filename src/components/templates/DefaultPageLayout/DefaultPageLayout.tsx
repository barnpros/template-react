import * as React from "react";

import { useDocumentTitle } from "../../../hooks";

type Props = {
  pageTitle: string;
};

export const DefaultPageLayout: React.FC<Props> = ({ children, pageTitle }) => {
  useDocumentTitle(pageTitle);

  return <>{children}</>;
};
