import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import { FavoritesContextProvider } from "./providers/favoritesContext";

// ReactDOM.render(<App />, document.getElementById("root"));

/* Modificamos el render para implementar el contexto que controla los meetups favoritos. */
ReactDOM.render(
  <FavoritesContextProvider>
    <App />
  </FavoritesContextProvider>,
  document.getElementById("root")
);
