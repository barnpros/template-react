import * as React from "react";

/**
 * Accepts a string as a parameter, stores a reference to that string,
 * and sets the document title to the string. Will update the document title
 * any time the passed string changes.
 */
export function useDocumentTitle(title: string) {
  const titleReference = React.useRef<string>();

  if (titleReference.current !== title) {
    titleReference.current = title;
    document.title = titleReference.current;
  }
}
