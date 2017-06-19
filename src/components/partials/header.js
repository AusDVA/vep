import React from 'react';
import VEPLogo from '../../image/banner4.png';
import PrintHeader from "../../image/vepbanner.png";

export default class Header extends React.Component {

  render(){
    return (
      <div>
      <header className="print-only" aria-hidden="true">
        <div className="row">
          <div className="col-md-12">
              <img src={PrintHeader} alt="Header image for printing purposes"></img>
          </div>
        </div>
      </header>
      <div className="hidden-print" id="header">
        <header className="vep-branding" id="top">
          <div className="container">
              <img src={VEPLogo} alt="Prime Minister's Veterans' Employment Program"/>
          </div>
        </header>
      </div>
    </div>
    );
  }
}
