import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import TopLink from "./partials/topLink";

export default class TermsAndConditions extends React.Component {

    render() {
        return (
            <div>
          
                <div id="content" className="body-content container no-border" tabIndex="-1" autoFocus>
                    <div className="row">
                    <ol className="breadcrumb hidden-print">
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/awards#top">Awards</Link></li>
                      <li className="active">Terms and Conditions</li>
                    </ol>
                      <div className="col-md-10" id="mainCol">
                        <h1>Prime Minister’s Veterans’ Employment Awards <br/>Terms and Conditions</h1>

                        <p>To be eligible to submit a nomination for an Award in one of the Prime Minister’s Veterans’ Employment Awards categories, applicants must agree to the
                        following terms and conditions. Where applicable, they must also meet the specified eligibility requirements.</p>
                        <p>The Prime Minister’s Veterans’ Employment Awards are administered by the Department of Veterans’ Affairs (DVA).</p>

                        <h2>Awards Categories</h2>
                        <p>Categories for the Prime Minister’s Veterans’ Employment Awards are:</p>
                        <ol>                     
                        <li>Leadership in Recruitment of Veterans</li>
                        <li>Veteran Employee of the Year</li>
                        <li>Veterans’ Employer of the Year – Large Business</li>
                        <li>Veterans’ Employer of the Year – Small to Medium Sized Business</li>
                        <li>Veterans’ Employer of the Year – Public Sector Organisation</li>
                        <li>Excellence in Supporting Veterans’ Employment</li>
                        <li>Excellence in Supporting Spouse Employment</li>
                        </ol>
                       
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

                        <h2>All applications must </h2>
                        <ul>
                         <li>be submitted online, along with any supporting evidence, at <a target="_blank" href="https://veteransemployment.awardsplatform.com/">veteransemployment.awardsplatform.com.<span className="sr-only">(this link will open in a new tab)</span></a></li>
                         <li>meet the specific eligibility requirements for the relevant award category</li>
                         <li>address the relevant award category criteria, otherwise the nomination will not be considered</li>
                         <li>be factually correct</li>
                         <li>not exceed the relevant word, page or file limits</li>
                        </ul>

                        <h2>All applicants understand and agree that</h2>
                        <ul>
                         <li>any potential or actual conflict of interest must be declared, including, but not limited to, the existence and nature of any relationship with:</li>
                           <ul>
                            <li>the Prime Minister’s staff</li>
                            <li>the Department of the Prime Minister and Cabinet </li>
                            <li>the Minister for Veterans’ Affairs </li>
                            <li>the Department of Veterans’ Affairs </li>
                            <li>an Award sponsor </li>
                            <li>an Award judge </li>
                           </ul>
                         <li>the judging panels reserve the right to move nominations into alternate categories where appropriate, or not to allocate an award in a
                             particular category where, in their opinion, there are no nominations of sufficient merit, and in such cases applicants will be advised accordingly</li>
                        </ul>

                        <TopLink/>
                      </div>
                     </div>
                 </div>
           
            </div>
        );
    }
}
