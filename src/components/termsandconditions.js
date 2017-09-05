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
            <section>
                <div ref="mainContent" id="content" className="body-content container no-border" tabIndex="-1" autoFocus>
                    <div className="row">
                      <div className="col-md-10" id="mainCol">
                        <h1>Prime Minister’s Veterans’ Employment Awards - Terms and Conditions</h1>

                        <p>To be eligible to submit a nomination for an Award in one of the Prime Minister’s Veterans’ Employment Awards categories, applicants must agree to the
                        following terms and conditions. Where applicable, they must also meet the specified eligibility requirements.</p>
                        <p>The Prime Minister’s Veterans’ Employment Awards are administered by the Department of Veterans’ Affairs (DVA).</p>

                        <h2>Awards Categories</h2>
                        <p>Categories for the Prime Minister’s Veterans’ Employment Awards are:</p>
                        <p>1.	Leadership in Recruitment of Veterans</p>
                        <p>2.	Veteran Employee of the Year</p>
                        <p>3.	Veterans’ Employer of the Year – Large Business</p>
                        <p>4.	Veterans’ Employer of the Year – Small to Medium Sized Business</p>
                        <p>5.	Veterans’ Employer of the Year – Public Sector Organisation</p>
                        <p>6.	Excellence in Supporting Veterans’ Employment</p>
                        <p>7.	Excellence in Supporting Spouse Employment</p>

                        <p>Further details on Award categories, eligibility requirements and criteria are at <Link to="/awards#top">awards page.<span className="sr-only">(Awards page inside this website)</span></Link></p>

                        <h2>Applications must be submitted</h2>
                        <ul>
                         <li>from 6 September 2017 until midnight 22 December 2017</li>
                         <li>by the nominees’ employer for the Veterans Employee of the Year category</li>
                        </ul>

                        <h2>Applicants can only nominate</h2>
                        <ul>
                         <li>if the nominee is an individual, an Australian citizen or a permanent resident of Australia who is 18 years of age or over</li>
                         <li>if the nominee is an organisation, the organisation must be registered in Australia, with an Australian Business Number</li>
                         <li>the same nominee once in each applicable award category</li>
                        </ul>

                        <h2>Applicants must</h2>
                        <ul>
                         <li>advise the nominee that they have been nominated</li>
                         <li>seek the nominees’ agreement that, if they are selected as a finalist:</li>
                           <ul>
                            <li>they or their nominated representatives will take all reasonable steps to make themselves available for the event </li>
                            <li>they may be required to actively participate in presentations and media interviews </li>
                           </ul>
                         <li>note that DVA and/or the judging panels may request additional information or clarification in support of a nomination and, if so requested, such information or clarification must be provided within the specified timeframe</li>
                        </ul>

                        <TopLink/>
                      </div>
                     </div>
                 </div>
             </section>
            </div>
        );
    }
}
