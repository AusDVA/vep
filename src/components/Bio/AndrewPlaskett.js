import React from 'react';
import AndrewPlaskettIMG from "../../image/bio/AndrewPlaskett.jpg";
export default class AndrewPlaskett extends React.Component {

  render(){ 
    return (
      <div>
        <section>
          <div className="body-content container">
            <div className="row">

              <h1>Biography</h1>

              <div className="col-xs-5 col-md-3 col-sm-3">
                  <div className="thumbnail">
                    <img src={AndrewPlaskettIMG} alt="Andrew Plaskett"/>
                  </div>
              </div>

              <div className="col-md-8" id="mainCol">
                  <h4>AndrewPlaskett</h4>
                  <h4>Director, Clients and Markets & People and Development</h4>
                  <h4>Clayton Utz</h4>

                  <p>Andrew Plaskett joined Clayton Utz in April 2007 and is currently the Director of Clients and Markets/People and Development.</p>
                  <p>Prior to this appointment, he was the National Manager, Client Strategy at Freehills.</p>
                  <p>Andrew also worked as a Management Consultant for CCA which included a focus on supporting Government agencies
                     across Federal and State and Local Government in the design and implementation of enterprise development initiatives.</p>
                  <p>He holds a Bachelor of Business (International Management) from Monash University.</p>                                      
               </div>
              </div>
          </div>
        </section>
      </div>
    );
  }
}
