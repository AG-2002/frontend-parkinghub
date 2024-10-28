import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import "./styles/index.css";

import { MapProvider } from "./context/map-context";

const el = document.getElementById("root");
const root = ReactDom.createRoot(el);

root.render(
  <MapProvider>
    <App />
  </MapProvider>
);
