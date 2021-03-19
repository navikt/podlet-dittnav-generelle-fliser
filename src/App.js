import React from "react";
import { oppfolgingUrl } from "./url";
import useSWR from "swr";
import GenerelleFliser from "./components/GenerelleFliser";

const fetcher = async (url) => {
  const response = await fetch(url, { method: "GET", credentials: "include" });
  const data = await response.json();
  return data;
};

function App() {
  const { data, error } = { data: { erBrukerUnderOppfolging: false }, error: null }; //useSWR(oppfolgingUrl, fetcher);

  return !data?.erBrukerUnderOppfolging || error ? (
    <div className="podlet-dittnav-generelle-fliser">
      <GenerelleFliser />
    </div>
  ) : null;
}

export default App;
