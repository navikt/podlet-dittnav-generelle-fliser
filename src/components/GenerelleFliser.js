import React from "react";
import tekster from "../language/tekster.json";
import LenkepanelMedIkon from "./LenkepanelMedIkon";
import IkonBlyant from "../assets/IkonBlyant";
import IkonSparegris from "../assets/IkonKane";
import IkonPlaster from "../assets/IkonPlaster";
import IkonSkilt from "../assets/IkonSkilt";
import { lenker } from "../utils/lenker";
import "./GenerelleFliser.less";

const GenerelleFliser = () => (
  <React.Fragment>
    <div className="dittnav-lenkeikon-container">
      <LenkepanelMedIkon
        alt="Ditt sykefravær"
        overskrift={tekster["fliser.ditt.sykevravaer"]}
        ingress={tekster["fliser.ditt.sykevravaer.ingress"]}
        className="first"
        href={lenker.dittSykefravaer.url}
      >
        <IkonPlaster />
      </LenkepanelMedIkon>
      <LenkepanelMedIkon
        alt="Mistet jobben?"
        overskrift={tekster["fliser.mistet.jobben"]}
        ingress={tekster["fliser.mistet.jobben.ingress"]}
        href={lenker.veilederArbeidssoker.url}
      >
        <IkonSkilt />
      </LenkepanelMedIkon>
    </div>
    <div className="dittnav-lenkeikon-container blokk-xxl">
      <LenkepanelMedIkon
        alt="Skjemaer"
        overskrift={tekster["fliser.skjemaer"]}
        ingress={tekster["fliser.skjemaer.ingress"]}
        className="first"
        href={lenker.skjemaer.url}
      >
        <IkonBlyant />
      </LenkepanelMedIkon>
      <LenkepanelMedIkon
        alt="Din pensjon"
        overskrift={tekster["fliser.din.pensjon"]}
        ingress={tekster["fliser.din.pensjon.ingress"]}
        href={lenker.dinPensjon.url}
      >
        <IkonSparegris />
      </LenkepanelMedIkon>
    </div>
  </React.Fragment>
);

export default GenerelleFliser;
