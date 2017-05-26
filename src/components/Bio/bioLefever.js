
import React from 'react';
import LefeverJImg from '../../image/bio/LefeverJ.jpg';
export default class BioLefeverJ extends React.Component {

  render(){
    return (
      <div>
        <section>
          <div className="body-content container">
            <div className="row">

              <h1> Biography </h1>

              <div className="col-xs-5 col-md-3 col-sm-3">
                  <div className="thumbnail">
                    <img src={LefeverJImg} alt="Mr George Frazis"/>
                  </div>
              </div>

              <div className="col-md-8" id="mainCol">
                  <h4>Jim Lefever</h4>
                  <h4>Human Resources </h4>
                  <h4>CSC Australia Pty Ltd</h4>

                  <p> Jim Lefever leads CSC’s human resources department. </p>

                  <p>He is an experienced business transformation leader, human resources director, change manager and consultant.
                     Jim has designed and managed the implementation of innovative and successful transformations across the world.
                     Jim previously held senior HR and transformation roles at Salmat, Hewlett Packard/EDS Group, Equant/Global One,
                     as well as running his own transformation consulting business, creating value and realising EBITA benefit at global,
                     Asia-Pacific, Australian and  New Zealand levels.
                  </p>

                  <p>Prior to his civilian career, Jim spent 10 years as an Officer in the Royal Marines Commandos working in a variety of roles and a variety of locations worldwide.  </p>

                  <p>He is passionate about building better relationships between employers and employees by creating solutions that transform the status quo within organisations.</p>

               </div>

              </div>
          </div>
        </section>
      </div>
    );
  }
}
