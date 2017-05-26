import React from "react";
import BenRobertsSmith from "../../image/bio/ROBERTS_SMITH.jpg";
export default class ModalBR  extends React.Component {

  render() {
    return (
      <div>
        <div id="Deputy_Chair" className="modal fade" tabIndex="-1" role="dialog" aria-labelledby="Ben Roberts-Smith VC, MG bio">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h2 className="modal-title">Biography</h2>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-xs-5 col-md-3 col-sm-3">
                    <div className="thumbnail">
                      <img src={BenRobertsSmith} alt="Ben Roberts-Smith VC, MG"/>
                    </div>
                    </div>
                  <div className="col-md-6 col-xs-7">
                    <h4><strong>Ben Roberts-Smith VC, MG</strong></h4>
                    <h4><strong>General Manager</strong></h4>
                    <h4><strong>Seven Network, Queensland</strong></h4>
                      </div>
                      </div>                      
                      <p> Ben Roberts-Smith served with distinction in the Australian Army and Special Air Service Regiment. 
                          His service spans over 19 years and included operational deployments to East Timor, Fiji, Iraq, Afghanistan, and the Middle East.
                          Ben is a recipient of the Victoria Cross for Australia, the Medal for Gallantry and Commendation for Distinguished Service. </p>
                       <p>In 2013, Ben launched his own consultancy, RS Group Australia, and advised numerous national clients across a variety of sectors in relation
                          to corporate culture, strategic restructuring and change management. He focused extensively on assisting companies to achieve the benefits
                          of a high performance workplace culture. Ben completed a Master of Business Administration at the University of Queensland and is a graduate
                          of the Australian Institute of Company Directors. </p>
                        <p>In 2015 Ben was appointed Deputy General Manager of the Seven Network for Regional Queensland and in June that year was promoted
                           to General Manager. 2016 saw a restructure of operations within Seven West Media and at that time Ben’s responsibilities expanded
                           to include the Brisbane market as well as regional Queensland. Ben is now General Manager of the Seven Network in Queensland. </p>
                        <p>Ben’s contribution to Australia extends past his military service. He is also Chairman of the National Australia Day Council, 
                           Deputy Chairman of the Prime Minister’s Advisory Council for Veterans’ Mental Health, Member of the Queensland Veterans’ Advisory 
                           Council, Patron of the SAS Association’s Wandering Warriors and a National Ambassador for Legacy.</p>                            
              </div>
              <div className="modal-footer">
                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
