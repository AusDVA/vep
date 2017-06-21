import React from 'react';
import GeneralResourses from "./partials/generalResources";
import Guide from "../doc/Guide - How to list a Defence Force Experience Desirable vacancy on jobactive.pdf";
export default class Employers extends React.Component {

  render() {
    return (
      <div>
        <section>
          <div className="body-content container">
            <div className="row">
              <div className="col-md-10" id="mainCol">

              <h1> Employers </h1>

            <div className="list-contents-wrapper">
              <h2 className="list-contents-header"> Contents </h2>
              <ul className="list-contents" id="sidebar">             
                  <li><a href="#Benefits">Benefits of employing veterans</a></li>
                  <li><a href="#Industry">Industry Advisory Committee on Veterans’ Employment</a></li>
                  <li><a href="#ExService">Ex-service Organisation Industry Partnership Register</a></li>
                  <li><a href="#Department">Department of Employment initiatives</a></li>
                  <li><a href="#PrimeMinister">Prime Minister’s Veterans’ Employment Annual Awards</a></li>
                  <li><a href="#EmployerResources">Resources for employers</a></li>
                </ul>
               </div>

                <p>
                   Despite the heavy investment in our former servicemen and women, too often they are finding it difficult to get a job when they leave the Australian Defence Force (ADF).
                   This demonstrates that Australian businesses are not fully recognising the value that veterans can bring to their business, and they are missing out on hiring these
                   skilled and capable individuals to fill their vacancies.
                </p>
                <p>The Prime Minister's Veterans' Employment Program aims to promote awareness of the benefits of employing veterans, to ensure that Australian businesses can reap the benefits of their ADF service.</p>


                <h2 id="Benefits">Benefits of employing veterans</h2>

                <p>Members of the ADF gain an extensive range of skills, abilities, recognised behaviours and attributes that make them valuable employees in the civilian workforce.
                   They are good at solving problems, leading teams, and working under pressure.  They retain core ADF values such as honesty, honour, initiative, integrity, respect and loyalty.
                   These attributes make them valuable employees in the civilian workforce.
                </p>
                <p>
                   Their talents are readily transferable to the civilian workforce and include:
                </p>
                <ul>
                  <li>learning new skills quickly</li>
                  <li>being highly motivated and punctual</li>
                  <li>communicating effectively to keep people informed</li>
                  <li>completing tasks efficiently and on time</li>
                  <li>working independently and as part of a team</li>
                  <li>demonstrating leadership but also being able to follow instructions</li>
                  <li>being well presented and courteous</li>
                  <li>working with a variety of people from different backgrounds and with varying levels of experience</li>
                </ul>
                <p>Many former ADF members will have acquired professional or trade qualifications that are recognised in the civilian workforce,
                   for example mechanics, health professionals, carpenters and drivers.
                </p>

                <h2 id="Industry">Industry Advisory Committee on Veterans’ Employment </h2>
                 <p>The <a href="/industry-advisory-committee">Industry Advisory Committee on Veterans’ Employment <span className="sr-only">Industry Advisory Committee page inside this website</span></a> has been established under the Program to develop and provide advice on practical measures
                   to embed veterans’ employment strategies into the recruitment practices of Australian businesses.
                 </p>

                 <h2 id="ExService">Ex-service Organisation Industry Partnership Register</h2>
                 <p>Employers will also benefit from the establishment of the Ex-service Organisation Industry Partnership Register. </p>
                 <p>This Register will enable ex-service organisations to register their interest in partnering with industry on projects to promote the employment of veterans.
                    Employers will be able to access this information when they are seeking a partner to assist in the creation of employment opportunities for veterans, including in regional and remote areas of the country.
                  </p>
                  <p>The Register will be launched later in 2017.</p>

                  <h2 id="Department">Department of Employment Initiatives</h2>
                  <p>Employers who are interested in hiring veterans can now indicate that defence force experience is desirable when they advertise a job on the
                     Australian Government’s <a target="_blank" href="http://www.jobactive.gov.au/">jobactive website <span className="sr-only">(this link will open in a new tab)</span></a>, by selecting the optional ‘defence force experience desirable’ flag.
                     <span className="no-wrap"> A <a href={Guide} target="_blank">guide (PDF 444 KB) <span className="sr-only">Opens a pdf file in a new tab</span></a></span> has been developed to assist employers to list vacancies using the 'defence force experience desirable' flag.
                  </p>

                  <h2 id="PrimeMinister">Prime Minister’s Veterans’ Employment Annual Awards</h2>
                  <p>The achievements of businesses in creating employment opportunities for veterans will be recognised through the Prime Minister’s Veterans’ Employment Annual Awards.</p>
                  <p>Nominations for the awards will open later in 2017.</p>


                 <h2 id="EmployerResources">Resources for employers</h2>

                 <h3>jobactive </h3>
                 <p>jobactive is the Australian Government’s way to get more Australians into work by connecting job seekers with employers. </p>
                 <p>Employers who are interested in hiring veterans can indicate that defence force experience is desirable when they advertise a job on the
                    Australian Government’s <a target="_blank" href="http://www.jobactive.gov.au/">jobactive website <span className="sr-only">(this link will open in a new tab)</span></a>, by selecting the optional ‘defence force experience desirable’ flag. Employers can also approach local jobactive,
                    Transition to Work or Disability Employment Service providers to list vacancies targeting veterans on their behalf.
                </p>
                <p> A <a href={Guide} target="_blank">guide (PDF 444 KB) <span className="sr-only">Opens a pdf file in a new tab</span></a> has been developed to assist employers to list vacancies using the ‘defence force experience desirable’ flag.</p>

                <GeneralResourses/>
                <p className="hidden-print">
                  <a href="#top">Top <span className="glyphicon glyphicon-arrow-up" aria-hidden="true"></span></a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
