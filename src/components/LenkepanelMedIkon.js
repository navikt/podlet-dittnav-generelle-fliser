import React from "react";
import { shape, any, node, func, string } from "prop-types";
import { LenkepanelBase } from "nav-frontend-lenkepanel";
import { Normaltekst, Undertekst, Undertittel } from "nav-frontend-typografi";

class LenkepanelMedIkon extends React.Component {
  render() {
    const { href, className, overskrift, ingress, etikett, children } = this.props;

    return (
      <LenkepanelBase className={className} href={href} border>
        <div className="lenkepanel__innhold">
          <div className="lenkepanel__ikon">{children}</div>
          <div>
            <Undertittel>{overskrift}</Undertittel>
            {ingress ? <Normaltekst>{ingress}</Normaltekst> : ""}
            {etikett ? <Undertekst className="lenkepanel__etikett">{etikett}</Undertekst> : ""}
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
  overskrift: shape({ root: any }).isRequired,
  ingress: shape({ root: any }),
  etikett: string,
  children: node.isRequired,
};

LenkepanelMedIkon.defaultProps = {
  onClick: null,
  className: "",
  ingress: null,
  etikett: null,
};

export default LenkepanelMedIkon;
