import React from 'react';
import {NavLink} from 'react-router-dom';
import GOVLogo from '../image/logo-gov.svg';

export default class NavBar extends React.Component {

  close() {
    this.setState({showModal: false});
  }

  render() {
    return (
      <div className="container hidden-print">
        <div className="row">
          <div className="logo col-md-6"><img alt="Logo" src={GOVLogo}/></div>
          <div className="col-md-6">
              <nav id="top-nav">
                <ul className="list-inline pull-right">
                  <li><NavLink to="/about">About</NavLink></li>
                    <li>
                        <NavLink to="/contact">
                            <span className="glyphicon glyphicon-earphone" aria-hidden="true"></span> Contact
                        </NavLink>
                    </li>
                </ul>
              </nav>
          </div>
        </div>
        <nav>
          <ul className="list-inline">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/veterans">Veterans</NavLink></li>
            <li><NavLink to="/employers">Employers</NavLink></li>
            <li><NavLink to="/ex-service-organisations">Ex-service organisations</NavLink></li>
            <li><NavLink to="/industry-advisory-committee">Industry Advisory Committee</NavLink></li>
            <li><NavLink to="/awards">Awards</NavLink></li>
          </ul>
        </nav>
      </div>

    );
  }
}
