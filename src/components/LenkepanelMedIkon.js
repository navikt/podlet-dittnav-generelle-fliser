import React from "react";
import { shape, any, node, func, string } from "prop-types";
import { LenkepanelBase } from "nav-frontend-lenkepanel";
import { Normaltekst, Undertekst, Undertittel } from "nav-frontend-typografi";

class LenkepanelMedIkon extends React.Component {
  render() {
    const { href, className, overskrift, ingress, children } = this.props;

    return (
      <LenkepanelBase className={className} href={href} border>
        <div className="lenkepanel__innhold">
          <div className="lenkepanel__ikon">{children}</div>
          <div>
            <Undertittel>{overskrift}</Undertittel>
            {ingress ? <Normaltekst>{ingress}</Normaltekst> : ""}
          </div>
        </div>
      </LenkepanelBase>
    );
  }
}

LenkepanelMedIkon.propTypes = {
  href: string.isRequired,
  onClick: func,
  className: string,
  overskrift: string,
  ingress: string,
  children: node.isRequired,
};

LenkepanelMedIkon.defaultProps = {
  onClick: null,
  className: "",
  ingress: null,
};

export default LenkepanelMedIkon;
