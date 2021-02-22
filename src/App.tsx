import React from "react";
import "./App.css";
import GenerelleFliser from "./dittnav/generelle-fliser";
import { oppfolgingUrl } from "./url";
import useSWR from "swr";

const fetcher = async (url: string) => {
  const response = await fetch(url, { method: "GET", credentials: "include" });
  const data = await response.json();
  return data;
};

function App() {
  const { data } = useSWR(oppfolgingUrl, fetcher);
  return data && !data.erBrukerUnderOppfolging ? (
    <div className="podlet-dittnav-generelle-fliser">
      <GenerelleFliser />
    </div>
  ) : null;
}

export default App;
