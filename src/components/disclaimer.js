import React from "react";
import { HashLink as Link } from "react-router-hash-link";

export default class Disclaimer extends React.Component {

    render() {
        return (
            <div>
             <section>
          <div id="content" className="body-content container no-border" tabIndex="-1" autoFocus>
            <div className="row">
              <div className="col-md-10" id="mainCol">
              <h1>Disclaimer</h1>
                <p>The information on this website is presented by the Department of Veterans’ Affairs for the purpose of informing the public.</p>
                <p>The Department reviews the information available on this website and updates the information as required.  However, the Department does not guarantee, and accepts no legal liability for, the accuracy, reliability, currency or completeness of any material contained on this website or on any linked site.</p>
                <p>The Department recommends that users exercise their own skill and care with respect to their use of this website and that users carefully evaluate the accuracy, currency, completeness and relevance of the material on the website for their purposes.</p>
                <p>This website is not a substitute for independent professional advice and users should obtain any appropriate professional advice relevant to their particular circumstances.</p>
                <p>Links to other sites are inserted for convenience and do not constitute endorsement or recommendation of material at those sites, or any associated organisation, product or service.</p>
                <p>The material on this website may include the views or advice of third parties.  These views do not necessarily reflect the views of the Department or the Commonwealth, or the Department’s commitment to a particular course of action.  The Department accepts no legal liability for the accuracy, reliability, currency or completeness of any third party information.</p>
                <p>The Department accepts no responsibility for any interference, loss, damage or disruption to your own computer system which arises in connection with your use of this website or any linked site.  You must take your own precautions to ensure that the process you employ to obtain access to this website does not expose you to the risk of viruses, malicious computer code or other forms of interference which may damage your computer system.</p>
               <p><Link to="/contact#top">Contact us</Link> if you have any concerns about the information contained on this website. </p>
           </div>
            </div>
             </div>
             </section>
             </div>
        );
    }
}
