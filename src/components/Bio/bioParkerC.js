
import React from 'react';
import ParkerCImg from '../../image/bio/ParkerC.jpg';
export default class BioParkerC extends React.Component {

  render(){
    return (
      <div>
        <section>
          <div className="body-content container">
            <div className="row">

              <h1> Biography </h1>

              <div className="col-xs-5 col-md-3 col-sm-3">
                  <div className="thumbnail">
                    <img src={ParkerCImg} alt="Mr George Frazis"/>
                  </div>
              </div>

              <div className="col-md-8" id="mainCol">
                  <h4>Christine Parker</h4>
                  <h4>Group Executive, Human Resources, Corporate Affairs and Sustainability</h4>
                  <h4>Westpac Group</h4>

                  <p> Christine Parker is Group Executive, Human Resources and Corporate Affairs for the Westpac Group. </p>

                  <p>In this role, Christine is a member of Westpac Group’s Executive Team and holds leadership responsibility for the
                     Human Resources and Corporate Affairs and Sustainability functions across the Westpac Group.
                  </p>

                  <p>Her portfolio includes responsibility for the Westpac Group's human resources strategy and management, including reward and recognition,
                     safety, learning and development, careers and talent, employee relations and employment policy.  She is also responsible for Corporate Affairs and Sustainability.
                  </p>

                  <p>Before her move to the Group role in Australia, Christine was General Manager HR for Westpac New Zealand.
                     Christine was one of New Zealand’s leading HR practitioners, and has held senior appointments in across a number of high profile organisations and a
                     range of industries including manufacturing, retail and services.
                  </p>

                  <p>Prior to joining Westpac, Christine was Group HR Director for Carter Holt Harvey where she was responsible for the development and delivery of all facets of their
                     global human resource strategies.  From 1999 to 2004 Christine was Director of HR with Restaurant Brands NZ, the franchisor for high profile fast food brands
                     that included KFC, Pizza Hut and Starbucks.
                  </p>

                  <p>Christine trained as an Accountant and continued her professional development with a range of post graduate qualifications in HR Management,
                     Leadership and Quality Management.  Christine is a Governor of the St. George Foundation, a not for profit organisation that helps disadvantaged children and a
                     Director of Women’s Community Shelters, that provide emergency shelter and support for homeless women.
                  </p>
               </div>

              </div>
          </div>
        </section>
      </div>
    );
  }
}
