import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import "./index.css";
import AppRoutes from "_/components/AppRoutes";
import { Store } from "_/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <AppRoutes />
    </Provider>
  </React.StrictMode>
);
