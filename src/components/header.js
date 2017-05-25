import React from 'react';
import VEPLogo from '../image/banner4.png';

export default class Header extends React.Component {

  render(){
    return (
      <div id="header">
        <header className="vep-branding" id="top">
          <div className="container">
              <img src={VEPLogo} alt="Veterans' Employment Program"/>
          </div>
        </header>
      </div>
    );
  }
}
