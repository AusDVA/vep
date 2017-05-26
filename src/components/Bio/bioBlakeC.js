
import React from 'react';
import BlakeCImg from '../../image/bio/BlakeC.jpg';
export default class BioBlakeC extends React.Component {

  render(){
    return (
      <div>
        <section>
          <div className="body-content container">
            <div className="row">

              <h1> Biography </h1>

              <div className="col-xs-5 col-md-3 col-sm-3">
                  <div className="thumbnail">
                    <img src={BlakeCImg} alt="Chris Blake"/>
                  </div>
              </div>

              <div className="col-md-8" id="mainCol">
                  <h4>Chris Blake</h4>
                  <h4>Executive General Manager, Group Services</h4>
                  <h4>Australia Post</h4>

                  <p> Chris Blake joined Australia Post in July 2010 and is the Executive General Manager Group Services.
                      He is responsible for leading strategy, cultural change, innovation, internal and external communications, Human Resources,
                      Government and Regulatory Affairs and stakeholder management.
                  </p>

                  <p>Prior to joining Australia Post, Chris worked in senior executive roles at the National Australia Bank (NAB) including the Executive General Manager
                     People and Organisational Development and the Executive General Manager, Business Strategy & People for NAB’s Global Wholesale Banking Division,
                     where he led the development of a new global business strategy for the wholesale bank following the Global Financial Crisis.
                  </p>

                  <p>Chris has a wealth of experience in overseeing complex organisation-wide change following his work in senior roles in banking and with PricewaterhouseCoopers,
                     where he was partner for 10 years.
                  </p>

                  <p>Chris also served as a Member of the Prime Minister’s Advisory Group on the Reform of Australian Government Administration, is a past Chairman of the
                     Brain Research Institute, a Director of the Australian American Leadership Dialogue and a member of the advisory boards of the High Resolves Institute,
                     the 100% Project and the APS Strategic Centre for Leadership, Learning and Development.
                  </p>
               </div>

              </div>
          </div>
        </section>
      </div>
    );
  }
}
