import React from 'react';
import {NavLink} from 'react-router-dom';
import GOVLogo from '../../image/logo-gov.svg';

export default class NavBar extends React.Component {

   constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
    e.preventDefault();
    return false;
  }

  render() {
    return (
      <div className="container hidden-print">
      <a href="#content" className="sr-only sr-only-focusable">Skip to main content</a>
        <div className="row">
          <div className="logo col-md-6 col-sm-6 col-xs-6"><img alt="Australian Coat of arms" src={GOVLogo}/></div>
          <div className="col-md-2 col-xs-6 col-md-offset-2"><span className="beta">Beta Version</span></div>

          <div className="navbar-header col-md-1 col-xs-12 text-center">
     <button onClick={this.handleClick}  type="button" className="navbar-toggle collapsed" data-toggle="collapse"
             data-target="#mobile-nav" aria-expanded="false" aria-label="Toggle navigation">
        <a href="#"><h3  className="mobile-menu text-center">Menu
             <span className= { this.state.isToggleOn ? "glyphicon glyphicon-chevron-down rotate-down" : "glyphicon glyphicon-chevron-down rotate"}
                   aria-hidden="true"></span></h3></a>
     </button>
      </div>
        </div>

      <nav >
    <div className="collapse navbar-collapse" id="main-nav">
      <ul className="nav navbar-nav text-center">
       <li><NavLink exact to="/" onClick={this.forceUpdate}>Home</NavLink></li>
       <li><NavLink to="/veterans" onClick={this.forceUpdate}>Veterans</NavLink></li>
       <li><NavLink to="/employers" onClick={this.forceUpdate}>Employers</NavLink></li>
       <li><NavLink to="/ex-service-organisations" onClick={this.forceUpdate}>Ex-service organisations</NavLink></li>
       <li><NavLink to="/industry-advisory-committee" onClick={this.forceUpdate}>Industry Advisory Committee</NavLink></li>
       <li><NavLink to="/awards" onClick={this.forceUpdate}>Awards</NavLink></li>
       <li><NavLink to="/contact" onClick={this.forceUpdate}>Contact </NavLink></li>
     </ul>
    </div>
</nav>

<nav onClick={this.handleClick} className="mobile-nav">

  <div className="collapse navbar-collapse" id="mobile-nav">
    <ul className="nav navbar-nav text-center">
      <li><NavLink exact to="/" data-toggle="collapse" data-target="#mobile-nav">Home</NavLink></li>
      <li><NavLink to="/veterans" data-toggle="collapse" data-target="#mobile-nav">Veterans</NavLink></li>
      <li><NavLink to="/employers" data-toggle="collapse" data-target="#mobile-nav">Employers</NavLink></li>
      <li><NavLink to="/ex-service-organisations" data-toggle="collapse" data-target="#mobile-nav">Ex-service organisations</NavLink></li>
      <li><NavLink to="/industry-advisory-committee" data-toggle="collapse" data-target="#mobile-nav">Industry Advisory Committee</NavLink></li>
      <li><NavLink to="/awards" data-toggle="collapse" data-target="#mobile-nav">Awards</NavLink></li>
      <li><NavLink to="/contact" data-toggle="collapse" data-target="#mobile-nav">Contact </NavLink></li>
    </ul>
   </div>
 </nav>
</div>
    );
  }
}
