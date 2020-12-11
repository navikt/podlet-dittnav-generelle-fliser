import React from "react";
import "./App.css";
import GenerelleFliser from "./dittnav/generelle-fliser";

function App() {
  return (
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
  );
}

export default App;
