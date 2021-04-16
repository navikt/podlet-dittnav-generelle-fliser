import React from "react";
import ReactDOM from "react-dom";
import { QueryClientProvider } from "react-query";
import { worker } from "./mocks/browser";
import queryClient from "./utils/query";
import App from "./App";

if (process.env.NODE_ENV === "development") {
  worker.start();
}

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("podlet-dittnav-generelle-fliser")
);
