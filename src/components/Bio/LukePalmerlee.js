import React from 'react';
import LukePalmerleeIMG  from "../../image/bio/LukePalmerlee.jpg";
export default class LukePalmerlee extends React.Component {

  render(){ 
    return (
      <div>
        <section>
          <div className="body-content container">
            <div className="row">

              <h1>Biography</h1>

              <div className="col-xs-5 col-md-3 col-sm-3">
                  <div className="thumbnail">
                    <img src={LukePalmerleeIMG} alt="Mr Luke Palmerlee"/>
                  </div>
              </div>

              <div className="col-md-8" id="mainCol">
                  <h4>Mr Luke Palmerlee</h4>
                  <h4>Executive Director</h4>
                  <h4>J.P. Morgan Chase Bank, NA (Sydney Branch)</h4>
                  <p>Luke Palmerlee is an Executive Director in the investment banking division of J.P. Morgan Australia
                     and heads the bank’s government business, reporting directly to the bank’s Australian CEO, Robert Priestley. 
                     He has been with the bank nearly 15 years, working throughout Asia and for the last 12 years in Australia.  
                     Luke has covered clients across a range of sectors including
                     real estate, infrastructure, energy/oil & gas and diversified industrial companies. </p>
                  <p>Prior to working for J.P. Morgan, Luke worked for global real estate services firm Cushman & Wakefield 
                     in New York and Hong Kong.  Luke began his professional career working as a legislative staffer in the United States
                     House of Representatives and Senate for members from his home state of Wyoming (Senators Alan Simpson and Malcolm Wallop
                     and Representative Craig Thomas). He focused on trade agreements, particularly passage of the North American Free Trade Agreement. </p>
                   <p>Luke earned a Bachelor of Arts (History) from Yale University and an MBA from Columbia University’s School of Business. </p>                                 
               </div>
              </div>
          </div>
        </section>
      </div>
    );
  }
}
