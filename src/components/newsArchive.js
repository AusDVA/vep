import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import TopLink from "./partials/topLink";

class BackLink extends React.Component {

  render() {
    return (
      <p className="hidden-print">
        <span className="glyphicon glyphicon-arrow-left" aria-hidden="true"></span>
        <Link to="/industry-advisory-committee?newsFocus=true#News"> Back to Industry Advisory Committee</Link>
      </p>
    );
  }
}

export default class NewsArchive extends React.Component {

  render() {
    return (

      <div>
          <div id="content" className="body-content container no-border" tabIndex="-1" autoFocus>
            <div className="row">
                 <ol className="breadcrumb hidden-print">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/industry-advisory-committee#News">Industry Advisory Committee</Link></li>
                        <li className="active">Industry Advisory Committee News Archive</li>
                  </ol>
              <div className="col-md-10" id="mainCol">

                  <h1>Industry Advisory Committee News Archive</h1>

              <div className="list-contents-wrapper">
                <h2 className="list-contents-header">Contents</h2>
                <ul className="list-contents">
                  <li><Link to="#June-2017">June 2017</Link></li>
                  <li><Link to="#March-2017">March 2017</Link></li>
                </ul>
              </div>

              <section className="section-nobreak">

                <h2 id="June-2017">Industry Advisory Committee meets for the second time</h2>
                  <p>The Industry Advisory Committee on Veterans’ Employment met for the second time on <span className="no-wrap">16 June 2017.</span> The
                    Committee heard updates on the work being undertaken across the eight priority areas it had identified at its inaugural meeting on <span className="no-wrap">31 March 2017.</span></p>
                  <p>The Committee noted progress on data collection and developing the business case for employing veterans.  Several working
                    groups have recommended the establishment of an accreditation process for employers and identified the need to facilitate contact
                    between potential employers and transitioning and former ADF members.  The Committee also discussed the importance of improving employment
                    opportunities for spouses of serving members and planning for the Prime Minister’s Veterans’ Employment Annual Awards.</p>
                  <p>The Committee acknowledged that there were overlaps in the eight focus areas and agreed to combine work into five priority areas:</p>
                    <ul>
                      <li>data, research and targets</li>
                      <li>human resources policies, accreditation, retention, translation of skills</li>
                      <li>communications (branding, awareness, transition seminars, website, job fairs)</li>
                      <li>spouse employment of serving ADF members</li>
                      <li>Prime Minister’s Veterans’ Employment Annual Awards</li>
                    </ul>
                    <p>The Committee was also provided with a demonstration of the Veterans’ Employment Program’s website. This website
                      will provide information about the Program, deliver the Ex-service Organisation Industry Partnership Register and support the Annual Awards.</p>

                </section>
              <BackLink />

                <section className="section-nobreak">

                  <h2 id="March-2017">Industry Advisory Committee's inaugural meeting</h2>
                    <p>The Industry Advisory Committee on Veterans' Employment held its inaugural meeting in Sydney on <span className="no-wrap">31 March 2017.</span></p>
                    <p>At the meeting, the Committee focused on establishing a number of priority areas of focus. These areas include the availability
                       of data on the employment profile of veterans, improving the transition process from the ADF, translating skills and raising awareness
                       of the value that former members of the ADF offer to Australian businesses.</p>
                    <p>The Committee will form Working Groups to progress its work, and will look to involve other businesses that have expressed interest in the Program.</p>
                    <p>The next meeting of the Committee will be held in mid-June.</p>

                 </section>
              <BackLink />

             <p className="break"></p>
             <TopLink/>
              </div>
            </div>
          </div>



      </div>
    );
  }
}
