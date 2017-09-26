import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import TopLink from "./partials/topLink";
export default class Awards extends React.Component {

  render(){

    return (
      <div>
        <section>
          <div className="body-content container no-border" id="content" tabIndex="-1" autoFocus>
            <div className="row">
              <div className="col-md-10" id="mainCol">
                <h1>Prime Minister’s Veterans’ Employment Awards</h1>
                 <div className="list-contents-wrapper">
                   <h2 className="list-contents-header">Contents</h2>
                    <ul className="list-contents">
                     <li><Link to="#Apply">Apply Now</Link></li>
                     <li><Link to="#KeyDates">Key Dates</Link></li>
                     <li><Link to="#Categories">Categories</Link></li>
                     <li><Link to="#TermsConditions">Terms and Conditions</Link></li>
                     <li><Link to="#FAQ">FAQs</Link></li>
                     <li><Link to="#Contact">Contact</Link></li>
                   </ul>
                 </div>
                 <p>
                   The Prime Minister’s Veterans’ Employment Awards recognise the achievements of companies,
                   organisations and individuals in creating employment opportunities for veterans and supporting their transition into the civilian workforce.
                 </p>

                 <section id="Apply" className="section-nobreak">
                   <h2>Apply Now</h2>
                   <p>To submit a nomination, visit the <a target="_blank" href="https://veteransemployment.awardsplatform.com/">Prime Minister’s Veterans’ Employment Awards platform<span className="sr-only">(this link will open in a new tab)</span></a>.</p>
                 </section>

                 <section id="KeyDates" className="section-nobreak">
                   <h2>Key Dates</h2>
                     <ul className="list-unstyled">
                        <li>6 September 2017 – nominations open</li>
                        <li>22 December 2017 – nominations close</li>
                      </ul>
                 </section>

                 <div id="Categories">
                   <section className="section-nobreak">
                   <h2>Categories</h2>
                   <h3>Organisations</h3>


                   <p>Leadership in Recruitment of Veterans</p>
                   <ul>
                    <li>Demonstrated excellence in recruitment, hiring and onboarding veterans into their work places.</li>
                    <li>Innovative approaches to marketing and “reach out” to attract veterans to the organisation.</li>
                    <li>Influencing and advocating the recruitment of veterans by other organisations.</li>
                   </ul>

                   <p>Veterans’ Employer of the Year – Large Business</p>
                    <ul>
                      <li>Demonstrated commitment to employing veterans, as evidenced by policies that support the recruitment of veterans.  </li>
                      <li>Demonstrated excellence in the management and retention of veterans through innovative training programs, ongoing mentoring and engagement programs.</li>
                    </ul>

                    <p>Veterans’ Employer of the Year – Small to Medium Sized Business</p>
                    <ul>
                      <li>Demonstrated commitment to employing veterans, as evidenced by policies that support the recruitment of veterans.</li>
                      <li>Demonstrated excellence in the management and retention of veterans through innovative training programs, ongoing mentoring and engagement programs.</li>
                    </ul>

                    <p>Veterans’ Employer of the Year – Public Sector Organisation</p>
                    <ul>
                      <li>Demonstrated commitment to employing veterans as evidenced by the relative number of veterans in the workforce.</li>
                      <li>Demonstrated excellence in the management and retention of veterans through innovative training programs, ongoing mentoring and engagement programs.</li>
                      <li>Policies that support veterans’ employment.</li>
                    </ul>

                    <p>Excellence in Supporting Spouse Employment</p>
                    <ul>
                      <li>Demonstrated excellence in attraction, recruitment, hiring and retention of military spouses.</li>
                      <li>Demonstrated commitment in supporting military spouses’ careers through serving members’ postings, deployments etc. through policies, support services and mobility programs.</li>
                      <li>Evidence of collaboration with ADF support organisations (Defence Families Australia, Defence Community Organisation, Department of Veterans’ Affairs etc.) to develop a robust and sustainable support model for military spouses.</li>
                    </ul>

                    </section>

                    <section className="section-nobreak">
                    <h3>Recruitment, Specialist and Not-for profit Organisations</h3>

                    <p>Excellence in Supporting Veterans’ Employment </p>
                    <ul>
                      <li>Demonstrated excellence in support provided and outcomes achieved.</li>
                      <li>Evidence of client (veteran) satisfaction with service.</li>
                    </ul>

                    </section>

                    <section className="section-nobreak">
                     <h3>Individuals</h3>

                     <p>Veteran Employee of the Year</p>
                      <ul>
                        <li>Achievements within the organisation, including specific outcomes achieved.</li>
                        <li>Demonstrated evidence that the nominee’s military skills are valued and have been utilised in their current employment.</li>
                        <li>Supporting evidence from the nominee’s supervisor, management or Board of their contribution.</li>
                      </ul>


                      <h3>Other Categories</h3>
                       <p>Two Awards will be presented that are not open for nominations.</p>
                       <p>The Outstanding Contribution by an Organisation to Veterans’ Employment will recognise the standout winner from the categories listed under organisations.</p>
                       <p>The Outstanding Contribution by an Individual to Veterans’ Employment will be selected from a list compiled from suggestions invited directly from the Government, business and veteran communities.</p>


                        <h2 id="TermsConditions">Terms and Conditions</h2>
                        <p>Nominations must be made in accordance with the Prime Minister's Veterans' Employment Awards <Link to="/termsandconditions#top">Terms and Conditions<span className="sr-only">Terms and Conditions page inside this website</span></Link>.</p>

                        <h2 id="FAQ">FAQs</h2>
                        <p>Here are <Link to="/faq#top">Frequently Asked Questions<span className="sr-only">Frequently asked questions page inside this website</span></Link> on the Prime Minister's Veterans' Employment Awards.</p>

                        <h2 id="Contact">Contact</h2>
                        <p>Contact us by emailing <a href="mailto:veteransemployment@dva.gov.au">veteransemployment@dva.gov.au</a>.</p>
                      </section>
                 </div>
                  <TopLink />
              </div>
            </div>
          </div>

        </section>

      </div>
    );
  }
}
