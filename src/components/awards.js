import React from "react";
import ImgRecruitmentOfVeterans from "../image/social_media/leadership in recruitment of veterans.jpg";
import ImgEmployeeOfTheYear from "../image/social_media/veteran employee of the year.jpg";
import ImgLargeBusiness from "../image/social_media/veterans employer of the year large business.jpg";
import ImgSmallToMediumBusiness from "../image/social_media/veterans employer of the year small to medium business.jpg";
import ImgPublicSectorOrg from "../image/social_media/veterans employer of the year public sector organisation.jpg";
import ImgSupportingVeteransEmployment from "../image/social_media/excellence in supporting veterans employment.jpg";
import ImgSupportingSpouseEmployment from "../image/social_media/excellence in supporting spouse employment.jpg";
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
                     <li><Link to="#Resources">Resources</Link></li>
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

                   <p>Hints for addressing nomination criteria relating to categories recognising organisations can be accessed <a href={process.env.PUBLIC_URL + '/doc/Hints for addressing criteria - Organisations.pdf'} target="_blank">here (PDF 2 MB)<span className="sr-only">Opens a pdf file in a new tab</span></a>.</p>
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
                    <h3>Recruitment, Specialist and Not-for-profit Organisations</h3>

                    <p>Hints for addressing criteria relating to the category recognising recruitment, specialist and not-for-profit organisations can be accessed <a href={process.env.PUBLIC_URL + '/doc/Hints for addressing criteria - Recruitment_Specialist_Not-for-profit.pdf'} target="_blank">here (PDF 377 KB)<span className="sr-only">Opens a pdf file in a new tab</span></a>.</p>
                    <p>Excellence in Supporting Veterans’ Employment </p>
                    <ul>
                      <li>Demonstrated excellence in support provided and outcomes achieved.</li>
                      <li>Evidence of client (veteran) satisfaction with service.</li>
                    </ul>

                    </section>

                    <section className="section-nobreak">
                     <h3>Individuals</h3>

                     <p>Hints for addressing nomination criteria for the category recognising individuals can be accessed <a href={process.env.PUBLIC_URL + '/doc/Hints for addressing criteria - Individuals.pdf'} target="_blank">here (PDF 510 KB)<span className="sr-only">Opens a pdf file in a new tab</span></a>.</p>
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

                        <h2 id="Resources">Resources</h2>
                        <h3>Social media tiles</h3>
                        <div className="row">
                          <figure className="col-md-4 col-sm-4 col-xs-12 text-center">
                             <img src={ImgRecruitmentOfVeterans} alt="Leadership in the Recruitment of Veterans" height="100px" width="225px"></img>
                             <figcaption className="bio-position">Leadership in the Recruitment of Veterans | <a href={process.env.PUBLIC_URL + '/doc/leadership in recruitment of veterans.jpg'} download="leadership in recruitment of veterans.jpg" target="_blank">Download (260 KB)<span className="sr-only">Opens a jpg file in a new tab</span></a></figcaption>
                          </figure>
                          <figure className="col-md-4 col-sm-4 col-xs-12 text-center">
                            <img src={ImgEmployeeOfTheYear} alt="Veteran Employee of the Year" height="100px" width="225px"></img>
                            <figcaption className="bio-position">Veteran Employee of the Year | <a href={process.env.PUBLIC_URL + '/doc/veteran employee of the year.jpg'} download="veteran employee of the year.jpg" target="_blank">Download (257 KB)<span className="sr-only">Opens a jpg file in a new tab</span></a></figcaption>
                          </figure>
                          <figure className="col-md-4 col-sm-4 col-xs-12 text-center">
                            <img src={ImgLargeBusiness} alt="Veterans’ Employer of the Year – Large Business" height="100px" width="225px"></img>
                            <figcaption className="bio-position">Veterans’ Employer of the Year – Large Business | <a href={process.env.PUBLIC_URL + '/doc/veterans employer of the year large business.jpg'} download="veterans employer of the year large business.jpg" target="_blank">Download (259 KB)<span className="sr-only">Opens a jpg file in a new tab</span></a></figcaption>
                          </figure>
                        </div>

                        <div className="row">
                          <figure className="col-md-4 col-sm-4 col-xs-12 text-center">
                              <img src={ImgSmallToMediumBusiness} alt="Veterans’ Employer of the Year – Small to Medium Sized Business" height="100px" width="225px"></img>
                               <figcaption className="bio-position">Veterans’ Employer of the Year – Small to Medium Sized Business | <a href={process.env.PUBLIC_URL + '/doc/veterans employer of the year small to medium business.jpg'} download="veterans employer of the year small to medium business.jpg" target="_blank">Download (262 KB)<span className="sr-only">Opens a jpg file in a new tab</span></a></figcaption>
                          </figure>
                          <figure className="col-md-4 col-sm-4 col-xs-12 text-center">
                            <img src={ImgPublicSectorOrg} alt="Veterans’ Employer of the Year – Public Sector Organisation" height="100px" width="225px"></img>
                            <figcaption className="bio-position">Veterans’ Employer of the Year – Public Sector Organisation | <a href={process.env.PUBLIC_URL + '/doc/veterans employer of the year public sector organisation.jpg'} download="veterans employer of the year public sector organisation.jpg" target="_blank">Download (261 KB)<span className="sr-only">Opens a jpg file in a new tab</span></a></figcaption>
                          </figure>
                          <figure className="col-md-4 col-sm-4 col-xs-12 text-center">
                            <img src={ImgSupportingVeteransEmployment} alt="Excellence in Supporting Veterans’ Employment" height="100px" width="225px"></img>
                            <figcaption className="bio-position">Excellence in Supporting Veterans’ Employment | <a href={process.env.PUBLIC_URL + '/doc/excellence in supporting veterans employment.jpg'} download="excellence in supporting veterans employment.jpg" target="_blank">Download (258 KB)<span className="sr-only">Opens a jpg file in a new tab</span></a></figcaption>
                          </figure>
                        </div>

                        <div className="row">
                          <figure className="col-md-4 col-sm-4 col-xs-12 text-center">
                            <img src={ImgSupportingSpouseEmployment} alt="Excellence in Supporting Spouse Employment" height="100px" width="225px"></img>
                            <figcaption className="bio-position">Excellence in Supporting Spouse Employment | <a href={process.env.PUBLIC_URL + '/doc/excellence in supporting spouse employment.jpg'} download="excellence in supporting spouse employment.jpg" target="_blank">Download (261 KB)<span className="sr-only">Opens a jpg file in a new tab</span></a></figcaption>
                          </figure>
                        </div>

                        <h3>Sample newsletter content</h3>
                        <h3><center>Know an outstanding business that employs veterans?<br/>
                             Nominate them for a Prime Minister’s Veterans’ Employment Award</center> </h3>

                        <p>Men and women of the Australian Defence Force (ADF) are highly trained, diligent, professional and adaptable.  These skills, abilities and behaviours
                         make them valuable employees in business. Are you an organisation who has given yourself a competitive edge by hiring veterans? Or, are you a veteran or
                         an ADF spouse who feels supported by your employer in the workplace? Nominate now for a Prime Minister’s Veterans’ Employment Award. </p>

                        <p>In September 2017, the Prime Minister and the Minister for Veterans’ Affairs opened nominations for the inaugural Prime Minister’s Veterans’ Employment Awards.
                         The awards recognise and celebrate Australian businesses that support and employ veterans and ADF spouses, as well as veterans who are making a significant
                         contribution to their workplace. </p>

                        <p>Each year, around 5,200 people will leave the ADF and the Government’s aim is to ensure our ADF members can transition to civilian life effectively and smoothly and find meaningful employment. </p>

                        <p>The awards are part of the Prime Minister’s Veterans’ Employment Program which was launched last year to help recognise the extensive talents of our veterans and
                         to encourage the private sector to take advantage of that expertise. </p>

                         <p>The award categories open for nominations are: </p>
                          <ul>
                            <li>Leadership in Recruitment of Veterans</li>
                            <li>Veteran Employee of the Year</li>
                            <li>Veterans’ Employer of the Year – Large Business</li>
                            <li>Veterans’ Employer of the Year – Small to Medium-Sized Business</li>
                            <li>Veterans’ Employer of the Year – Public Sector Organisation</li>
                            <li>Excellence in Supporting Veterans’ Employment</li>
                            <li>Excellence in Supporting Spouse Employment</li>
                          </ul>

                          <p>To nominate an employer, your own organisation or a veteran employee for an award, visit <a target="_blank" href="https://veteransemployment.gov.au/awards">www.veteransemployment.gov.au/awards<span className="sr-only">(this link will open in a new tab)</span></a>.
                           Nominations close at midnight on Friday 22 December 2017.</p>

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
