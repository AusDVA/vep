import React from 'react';
import MichaelWardIMG from "../../image/bio/MichaelWard.jpg";
export default class MichaelWard extends React.Component {

  render(){ 
    return (
      <div>
        <section>
          <div className="body-content container">
            <div className="row">

              <h1>Biography</h1>

              <div className="col-xs-5 col-md-3 col-sm-3">
                  <div className="thumbnail">
                    <img src={MichaelWardIMG} alt="MichaelWard"/>
                  </div>
              </div>

              <div className="col-md-8" id="mainCol">
                  <h4>Michael Ward</h4>
                  <h4>Managing Director</h4>
                  <h4>Raytheon Australia</h4>

                  <p>Michael Ward is Managing Director of Raytheon Australia responsible for the executive management
                     of Raytheon operations in Australia and New Zealand.</p>
                  <p>As a leading provider of Defence and training capability, Raytheon Australia is trusted to deliver; always.  The company 
                     provides integrated mission solutions, weapon systems and mission support services for the Australian Defence Force across
                     a broad range of key naval, land and aerospace capabilities and training solutions to both Defence and civil customers.</p> 
                  <p>Raytheon Company (NYSE: RTN), with 2014 sales of $23 billion and 61,000 employees worldwide, is a technology and innovation 
                     leader specialising in defence, security and civil markets throughout the world. Raytheon is headquartered in Waltham, Mass.</p>
                  <p>Prior to assuming his current position, Michael served as Raytheon Australia’s General Manager, Strategy and Business Development,
                     where he was responsible for business growth and operational efficiency.  He has also previously served as the Company’s Chief Operating 
                     Officer and General Manager, Support Services. </p>
                  <p>Before joining Raytheon, Michael was employed as a Defence Adviser to the Parliament of Australia. Michael’s service in the Parliament 
                     of Australia came at the end of a 20-year career with the Australian Military.</p>
                  <p>A native of Australia, Michael is a graduate of the University of New South Wales and a Fellow of the Australian Institute of Management. 
                     He studied for a bachelor’s degree in information technology before completing a master’s degree in business administration.
                     Michael has also undertaken graduate training in aeronautical engineering, defence studies and training.</p>
               </div>
              </div>
          </div>
        </section>
      </div>
    );
  }
}
