import React from "react";
import ReactDOM from "react-dom/client";
import MainApp from "./MainApp";

// ReactDOM.render(, document.getElementById("root"));
// ReactDOM.createRoot(document.getElementById("root"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MainApp /> 
  </React.StrictMode>
);