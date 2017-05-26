
import React from 'react';
import RobertsSImg from '../image/RobertsS.jpg';
export default class BioRobertsS extends React.Component {

  render(){ 
    return (
      <div>
        <section>
          <div className="body-content container">
            <div className="row">

              <h1> Biography </h1>

              <div className="col-xs-5 col-md-3 col-sm-3">
                  <div className="thumbnail">
                    <img src={RobertsSImg} alt="Ben Roberts-Smith "/>
                  </div>
              </div>

              <div className="col-md-8" id="mainCol">
                  <h4>Ben Roberts-Smith </h4>
                  <h4>General Manager</h4>
                  <h4>Seven Network, Queensland</h4>

                  <p> Ben Roberts-Smith served with distinction in the Australian Army and Special Air Service Regiment.
                     His service spans over 19 years and included operational deployments to East Timor, Fiji, Iraq, Afghanistan, and the Middle East.
                     Ben is a recipient of the Victoria Cross for Australia, the Medal for Gallantry and Commendation for Distinguished Service.
                  </p>

                  <p>In 2013, Ben launched his own consultancy, RS Group Australia, and advised numerous national clients across a variety of sectors
                     in relation to corporate culture, strategic restructuring and change management. He focused extensively on assisting companies to
                     achieve the benefits of a high performance workplace culture. Ben completed a Master of Business Administration at the University of
                     Queensland and is a graduate of the Australian Institute of Company Directors.
                  </p>

                  <p>In 2015 Ben was appointed Deputy General Manager of the Seven Network for Regional Queensland and in June that year was promoted to General Manager.
                     2016 saw a restructure of operations within Seven West Media and at that time Ben’s responsibilities expanded to include the Brisbane market
                     as well as regional Queensland. Ben is now General Manager of the Seven Network in Queensland.
                  </p>

                  <p>Ben’s contribution to Australia extends past his military service. He is also Chairman of the National Australia Day Council,
                     Deputy Chairman of the Prime Minister’s Advisory Council for Veterans’ Mental Health, Member of the Queensland Veterans’ Advisory Council,
                     Patron of the SAS Association’s Wandering Warriors and a National Ambassador for Legacy.
                  </p>
               </div>

              </div>
          </div>
        </section>
      </div>
    );
  }
}
