import React from "react";
import { useQuery } from "react-query";
import { oppfolgingUrl } from "./url";
import GenerelleFliser from "./components/GenerelleFliser";
import { fetcher } from "./api";

function App() {
  const { data, error } = useQuery(oppfolgingUrl, fetcher);

  return !data?.erBrukerUnderOppfolging || error ? (
    <div className="podlet-dittnav-generelle-fliser">
      <GenerelleFliser />
    </div>
  ) : null;
}

export default App;
