import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import TopLink from "./partials/topLink";

export default class FAQs extends React.Component {

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
                           <li className="active">Frequently asked questions</li>
                     </ol>
                      <div className="col-md-10" id="mainCol">
                        <h1>Prime Minister’s Veterans’ Employment Awards Frequently asked questions</h1>

                        <h2>Do I have to pay a fee to make a nomination?</h2>
                        <p>No.  There is no fee payable to submit a nomination.</p>

                        <h2>Who can submit a nomination?</h2>
                        <p>Each award category has specific eligibility criteria that differ across the categories.</p>

                        <h2>When do nominations open and close?</h2>
                        <p>Nominations opened on <span className="no-wrap">6 September 2017</span> and will close at midnight on Friday <span className="no-wrap">22 December 2017</span>.</p>
                        <p>Late nominations will not be accepted.</p>

                        <h2>How do I submit a nomination?</h2>
                        <p>All nominations and relevant supporting evidence must be submitted online at <a target="_blank" href="https://veteransemployment.awardsplatform.com/">veteransemployment.awardsplatform.com<span className="sr-only">(this link will open in a new tab)</span></a>.</p>
                        <p>You can amend and submit your nomination at any time until the closure of the nomination period.  However, the nomination must be submitted before midnight <span classname="no-wrap">22 December 2017</span> to be considered.  You will be reminded before nominations close if it has not been submitted.</p>
                        <p>Nominations must address the relevant award category criteria. </p>

                        <h2>Do I have to nominate online, or can I submit a hard copy nomination?</h2>
                        <p>Nominations will only be accepted when they are submitted online through the <a target="_blank" href="https://veteransemployment.awardsplatform.com/">Awards platform<span className="sr-only">(this link will open in a new tab)</span></a>.</p>

                        <h2>How many times can I nominate?</h2>
                        <p>You can nominate more than one individual or organisation in each category.  However, you can only nominate the same individual or organisation once in each category.</p>
                        <p>You can also nominate an organisation in more than one category providing they meet the relevant eligibility criteria for those categories.</p>

                        <h2>Can I nominate my organisation?</h2>
                        <p>You can nominate your organisation for an award in one or more categories, providing your organisation meets the eligibility criteria for that category.</p>

                        <h2>Can I nominate my organisation as well as nominate another organisation in the same award category?</h2>
                        <p>You can nominate your organisation and nominate another organisation in the same award category, providing both organisations meet the relevant eligibility criteria.</p>

                        <h2>Can an individual self-nominate?</h2>
                        <p>Individuals are unable to nominate themselves in any of the award categories.  The only category where nominees can be individuals requires that the nomination be submitted by their employer.</p>

                        <h2>If multiple organisations are responsible for co-designing or developing a policy, strategy or initiative that supports and/or creates employment for veterans or military spouses, who should submit the nomination?</h2>
                        <p>Where multiple organisations have been involved in developing a policy, strategy or initiative that supports and/or creates veteran or spouse employment, a lead individual or organisation should submit the nomination on behalf of all parties.</p>

                        <h2>What are the judging panel/s looking for in a nomination?</h2>
                        <p>Judging panel/s are looking for nominations that directly address the category criteria. Remember that judges may have a lot of nominations to consider so you should ensure that all information provided in your nomination, including supporting evidence, is clear, concise and relevant.</p>

                        <h2>What evidence can I provide in support of my nomination?</h2>
                        <p>Any evidence can be submitted with a nomination, providing it supports and/or is relevant.  This may include (but is not limited to):</p>
                        <ul>
                         <li>Word or PDF documents containing policies, statistical and other relevant information</li>
                         <li>excerpts from testimonials, references, performance appraisals or surveys which include positive feedback relating to the individual and/or organisation’s achievement or initiative</li>
                         <li>images</li>
                         <li>videos</li>
                         <li>website URLs (and a digital copy of the website content as sometimes links are no longer current at the time of assessment)</li>
                         <li>copies of newspaper articles</li>
                         <li>financial or business metrics</li>
                         <li>annual reports</li>
                        </ul>
                        <p>Any supporting evidence should be specifically referenced in the nomination.
                           For example, page numbers and paragraphs of Word or PDF documents that relate to an achievement or initiative should be referenced if more than one page of supporting evidence is submitted.</p>

                        <h2>What happens if I forget to include something in my nomination after I submit it online?</h2>
                        <p>You can come back and add or change anything in your nomination prior to the closing date of <span className="no-wrap">22 December 2017.</span> This
                           can be done by accessing your nomination at <a target="_blank" href="https://veteransemployment.awardsplatform.com/">veteransemployment.awardsplatform.com<span className="sr-only">(this link will open in a new tab)</span></a>.</p>

                        <h2>What does the judging process involve?</h2>
                        <p>Nominations will be reviewed by the Department of Veterans’ Affairs to ensure that they meet the eligibility criteria for the category and for completeness.</p>
                        <p>Judging panel/s will then assess each nomination, any supporting evidence against the relevant criteria.</p>

                        <h2>Who are the judges?</h2>
                        <p>Judging panel/s will be comprised of judges who are independent and impartial.</p>

                        <h2>Will I find out about the outcome of my nomination?</h2>
                        <p>You will be notified of the outcome of your nomination via the email address that you provided on the <a target="_blank" href="https://veteransemployment.awardsplatform.com/">Prime Minister's Veterans' Employment Awards platform<span className="sr-only">(this link will open in a new tab)</span></a>.</p>
                        <p>Finalists will be contacted and advised that they have been selected as a finalist and to organise travel to the event.</p>

                        <h2>Can I get feedback on my nomination if I am unsuccessful?</h2>
                        <p>Whilst the judging panel/s’ decisions will be final, you may be able to obtain feedback on the reasons why your nomination was unsuccessful. </p>

                        <h2>How can I find out who the Award finalists and winners are?</h2>
                        <p>You can visit the Awards section of the <Link to="/#top">Prime Minister’s Veterans’ Employment Program website<span className="sr-only">( Home page inside this website)</span></Link> to view Award finalists and winners.</p>

                        <h2>When will the Awards event be held?</h2>
                        <p>The Awards event is expected to be held in early 2018, but the final date is yet to be confirmed.</p>

                        <h2>Are there prizes?</h2>
                        <p>Winners of the Prime Minister’s Veterans’ Employment Awards will be presented with a trophy. </p>
                        <p>No cash prizes or gift certificates will be provided to Award finalists or winners.</p>

                        <h2>Who can I contact if I have any other questions?</h2>
                        <p>You can email the Department of Veterans’ Affairs at <a href="mailto:veteransemployment@dva.gov.au">veteransemployment@dva.gov.au</a>.</p>

                        <TopLink/>
                      </div>
                     </div>
                 </div>

            </div>
        );
    }
}
