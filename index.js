/**
 * index.js
 * entry file: render the wrapped components
 */

import { render } from "react-dom";
import React from "react";
// Import root app
import App from "./containers/App";
import "./styles/style.css";
import { BrowserRouter } from "react-router-dom";

const MOUNT_NODE = document.getElementById("app");

// wrap the app into DOM
render(
  // BrowserRouter to be used until another package imported for browser history
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  MOUNT_NODE
);
