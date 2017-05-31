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
        <div className="row">
          <div className="logo col-md-6 col-sm-6 col-xs-12"><img alt="Logo" src={GOVLogo}/></div>
           <div className="navbar-header col-md-1 col-xs-12 text-center">
      <button onClick={this.handleClick}  type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#mobile-nav" aria-expanded="false">
         <a href="#"><h3 className="mobile-menu text-center">Menu &nbsp;
              <span className= { this.state.isToggleOn ? "glyphicon glyphicon-chevron-down rotate-down" : "glyphicon glyphicon-chevron-down rotate"}
                    aria-hidden="true"></span></h3></a>
      </button>
       </div>
           <div className="col-md-6 col-xs-12">
              <nav className="collapse navbar-collapse text-center" id ="top-nav">
             <ul className="nav navbar-nav navbar-right">
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

<nav onClick={this.handleClick} className="mobile-nav">

<div className="collapse navbar-collapse" id="mobile-nav">
<ul className="nav navbar-nav text-center">
 <li><NavLink to="/contact" data-toggle="collapse" data-target="#mobile-nav">Contact </NavLink></li>
 <li><NavLink exact to="/" data-toggle="collapse" data-target="#mobile-nav">Home</NavLink></li>
 <li><NavLink to="/veterans" data-toggle="collapse" data-target="#mobile-nav">Veterans</NavLink></li>
 <li><NavLink to="/employers" data-toggle="collapse" data-target="#mobile-nav">Employers</NavLink></li>
 <li><NavLink to="/ex-service-organisations" data-toggle="collapse" data-target="#mobile-nav">Ex-service organisations</NavLink></li>
 <li><NavLink to="/industry-advisory-committee" data-toggle="collapse" data-target="#mobile-nav">Industry Advisory Committee</NavLink></li>
 <li><NavLink to="/awards" data-toggle="collapse" data-target="#mobile-nav">Awards</NavLink></li>
</ul>
</div>
</nav>
      </div>



    );
  }
}