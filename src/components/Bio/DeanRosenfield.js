import React from 'react';
import DeanRosenfieldIMG from "../../image/bio/DeanRosenfield.jpg";
export default class DeanRosenfield extends React.Component {

  render(){ 
    return (
      <div>
        <section>
          <div className="body-content container">
            <div className="row">

              <h1>Biography</h1>

              <div className="col-xs-5 col-md-3 col-sm-3">
                  <div className="thumbnail">
                    <img src={DeanRosenfieldIMG} alt="DeanRosenfield"/>
                  </div>
              </div>

              <div className="col-md-8" id="mainCol">
                  <h4>Dean Rosenfield</h4>
                  <h4>Managing Director</h4>
                  <h4>Saab Australia Pty Ltd</h4>

                  <p>Dean Rosenfield was appointed as the Managing Director of Saab Australia Pty Ltd in 2013 and is the senior representative 
                     for the Saab defence and security corporation in Australia and New Zealand. </p>
                  <p>Dean is a graduate of the Royal Military College, Duntroon and served 15 years in the Australian Army
                     before moving to industry in 1999 as a management consultant.</p>
                  <p>He has been with Saab since 2001 and has held senior roles in engineering, project management and business development
                     on the defence side of the business.  In 2007, Dean established Saab’s Civil Security business which now specialises
                     in security, air traffic management and communications. </p>
                  <p>He is 49 years old, holds a Master of Management (Project Management) from the University of NSW and is a Member of the Australian
                     Institute of Company Directors.  Dean is married to Clare, where they reside in Adelaide.  They have a son serving in the Royal Australian 
                     Navy and a daughter studying Commerce at University.</p>                            
               </div>
              </div>
          </div>
        </section>
      </div>
    );
  }
}
