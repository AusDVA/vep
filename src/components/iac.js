import React from "react";
import IacNews from "./partials/iacnews";
import BioColbert from "../image/bios/biocolbert.jpg";
import BioFrazis from "../image/bios/biofrazis.jpg";
import BioBlake from "../image/bios/bioblake.jpg";
import BioGalgsdies from "../image/bios/biogalgsdies.jpg";
import BioJansen from "../image/bios/biojansen.jpg";
import BioLambert from "../image/bios/biolambert.jpg";
import BioLefever from "../image/bios/biolefever.jpg";
import BioMcdowell from "../image/bios/biomcdowell.jpg";
import BioPalmerlee from "../image/bios/biopalmerlee.jpg";
import BioParker from "../image/bios/bioparker.jpg";
import BioPlaskett from "../image/bios/bioplaskett.jpg";
import BioRobertsSmith from "../image/bios/bioroberts-smith.jpg";
import BioBryant from "../image/bios/biobryant.jpg";
import BioWard from "../image/bios/bioward.jpg";
import Bio_Print from "../image/bios/iac_bio.png";
import TopLink from "./partials/topLink";
import { HashLink as Link } from "react-router-hash-link";



export default class IAC extends React.Component {

  constructor(props) {
   super(props);
   this.focus = this.focus.bind(this);
 }

 focus() {
   this.refs.iacMembership.focus();
 }

 componentDidMount() {
    const LOCATION = (location.search);

    if (LOCATION == "?MembershipFocus=true") {
      this.focus();
    }
  }
  render() {
    return (
      <div>
          <div className="body-content container no-border" id="content" tabIndex="-1">
            <div className="row">
              <div className="col-md-10" id="mainCol">
                <h1>Industry Advisory Committee on Veterans’ Employment</h1>
                <div className="list-contents-wrapper">
                <h2 className="list-contents-header">Contents</h2>
                <ul className="list-contents">
                  <li><Link to="#Terms">Terms of reference</Link></li>
                  <li><Link to="#Membership">Membership</Link></li>
                  <li><Link to="#Key Areas">Key Areas</Link></li>
                  <li><Link to="#News">Latest News</Link></li>
                  <li><Link to="#Contact">Contact</Link></li>
                </ul>
                </div>

                <p>The Industry Advisory Committee on Veterans’ Employment has been established to develop
                  practical measures to embed veterans’ employment strategies into recruitment
                   practices of Australian businesses.</p>
                <p>The Committee will also play a role in the broader promotion of skills and professional attributes
                   that veterans have to offer employers.</p>
                   <section className="section-nobreak">
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
                  <li>Provide a report to the Minister for Veterans' Affairs/Defence Personnel by the end of <span className="no-wrap">September 2017 </span>
                      outlining the Committee's progress against these Terms of Reference.</li>
                </ol>
              </section>
                <section  className="section-nobreak">
                <h2 className="no-border" ref="iacMembership" tabIndex="-1" id="Membership">Membership</h2>
                <p>The Committee comprises a Chair, Deputy Chair, a representative of small businesses, a representative of the Australian Chamber of Commerce and Industry, and representatives of ten other organisations.</p>
                  <img className="print-only bio-img text-center" src={Bio_Print} alt="Printing version of Industry Advisory Committee Membership" aria-hidden="true"/>
                <div className="hidden-print">
                <div className="row">
                  <figure className="col-md-offset-2 col-sm-offset-2 col-md-4 col-sm-4 col-xs-12 text-center">
                    <img src={BioFrazis} alt="George Frazis" className="img-circle" height="150px" width="150px"></img>
                    <figcaption className="bio-title">George Frazis</figcaption>
                    <figcaption className="bio-description">Westpac Group</figcaption>
                    <figcaption className="bio-position">Chair | <Link to="/member-biographies?member=Frazis#BioFrazis">Bio</Link></figcaption>

                  </figure>
                  <figure className="col-md-4 col-sm-4 col-xs-12 text-center">
                    <img src={BioRobertsSmith} alt="Ben Roberts-Smith" className="img-circle" height="150px" width="150px"></img>
                    <figcaption className="bio-title">Ben Roberts-Smith VC, MG</figcaption>
                    <figcaption className="bio-description">Seven Network</figcaption>
                    <figcaption className="bio-position">Deputy Chair | <Link to="/member-biographies?member=RobertsSmith#BioRobertsSmith">Bio</Link></figcaption>

                  </figure>
                </div>

                <div className="row">

                  <figure className="col-md-4 col-sm-4 col-xs-12 text-center">
                    <img src={BioBlake} alt="Chris Blake" className="img-circle" height="150px" width="150px"></img>
                    <figcaption className="bio-title">Chris Blake</figcaption>
                    <figcaption className="bio-description">Australia Post</figcaption>
                    <figcaption className="bio-position">Member | <Link to="/member-biographies?member=Blake#BioBlake" >Bio</Link></figcaption>
                  </figure>
                  <figure className="col-md-4 col-sm-4 col-xs-12 text-center">
                    <img src={BioColbert} alt="Natalie Colbert" className="img-circle" height="150px" width="150px"></img>
                    <figcaption className="bio-title">Natalie Colbert</figcaption>
                    <figcaption className="bio-description">CanPLAY Pty Ltd</figcaption>
                    <figcaption className="bio-position">Member | <Link to="/member-biographies?member=Colbert#BioColbert">Bio</Link></figcaption>
                  </figure>
                  <figure className="col-md-4 col-sm-4 col-xs-12 text-center">
                    <img src={BioGalgsdies} alt="Mark Galgsdies" className="img-circle" height="150px" width="150px"></img>
                    <figcaption className="bio-title">Mark Galgsdies</figcaption>
                    <figcaption className="bio-description">Serco Asia Pacific</figcaption>
                    <figcaption className="bio-position">Member | <Link to="/member-biographies?member=Galgsdies#BioGalgsdies" >Bio</Link></figcaption>
                  </figure>

                </div>

                <div className="row">

                <figure className="col-md-4 col-sm-4 col-xs-12 text-center">
                    <img src={BioJansen} alt="Mark Jansen" className="img-circle" height="150px" width="150px"></img>
                    <figcaption className="bio-title">Mark Jansen</figcaption>
                    <figcaption className="bio-description">PwC</figcaption>
                    <figcaption className="bio-position">Member | <Link to="/member-biographies?member=Jansen#BioJansen" >Bio</Link></figcaption>
                </figure>
                <figure className="col-md-4 col-sm-4 col-xs-12 text-center">
                    <img src={BioLambert} alt="Jenny Lambert" className="img-circle" height="150px" width="150px"></img>
                    <figcaption className="bio-title">Jenny Lambert</figcaption>
                    <figcaption className="bio-description">Australian Chamber of Commerce and Industry</figcaption>
                    <figcaption className="bio-position">Member | <Link to="/member-biographies?member=Lambert#BioLambert" >Bio</Link></figcaption>
                </figure>

                  <figure className="col-md-4 col-sm-4 col-xs-12 text-center">
                    <img src={BioLefever} alt="Jim Lefever" className="img-circle" height="150px" width="150px"></img>
                    <figcaption className="bio-title">Jim Lefever</figcaption>
                    <figcaption className="bio-description">DXC Technology Australia Pty Limited</figcaption>
                    <figcaption className="bio-position">Member | <Link to="/member-biographies?member=Lefever#BioLefever" >Bio</Link></figcaption>
                  </figure>

                </div>

                <div className="row">
                   <figure className="col-md-4 col-sm-4 col-xs-12 text-center">
                    <img src={BioMcdowell} alt="Colin McDowell" className="img-circle" height="150px" width="150px"></img>
                    <figcaption className="bio-title">Colin McDowell</figcaption>
                    <figcaption className="bio-description">Allied Express Transport</figcaption>
                    <figcaption className="bio-position">Member | <Link to="/member-biographies?member=McDowell#BioMcDowell" >Bio</Link></figcaption>
                  </figure>
                  <figure className="col-md-4 col-sm-4 col-xs-12 text-center">
                    <img src={BioPalmerlee} alt="Luke Palmerlee" className="img-circle" height="150px" width="150px"></img>
                    <figcaption className="bio-title">Luke Palmerlee</figcaption>
                    <figcaption className="bio-description">J.P. Morgan Chase Bank, NA</figcaption>
                      <figcaption className="bio-description">(Sydney Branch)</figcaption>
                     <figcaption className="bio-position">Member | <Link to="/member-biographies?member=Palmerlee#BioPalmerlee" >Bio</Link></figcaption>
                  </figure>
                  <figure className="col-md-4 col-sm-4 col-xs-12 text-center">
                    <img src={BioParker} alt="Christine Parker" className="img-circle" height="150px" width="150px"></img>
                    <figcaption className="bio-title">Christine Parker</figcaption>
                    <figcaption className="bio-description">Westpac Group</figcaption>
                    <figcaption className="bio-position">Member | <Link to="/member-biographies?member=Parker#BioParker" >Bio</Link></figcaption>
                  </figure>

                </div>

                <div className="row">
                  <figure className="col-md-4 col-sm-4 col-xs-12 text-center">
                    <img src={BioPlaskett} alt="Andrew Plaskett" className="img-circle" height="150px" width="150px"></img>
                    <figcaption className="bio-title">Andrew Plaskett</figcaption>
                    <figcaption className="bio-description">Clayton Utz</figcaption>
                    <figcaption className="bio-position">Member | <Link to ="/member-biographies?member=Plaskett#BioPlaskett" >Bio</Link></figcaption>
                  </figure>
                  <figure className="col-md-4 col-sm-4 col-xs-12 text-center">
                    <img src={BioBryant} alt="Marc Bryant" className="img-circle" height="150px" width="150px"></img>
                    <figcaption className="bio-title">Marc Bryant</figcaption>
                    <figcaption className="bio-description">Saab Australia Pty Ltd</figcaption>
                    <figcaption className="bio-position">Member | <Link to="/member-biographies?member=Bryant#BioBryant" >Bio</Link></figcaption>
                  </figure>
                  <figure className="col-md-4 col-sm-4 col-xs-12 text-center">
                    <img src={BioWard} alt="Michael Ward" className="img-circle" height="150px" width="150px"></img>
                    <figcaption className="bio-title">Michael Ward</figcaption>
                    <figcaption className="bio-description">Raytheon Australia</figcaption>
                    <figcaption className="bio-position">Member | <Link to="/member-biographies?member=Ward#BioWard" >Bio</Link></figcaption>
                  </figure>
                </div>
              </div>
            </section>
            <section className="section-nobreak">
                <h2 id="Key Areas">Key Areas</h2>
                <p>The Committee is focusing on five key areas:
                </p>
                <ul>
                  <li>data, research and targets</li>
                  <li>human resources policies, accreditation, retention, translation of skills</li>
                  <li>communications (branding, awareness, transition seminars, website, job fairs)</li>
                  <li>spouse employment of serving ADF members</li>
                  <li>Prime Minister’s Veterans’ Employment Annual Awards</li>
                </ul>

                <IacNews/>
                <div id="Contact">
                <h2>Contact</h2>
                 <p>IAC Secretariat </p>
                 <p>C/- Department of Veterans' Affairs</p>
                 <p>GPO Box 9998</p>
                 <p>Canberra ACT 2601</p>

                <h2>Email</h2>
                <p><a href="mailto:IAC.Secretariat@dva.gov.au">IAC.Secretariat@dva.gov.au</a></p>
                  <TopLink/>
                </div>
              </section>
              </div>
            </div>
          </div>
      </div>
    );
  }
}
