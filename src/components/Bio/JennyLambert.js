import React from 'react';
import JennyLambertIMG from "../../image/bio/Jenny.jpg";
export default class JennyLambert extends React.Component {

  render(){ 
    return (
      <div>
        <section>
          <div className="body-content container">
            <div className="row">

              <h1>Biography</h1>

              <div className="col-xs-5 col-md-3 col-sm-3">
                  <div className="thumbnail">
                    <img src={JennyLambertIMG} alt="Jenny Lambert"/>
                  </div>
              </div>

              <div className="col-md-8" id="mainCol">
                  <h4>Jenny Lambert</h4>
                  <h4>Director Employment, Education and Training</h4>
                  <h4>Australian Chamber of Commerce and Industry</h4>
                    <p>Jenny has been serving the business community for 32 years as a senior manager within industry associations,
                       including 16 years as a CEO of associations largely in the services sector.</p> 
                    <p>Commencing with the Australian Hotels Association as their Industrial & Research Officer in 1984, Jenny then served
                       as Project Manager at Tourism’s Industry Training Advisory Board in the early 1990s, working on projects relating
                       to workplace reform, workplace assessment, competency standards, training accreditation and quality assurance. </p>
                    <p>Jenny took on her first CEO role as head of Restaurant & Catering NSW, and then jointly held the national CEO role until 1999.  Then 
                       followed six years as CEO of Meetings & Events Australia, overseeing amongst other activities, a structured professional 
                       development and accreditation system.  In 2005, she became CEO of Nursery & Garden Industry Australia and in 2007, CEO of the National
                       Tourism Alliance, which is the peak body for tourism associations nationally.  She commenced with the Australian Chamber in May 2011
                       and is responsible for policy development and advocacy in vocational training, higher education, schools, employment and migration. </p>          
               </div>
              </div>
          </div>
        </section>
      </div>
    );
  }
}
