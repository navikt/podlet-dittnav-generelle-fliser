import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { SWRConfig } from "swr";
import { worker } from "./mocks/browser";

if (process.env.NODE_ENV === "development") {
  worker.start();
}

ReactDOM.render(
  <React.StrictMode>
    <SWRConfig value={{ shouldRetryOnError: false }}>
      <App />
    </SWRConfig>
  </React.StrictMode>,
  document.getElementById("podlet-dittnav-generelle-fliser")
);
