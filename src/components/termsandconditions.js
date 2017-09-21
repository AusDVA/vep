import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import TopLink from "./partials/topLink";

export default class TermsAndConditions extends React.Component {

  constructor(props) {
   super(props);
   this.focus = this.focus.bind(this);
 }

 focus() {
   this.refs.mainContent.focus();
 }

 componentDidMount() {
  this.focus();
 }

    render() {
        return (
            <div>

                <div id="content" className="body-content container no-border" tabIndex="-1" autoFocus>
                    <div className="row">
                    <ol ref="mainContent" tabIndex="-1" className="breadcrumb hidden-print no-border">
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/awards#top">Awards</Link></li>
                      <li className="active">Terms and Conditions</li>
                    </ol>
                      <div className="col-md-10" id="mainCol">

                          <h1 className="heading">Prime Minister’s Veterans’ Employment Awards Terms and Conditions</h1>



                        <p>To be eligible to submit a nomination for an Award in one of the Prime Minister’s Veterans’ Employment Awards categories, applicants must agree to the
                        following terms and conditions. Where applicable, they must also meet the specified eligibility requirements.</p>
                        <p>The Prime Minister’s Veterans’ Employment Awards are administered by the Department of Veterans’ Affairs (DVA).</p>

                        <h2>Awards Categories</h2>
                        <p>Nominations will be accepted for the following Prime Minister’s Veterans’ Employment Awards categories:</p>
                        <ol>
                        <li>Leadership in Recruitment of Veterans</li>
                        <li>Veteran Employee of the Year</li>
                        <li>Veterans’ Employer of the Year – Large Business</li>
                        <li>Veterans’ Employer of the Year – Small to Medium Sized Business</li>
                        <li>Veterans’ Employer of the Year – Public Sector Organisation</li>
                        <li>Excellence in Supporting Veterans’ Employment</li>
                        <li>Excellence in Supporting Spouse Employment</li>
                        </ol>

                        <p>Further details on categories, eligibility requirements and criteria are on the <Link to="/awards#top">Awards page.<span className="sr-only">(Awards page inside this website)</span></Link></p>

                        <h2>Applications must be submitted</h2>
                        <ul>
                         <li>from <span className="no-wrap">6 September 2017</span> until midnight <span className="no-wrap">22 December 2017</span></li>
                         <li>by the nominee’s employer for the Veteran Employee of the Year category</li>
                        </ul>

                        <h2>Applicants can only nominate</h2>
                        <ul>
                         <li>if the nominee is an individual, an Australian citizen or a permanent resident of Australia who is 18 years of age or over</li>
                         <li>if the nominee is an organisation, the organisation must be registered in Australia, and have an Australian Business Number</li>
                         <li>the same nominee once in each category</li>
                        </ul>

                        <h2>Applicants must</h2>
                        <ul>
                         <li>advise the nominee that they have been nominated</li>
                         <li>seek the nominee’s agreement that, if they are selected as a finalist:</li>
                           <ul>
                            <li>they or their nominated representative will take all reasonable steps to make themselves available for the event held to present the Awards</li>
                            <li>they may be required to actively participate in presentations and media interviews</li>
                           </ul>
                         <li>note that DVA and/or the judging panel/s may request additional information or clarification in support of a nomination and, if so requested, such information or clarification must be provided within the specified timeframe</li>
                        </ul>

                        <h2>All applications must </h2>
                        <ul>
                         <li>be submitted online, along with any supporting evidence, at <a target="_blank" href="https://veteransemployment.awardsplatform.com/">veteransemployment.awardsplatform.com<span className="sr-only">(this link will open in a new tab)</span></a></li>
                         <li>meet the specific eligibility requirements for the relevant award category</li>
                         <li>address the relevant award category criteria, otherwise the nomination will not be considered</li>
                         <li>be factually correct</li>
                         <li>not exceed the relevant word or file limits</li>
                        </ul>

                        <h2>All applicants agree that</h2>
                        <ul>
                         <li>any potential or actual conflict of interest must be declared, including, but not limited to, the existence and nature of any relationship with:</li>
                           <ul>
                            <li>the Prime Minister and his staff</li>
                            <li>any staff of the Department of the Prime Minister and Cabinet </li>
                            <li>the Minister for Veterans’ Affairs and his staff </li>
                            <li>any staff of the Department of Veterans’ Affairs </li>
                            <li>any company sponsoring the Awards</li>
                            <li>any judge involved in the Awards</li>
                           </ul>
                         <li>the judging panel/s reserve the right to move nominations into alternate categories where appropriate, or not to allocate an award in a
                             particular category where, in its opinion, there are no nominations of sufficient merit, and in such cases applicants will be advised accordingly</li>
                         <li>the decisions of the judging panel/s are final and no correspondence will be entered into </li>
                         <li>in the event that a nominee that has won an award category but has not complied with the terms and conditions of the Prime Minister’s Veterans’ Employment Awards, the
                             judging panel/s may decide that: </li>
                             <ul>
                              <li>the nominee shall not be entitled to the relevant award; </li>
                              <li>the relevant award may be provided to another nominee; and/or </li>
                              <li>the relevant award may not be allocated</li>
                             </ul>
                        <li>in the event that an applicant or nominee is involved in conduct or activity (including of a personal or business nature) that is illegal, fraudulent
                            or causes harm, or the judging panel/s are of the view that there is the potential to cause harm or reputational damage, to
                            the Australian Government, the judging panel/s, or Award sponsors, a nomination may not be considered or an award received by a nominee may be withdrawn </li>
                        <li>there will be no cash prizes or gift vouchers provided to Award winners </li>
                        <li>in submitting the application, the applicant warrants that they own the material included in their application (including any supporting evidence) and agrees to provide
                            a licence to the judging panel/s and the Australian Government to use that information for the purposes of the Prime Minister’s Veterans’ Employment Awards and the Prime Minister’s Veterans’ Employment Program </li>
                        <li>in submitting the application, the applicant gives DVA permission to publish details of the nomination (such as but not limited to biographies and photographs), for the purposes of promoting the Prime Minister’s Veterans’ Employment
                            Awards and the Prime Minister’s Veterans’ Employment Program including publication on
                            the <Link to="/#top">Prime Minister’s Veterans’ Employment Program website<span className="sr-only">( Home page inside this website)</span></Link>,
                            the <a target="_blank" href="https://www.dva.gov.au">DVA website<span className="sr-only">(this link will open in a new tab)</span></a>, DVA social media channels and in other
                            promotional materials and media </li>
                        <li>if an applicant nominates an individual or another organisation for an award, the nominee (or their nominated representative if applicable) will be requested to provide
                            DVA with permission to publish details of the nomination (such as but not limited to biographies and photographs), for the purpose of promoting the Awards, and the Prime Minister’s Veterans’ Employment Program
                            including publication on the <Link to="/#top">Prime Minister’s Veterans’ Employment Program website<span className="sr-only">( Home page inside this website)</span></Link>,
                            the <a target="_blank" href="https://www.dva.gov.au">DVA website<span className="sr-only">(this link will open in a new tab)</span></a>, DVA social media channels and in other promotional materials and media </li>
                        </ul>

                        <h2>Privacy</h2>
                        <ul>
                         <li>The information provided on the nomination form is collected by DVA and may be made available to the judging panel/s (and other contracted service providers), the Australian Government, and the Industry Advisory Committee on Veterans' Employment solely for the purposes of the Awards and the Prime Minister's Veterans' Employment Program</li>
                         <li>All information provided with an application will be managed in accordance with DVA’s Privacy Policy. The DVA <a target="_blank" href="https://www.dva.gov.au/site-information/privacy">Privacy Policy<span className="sr-only">(this link will open in a new tab)</span></a> contains
                             information about the way DVA collects and uses personal information and the purposes for which it is held.
                             It also contains information about how you can correct any personal information which you believe is incorrect,
                             and how to make a complaint if you believe that your privacy has been breached</li>
                        </ul>

                        <TopLink/>
                      </div>
                     </div>
                 </div>

            </div>
        );
    }
}
