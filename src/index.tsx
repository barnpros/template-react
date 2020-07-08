import * as React from "react";
import ReactDOM from "react-dom";

import * as serviceWorker from "./utils/serviceWorker";
import { Root } from "./app";

ReactDOM.render(<Root />, document.querySelector("#root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
