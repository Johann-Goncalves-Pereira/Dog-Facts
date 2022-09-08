import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";

//& Base Styles, all pages;
const stylesL01 = import.meta.globEager("./Styles/**/*.scss");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
