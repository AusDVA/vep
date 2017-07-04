import React from "react";
import { HashLink as Link } from "react-router-hash-link";

export default class Accessibility extends React.Component {

    render() {
        return (
            <div>
            <section>
                <div id="content" className="body-content container no-border" tabIndex="-1" autoFocus>
                    <div className="row">
                      <div className="col-md-10" id="mainCol">
                        <h1>Accessibility</h1>
                            <p>The Department of Veterans’ Affairs (DVA) has made every effort to make this website accessible and easy to use.</p>
                            <p>This website aims to meet the Australian Government’s web accessibility requirements, including meeting the World Wide
                               Web Consortium’s <a target="_blank" href="http://www.w3.org/TR/WCAG20/">Web Content Accessibility Guidelines version 2.0 (WCAG 2.0)
                               <span className="sr-only">(this link will open in a new tab)</span></a> at level AA.</p>
                            <p>Maintaining an accessible site and providing our information to all users, including those with a disability, is important to DVA.  If you experience
                               any problems accessing content, please <Link to="/contact#top">contact DVA</Link>.</p>
                         </div>
                     </div>
                 </div>
             </section>
            </div>
        );
    }
}
