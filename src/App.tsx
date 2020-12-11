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
  const { data: underOppfolging } = useSWR(oppfolgingUrl, fetcher);
  return (!underOppfolging
      ?
      <div className="podlet-dittnav-generelle-fliser">
        <div className="container">
          <div className="row">
            <div className="maincontent side-innhold">
              <div className="col-md-12" id="dittnav-main-container">
                <GenerelleFliser />
              </div>
            </div>
          </div>
        </div>
      </div>
      :
      null
  );
}

export default App;
