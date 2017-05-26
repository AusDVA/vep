import React from 'react';
import ColinMcDowellIMG from "../../image/bio/ColinMcDowell.jpg";
export default class ColinMcDowell extends React.Component {

  render(){ 
    return (
      <div>
        <section>
          <div className="body-content container">
            <div className="row">

              <h1>Biography</h1>

              <div className="col-xs-5 col-md-3 col-sm-3">
                  <div className="thumbnail">
                    <img src={ColinMcDowellIMG} alt="Colin McDowell"/>
                  </div>
              </div>

              <div className="col-md-8" id="mainCol">
                  <h4>Colin McDowell</h4>
                  <h4>Chief Executive Officer</h4>
                  <h4>Allied Express Transport</h4>
                <p>Colin McDowell is the Chief Executive Officer of Allied Express Transport.</p>
                <p>Allied Express Transport are Australia’s largest privately owned express transport company,
                   responsible for the distribution of product from many industry leading brands such as Holden 
                   (Allied Express builds the Holden motor car!), Schneider Electric, Repco, AutoNexus, De’Longhi Group, LG and Foxtel. 
                    Colin founded Allied Express 38 years ago and it currently turns over $120 Million per annum.</p>
                <p>Colin has also been highly active in the Harness Racing industry, as both a participant (Driver, Trainer, Owner and Breeder)
                   and as a sponsor.  He has acted in both an advisory capacity and officially on various committees.</p>
                <p>Colin is also Major Sponsor of the  West Tigers Rugby League Club, an association that goes back some 25 years.  Allied Express
                   also sponsors and supports the North Melbourne Football Club, and a number of other sporting and charitable associations.</p>                                    
               </div>
              </div>
          </div>
        </section>
      </div>
    );
  }
}
