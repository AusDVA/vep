import React from 'react';
import {NavLink} from 'react-router-dom';
import GOVLogo from '../../image/logo-gov.svg';

export default class NavBar extends React.Component {

   constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    this.handleClick = this.handleClick.bind(this);
    this.focus = this.focus.bind(this);
  }

  handleClick(e) {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
    e.preventDefault();
    return false;
  }

  focus() {
    this.refs.skipNav.focus();
  }

  render() {
    return (
      <div>
       <div className="header-message hidden-print" role="alert" id="top">
         <div className="container">
           This is a beta version of this website. We welcome your <a href="mailto:veteransemployment@dva.gov.au?subject=Veterans'%20Employment%20Program%20-%20Beta%20Feedback">feedback
            <span className="sr-only">(this link will create a new email addressed to veteransemployment@dva.gov.au)</span></a>.
          </div>
        </div>
      <div className="container hidden-print">
        <nav className="no-border" tabIndex="-1" ref="skipNav" autoFocus>
          <a href="#content" className="sr-only sr-only-focusable">Skip to main content</a>
        </nav>
        <div className="row">

          <div className="col-md-6 col-sm-6 col-xs-6">
                <NavLink exact to="/" className="logo"><img alt="Australian Government Logo" src={GOVLogo} /></NavLink>
          </div>

          <ul className="list-contents col-lg-offset-10 col-sm-offset-8">
            <li><span className="beta">BETA</span></li>
            <li id="subcribe-mobile"><a href="http://eepurl.com/c-ABGj" target="_blank" rel="noopener"><span className="subcribe-mobile">SUBSCRIBE</span>
            <span className="sr-only">(this link will open in a new tab)</span></a></li>
          </ul>

          <div className="navbar-header col-md-6 col-sm-4 col-xs-12 text-center">
     <button onClick={this.handleClick}  type="button" className="navbar-toggle collapsed" data-toggle="collapse"
             data-target="#mobile-nav" aria-expanded="false" aria-label="Toggle navigation">
        <a href="#"><p  className="mobile-menu text-center">Menu
             <span className= { this.state.isToggleOn ? "glyphicon glyphicon-chevron-down rotate-down" : "glyphicon glyphicon-chevron-down rotate"}
                   aria-hidden="true"></span></p></a>
     </button>
      </div>
        </div>

      <nav >
    <div className="collapse navbar-collapse" id="main-nav">
      <ul onClick={this.focus} className="nav navbar-nav text-center">
       <li><NavLink exact to="/">Home</NavLink></li>
       <li><NavLink to="/veterans">Veterans</NavLink></li>
       <li><NavLink to="/employers">Employers</NavLink></li>
       <li><NavLink to="/ex-service-organisations">Ex-service organisations</NavLink></li>
       <li><NavLink to="/industry-advisory-committee">Industry Advisory Committee</NavLink></li>
       <li><NavLink to="/awards">Awards</NavLink></li>
       <li><NavLink to="/contact">Contact </NavLink></li>
       <li id="subcribe"><a href="http://eepurl.com/c-ABGj" target="_blank" rel="noopener"><span className="subcribe">SUBSCRIBE</span>
           <span className="sr-only">(this link will open in a new tab)</span></a></li>
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
</div>
    );
  }
}
