import React from "react";
import IacNews from "./iacnews";
export default class IAC extends React.Component {

  render() {
    return (
      <div>        
        <section>
          <div className="body-content container">
            <div className="row">
              <div className="col-md-8" id="mainCol">
                <h1 id="content">Industry Advisory Committee On Veterans’ Employment</h1>
                <ul className="list-unstyled">
                  <li className="list-unstyled-header">Contents</li>
                  <li><a href="#Terms">Terms of reference</a></li>
                  <li><a href="#Membership">Membership</a></li>
                  <li><a href="#Biographies">Member Biographies</a></li>
                  <li><a href="#Groups">Working groups</a></li>
                  <li><a href="#News">Latest News</a></li>
                  <li><a href="#Contact">Contact</a></li>
                  <li><a href="#Links">Useful links</a></li>
                </ul>
                <p>The Industry Advisory Committee (IAC) on Veterans’ Employment has been established to develop
                   and provide advice and practical measures to embed veterans’ employment strategies into recruitment
                   practices of Australian business.</p>
                <p>The Committee will also play a role in the broader promotion of skills and professional attributes
                   that veterans have to offer employers</p>
                <h2 id="Terms">Terms of reference</h2>
                <p>The Industry Advisory Committee will:</p>
                <ol>
                  <li>Develop practical measures to embed veterans' employment strategies into the recruitment
                      practices of Australian business.</li>
                  <li>Foster the Committee members and industry leaders to drive creative solutions to provide
                      greater employment opportunities for veterans.</li>
                  <li>Develop a sustainable program for employers to gain an understanding of the experiences,
                      skills and qualities of veterans and how these can be applied in the civilian workforce.</li>
                  <li>Develop a program to monitor recruitment and long term retention rates of veterans in the
                      civilian workforce.</li>
                  <li>Consider any barriers to the successful employment of veterans and recommend strategies
                      to address those barriers.
                  </li>
                  <li>Consider the outcomes of any private sector working groups and respond to matters raised
                      when required.
                  </li>
                  <li>Examine whether there is scope to encourage business to employ the spouses of serving
                      Australian Defence Force members.</li>
                  <li>Provide a report to the Minister for Veterans' Affairs/Defence Personnel by end of September
                      2017 outlining the Committee's progress against these Terms of Reference.</li>
                </ol>
                <h2 id="Membership">Membership</h2>
                <div className="row">
                  <div className="col-md-4 col-sm-4 col-xs-6">
                    <p>Chair</p>
                    <p>Deputy Chair</p>
                    <p>Small business representative</p>
                  </div>
                  <div className="col-md-4 col-sm-4 col-xs-6">
                    <p>Mr George Frazis
                    </p>
                    <p>Mr Ben Roberts-Smith VC, MG
                    </p>
                    <p>Ms Natalie Colbert<br/><br/></p>
                  </div>

                </div>
                <p>Representatives of the following organisations:</p>
                <ul>
                  <li>Allied Express Transport</li>
                  <li>Australia Post</li>
                  <li>Australian Chamber of Commerce and Industry</li>
                  <li>Clayton Utz – Andrew Plaskett</li>
                  <li>CSC Australia Pty Ltd</li>
                  <li>J.P. Morgan Chase Bank, NA (Sydney Branch)</li>
                  <li>PwC – Mark Jansen</li>
                  <li>Raytheon Australia</li>
                  <li>Saab Australia Pty Ltd</li>
                  <li>Serco Australia Pty Ltd</li>
                  <li>Westpac Group</li>
                </ul>
                <h2 id="Biographies">Member Biographies</h2>
                <p>TBA</p>
                <h2 id="Groups">Working groups</h2>
                <p>The Committee has decided to initially focus on eight key areas:
                </p>
                <ul>
                  <li>data and the business case for hiring veterans;</li>
                  <li>translation of skills, including use of common language;</li>
                  <li>awareness, career fairs and branding, including accrediting veterans’ employers;</li>
                  <li>human resources policies and targets;</li>
                  <li>on-boarding, transition, retention and mentors, including links with reserves and other
                      defence support organisations;</li>
                  <li>employment of spouses;</li>
                  <li>appreciation of the contribution of veterans by the community; and</li>
                  <li>the Prime Minister’s Veterans’ Employment Annual Awards.</li>
                </ul>
                <IacNews/>
                <h2>Contact</h2>
                <h2 id="Contact">IAC Secretariat</h2>
                <h5>C/- Department of Veterans' Affairs</h5>
                <h5>GPO Box 9998</h5>
                <h5>Canberra ACT 2601</h5>
                <h5><i className="fa fa-envelope"></i> IAC.Secretariat@dva.gov.au</h5>
                <h2 id="Links">Useful links</h2>
                <ul>
                  <li>
                    <a href="/employers#">Information for Employers</a>
                  </li>
                </ul>
                <p>
                  <a href="#">Top
                    <span className="glyphicon glyphicon-arrow-up" aria-hidden="true"></span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
