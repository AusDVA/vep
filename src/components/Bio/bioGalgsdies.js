
import React from 'react';
import MarkGImg from '../../image/bio/MarkG.jpg';
export default class BioMarkG extends React.Component {

  render(){
    return (
      <div>
        <section>
          <div className="body-content container">
            <div className="row">

              <h1> Biography </h1>

              <div className="col-xs-5 col-md-3 col-sm-3">
                  <div className="thumbnail">
                    <img src={MarkGImg} alt="Mark Galgsdies"/>
                  </div>
              </div>

              <div className="col-md-8" id="mainCol">
                  <h4>Mark Galgsdies, JP</h4>
                  <h4>National Training Manager – Defence</h4>
                  <h4>Serco Asia Pacific</h4>

                  <p>Mark joined Serco Asia Pacific as its National Training Manager - Defence in March 2016.
                     After spending 8 years as an Education Officer in the Royal Australian Air Force, Mark pursued a career focussed on staff training and development.
                     Over the past 20 years, Mark has worked in both public and private sector organisations across many different industries ranging from banking to
                     construction, in Australia, Papua New Guinea, New Zealand, USA and Singapore.
                  </p>

                  <p>Mark is a strong advocate for Australia’s apprenticeship and traineeship system. He is keen to foster collaborative and innovative partnerships
                     between Registered Training Organisations and Group Training providers in the Vocational Education and Training sector and with industry and the
                     Australian Defence Force to widen and deepen the opportunities for skills recognition and meaningful job and career prospects for ADF veterans and their families.
                  </p>

                  <p>In 2013 Mark was the training and development subject matter expert for the Australian Constructors Association (ACA) Working Party on national Workforce Development
                     issues and nationwide critical skills shortages in the construction industry.
                  </p>

                  <p>Mark completed a Masters Degree in Education at the University of Sydney and has graduate and post-graduate qualifications in Mathematics, Science and Education
                    from the University of Tasmania. He also holds Diplomas in Management, and Training and Assessment.
                  </p>

                  <p>Mark is also a registered high school maths and science teacher in NSW. He is an Associate Fellow of the Australian Institute of Management and is a Certified Professional
                     with the Australian Human Resources Institute.</p>
               </div>

              </div>
          </div>
        </section>
      </div>
    );
  }
}
