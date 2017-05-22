import React from 'react';
export default class Employers extends React.Component {

  render() {
    return (
      <div>
        <header className="page-header" id="top">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <span>
                  <h3>Prime Minister’s Veterans’ Employment Program</h3>
                </span>
                <h1 id="content">Employers</h1>
              </div>
            </div>
          </div>
        </header>
        <section>
          <div className="body-content container">
            <div className="row">
              <div className="col-md-7" id="mainCol">

                <h2>Benefits of employing veterans</h2>

                <p>Members of the Australian Defence Force (ADF) gain an extensive range of skills, abilities, recognised behaviours and attributes
                   that make them valuable employees in the civilian workforce. Skills such as problem-solving, leadership, team work and the ability to
                   work in high-pressure environments are just a few. Many former members continue to live by core ADF values such as honesty, honour, initiative,
                   integrity, respect and loyalty. These attributes make them valuable   employees in the civilian workforce.
                   Their talents are easily transferable to civilian life and include:
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

                <h2>Advertising jobs to our veterans</h2>

                <p>The Australian Government provides a free jobs board on the Jobactive website, open to all employers, to advertise their vacancies.
                   It has been enhanced to allow employers to indicate that they prefer applicants with ADF experience.
                   Veterans can access the site and search specifically for jobs with 'Defence Force Experience Desirable'.
                </p>
                <p>Employers can also approach local Jobactive, Transition to Work or Disability Employment Service providers to list vacancies aimed at veterans on their behalf.
                   Employers need to register online at jobactive.gov.au, and instructions about listing vacancies and using the 'Defence Force Experience Desirable' flag are available.
                </p>

                <p>
                  <a className="" href="#">Top <span className="glyphicon glyphicon-arrow-up" aria-hidden="true"></span></a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
