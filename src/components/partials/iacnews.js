import React from "react";
import { HashLink as Link } from "react-router-hash-link";


export default class IACNews extends React.Component {
  constructor(props) {
   super(props);
   this.focus = this.focus.bind(this);
 }

 focus() {
   this.refs.iacNews.focus();
 }

 componentDidMount() {
    const LOCATION = (location.search);

    if (LOCATION == "?newsFocus=true") {
      this.focus();
    }
  }

  render() {
    return (
        <div id="News" className="no-border" autoFocus tabIndex="-1" ref="iacNews">
  <h2>Latest News</h2>
    <p>The Industry Advisory Committee on Veterans’ Employment met on <span className="no-wrap">4 August 2017.</span> Five working
        groups, established by the Committee to focus on priority areas, presented updates and recommendations for the Committee’s program
        of work going forward.  This will inform the Committee’s report to the Minister for Veterans’ Affairs by the end of September. </p>
    <p>The Committee was also updated on the work being done by McKinsey & Company for a group of employers assembled by <span className="no-wrap">JP Morgan</span> last year.  This work
       will provide vital evidence and recommendations that will inform the Committee’s work.</p>
    <p>A representative of Townsville Enterprise also provided the Committee with information on Townsville’s employment situation and outlook.  Townsville
       has close ties with the Australian Defence Force and an interest in the work of the Committee.</p>
    <p>The Committee will next meet to finalise its report to the Minister.</p>

      <p><Link to="/news-archive#top">Industry Advisory Committee News Archive</Link></p>
   </div>
    );
  }
}
