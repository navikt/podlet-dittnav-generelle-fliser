import React, { useEffect, useState } from "react";
import "./App.css";
import Panel from "nav-frontend-paneler";
import Navn from "./components/navn";
import Status from "./components/status";

function App() {
  const [name, setName] = useState("");
  useEffect(() => {
    fetch("https://api.nav.no/dittnav-api/personalia/navn", { credentials: "include" })
      .then((resp) => resp.json())
      .then((json) => setName(json.navn));
  }, []);

  return (
    <div className="podlet-template">
      <Panel border>
        <Navn navn={name} />
        <Status status={"registrert som arbeidssøker"} />
      </Panel>
    </div>
  );
}

export default App;
