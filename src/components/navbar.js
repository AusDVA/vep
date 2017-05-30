import React from 'react';
import {NavLink} from 'react-router-dom';
import GOVLogo from '../image/logo-gov.svg';

export default class NavBar extends React.Component {

   constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {

    return (
      <div className="container hidden-print">
        <div className="row">
          <div className="logo col-md-6 col-sm-6 col-xs-12"><img alt="Logo" src={GOVLogo}/></div>
           <div className="navbar-header col-md-1 col-xs-12 text-center">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#top-nav, #main-nav" aria-expanded="false">
         <a onClick={this.handleClick} href="#"><h3 className="mobile-menu text-center">Menu &nbsp;

                     <span onClick={this.handleClick} className= { this.state.isToggleOn ? "glyphicon glyphicon-chevron-down rotate-down" : "glyphicon glyphicon-chevron-down rotate"}
                     aria-hidden="true"></span></h3></a>
      </button>
       </div>
           <div className="col-md-6 col-xs-12">
              <nav className="collapse navbar-collapse text-center" id ="top-nav">
             <ul className="nav navbar-nav navbar-right">
               <li><a href="/#About">About the Program</a></li>
               <li><NavLink to="/contact">Contact </NavLink></li>

             </ul>
           </nav>
          </div>
        </div>
      <nav >

    <div className="collapse navbar-collapse" id="main-nav">
      <ul className="nav navbar-nav text-center">
       <li><NavLink exact to="/">Home</NavLink></li>
       <li><NavLink to="/veterans">Veterans</NavLink></li>
       <li><NavLink to="/employers">Employers</NavLink></li>
       <li><NavLink to="/ex-service-organisations">Ex-service organisations</NavLink></li>
       <li><NavLink to="/industry-advisory-committee">Industry Advisory Committee</NavLink></li>
       <li><NavLink to="/awards">Awards</NavLink></li>
     </ul>
    </div>
</nav>
      </div>



    );
  }
}
