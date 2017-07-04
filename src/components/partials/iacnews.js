import React from "react";
import { HashLink as Link } from "react-router-hash-link";

export default class IACNews extends React.Component {

  render() {
    return (
        <div id="News">
  <h2>Latest News</h2>
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
      <p><Link to="/news-archive">Industry Advisory Committee News Archive</Link></p>
   </div>
    );
  }
}
