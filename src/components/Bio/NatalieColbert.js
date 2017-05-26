import React from 'react';
import Natalie_Colbert from "../../image/bio/Natalie_Colbert.jpg";
export default class NatalieColbert extends React.Component {

  render(){ 
    return (
      <div>
        <section>
          <div className="body-content container">
            <div className="row">

              <h1>Biography</h1>

              <div className="col-xs-5 col-md-3 col-sm-3">
                  <div className="thumbnail">
                    <img src={Natalie_Colbert} alt="Natalie Colbert"/>
                  </div>
              </div>

              <div className="col-md-8" id="mainCol">
                  <h4>Natalie Colbert</h4>
                  <h4>Chief Executive Officer</h4>
                  <h4>Chief Executive Officer</h4>
                  <p>Natalie has eight years of corporate experience as the founder and sole director/Chief Executive Officer 
                       of CanPLAY Pty Ltd, a company managing three separate early childhood business in Canberra and offering
                        consulting services to other early childhood education providers.</p>
                    <p>Natalie is a veteran of the Royal Australian Air Force after serving twenty-two years’ as a Logistics Officer 
                       including a deployment to East Timor.  During her career, Natalie was exposed to the many unique aspects of the 
                       Defence industry, mainly within the logistics/engineering and financial environments.  She has gained substantial 
                       experience in tactical, operational and strategic logistics management, the development of Defence capability requirements,
                       and the Defence acquisition process.</p>
                    <p>Natalie is a graduate of the Australian Defence Force Academy and the University of New South Wales.  She holds separate 
                       degrees in Arts, Business and Technology, and Project Management.  Natalie is a graduate of the Australian Institute of Company Directors. </p>

               </div>

              </div>
          </div>
        </section>
      </div>
    );
  }
}
