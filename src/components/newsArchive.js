import React from "react";
import { HashLink as Link } from "react-router-hash-link";

export default class NewsArchive extends React.Component {

  render() {
    return (
      <div>
        <section>
          <div id="content" className="body-content container no-border" tabIndex="-1" autoFocus>
            <div className="row">
                 <ol className="breadcrumb hidden-print">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/industry-advisory-committee#News">Industry Advisory Committee</Link></li>
                        <li className="active">Industry Advisory Committee News Archive</li>
                    </ol>
              <div className="col-md-10" id="mainCol">

                  <h1>Industry Advisory Committee News Archive</h1>
                 
                  <h2>Industry Advisory Committee's inaugural meeting</h2>
                    <p>The Industry Advisory Committee on Veterans' Employment held its inaugural meeting in Sydney on <span className="no-wrap">31 March 2017.</span></p>
                    <p>At the meeting, the Committee focused on establishing a number of priority areas of focus. These areas include the availability
                       of data on the employment profile of veterans, improving the transition process from the ADF, translating skills and raising awareness
                       of the value that former members of the ADF offer to Australian businesses.</p>
                    <p>The Committee will form Working Groups to progress its work, and will look to involve other businesses that have expressed interest in the Program.</p>
                    <p>The next meeting of the Committee will be held in mid-June.</p>

              <p className="hidden-print">
               <span className="glyphicon glyphicon-arrow-left" aria-hidden="true"></span>
               <Link to="/industry-advisory-committee#News" tabIndex="1"> Back to Industry Advisory Committee
               </Link>
             </p>

              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
