import React from "react";
import {Systemtittel} from "nav-frontend-typografi";

interface Props {
  status?: string;
}

function Status(props: Props) {
  const { status } = props;

  if (!status) return null;

  return <Systemtittel>Du er {status}</Systemtittel>;
}

export default Status;
