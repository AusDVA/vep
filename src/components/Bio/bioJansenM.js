
import React from 'react';
import JansenMImg from '../../image/bio/JansenM.jpg';
export default class BioJansenM extends React.Component {

  render(){
    return (
      <div>
        <section>
          <div className="body-content container">
            <div className="row">

              <h1> Biography </h1>

              <div className="col-xs-5 col-md-3 col-sm-3">
                  <div className="thumbnail">
                    <img src={JansenMImg} alt="Mark Jansen"/>
                  </div>
              </div>

              <div className="col-md-8" id="mainCol">
                  <h4>Mark Jansen</h4>
                  <h4>Director </h4>
                  <h4>PwC</h4>

                  <p> Bachelor of Science – University of New South Wales
                      Graduate Diploma of Technology Management – Deakin University
                      Master of Defence Studies – Canberra University
                  </p>

                  <p>Mark Jansen is a Partner in PwC and leads elements of the Defence and National Security Businesses. He supports clients in Strategy, Aerospace, Command, Control,
                     Intelligence and Information Technology.  Mark has over 15 years of consulting experience and was a Partner in Booz & Company before the company was acquired by PwC in 2015.
                  </p>

                  <p>Prior to working as a consultant, Mark was in the Air Force for 15 years, serving primarily as an Intelligence Officer.
                     Mark gained operational experience in East Timor.  He was awarded the Chief of Air Force Prize for professional excellence on
                     No 53 Command and Staff Course and was the academic dux of No 25 Fighter Combat Instructor/Fighter Intelligence Instructor course.
                  </p>
               </div>

              </div>
          </div>
        </section>
      </div>
    );
  }
}
