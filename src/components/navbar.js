
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
          <div className="logo col-md-6 col-sm-6 col-xs-12"><img alt="Logo" src={GOVLogo}/></div>
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#top-nav, #main-nav">
              <a href="#"><h3 className="mobile-menu text-center">Menu &ensp;
                          <span className="glyphicon glyphicon-chevron-down" aria-hidden="true"></span></h3></a>
            </button>


          </div>
          <div className="col-md-6">


            <nav className="collapse navbar-collapse" id ="top-nav">
             <ul className="nav navbar-nav navbar-right">
               <li><a href="/#About">About the Program</a></li>
               <li><NavLink to="/contact">Contact </NavLink></li>

             </ul>
           </nav>

          </div>

        </div>


        <nav className="navbar">


   <div className="collapse navbar-collapse" id="main-nav">
     <ul className="nav navbar-nav">
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
