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
import BioRosenfield from "../image/bios/biorosenfield.jpg";
import BioWard from "../image/bios/bioward.jpg";
import Bio_Print from "../image/bios/iac_bio.png";
import {Link} from "react-router-dom";

export default class IAC extends React.Component {

  render() {
    return (
      <div>
          <div className="body-content container">
            <div className="row">
              <div className="col-md-10" id="mainCol">
                <h1 id="content">Industry Advisory Committee on Veterans’ Employment</h1>
                <div className="list-contents-wrapper">
                <h2 className="list-contents-header">Contents</h2>
                <ul className="list-contents">                 
                  <li><a href="#Terms">Terms of reference</a></li>
                  <li><a href="#Membership">Membership</a></li>
                  <li><a href="#Groups">Working groups</a></li>
                  <li><a href="#News">Latest News</a></li>
                  <li><a href="#Contact">Contact</a></li>
                </ul>
                </div>

                <p>The Industry Advisory Committee (IAC) on Veterans’ Employment has been established to develop
                  practical measures to embed veterans’ employment strategies into recruitment
                   practices of Australian businesses.</p>
                <p>The Committee will also play a role in the broader promotion of skills and professional attributes
                   that veterans have to offer employers</p>
                   <section id="section-nobreak">
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
              </section>
                <section id="section-nobreak">
                <h2 id="Membership">Membership</h2>
                <p>The committee comprises a Chair, Deputy Chair, a representative of small businesses, a representative of the Australian Chamber of Commerce and Industry, and representatives of ten other organisations.</p>
                  <img className="print-only bio-img text-center" src={Bio_Print} alt="Printing version of Industry Advisory Committee Membership" aria-hidden="true"/>
                <div className="hidden-print">
                <div className="row">
                  <figure className="col-md-offset-2 col-sm-offset-2 col-md-4 col-sm-4 col-xs-12 text-center">
                    <img src={BioFrazis} alt="George Frazis" className="img-circle" height="150px" width="150px"></img>
                    <figcaption className="bio-title">George Frazis</figcaption>
                    <figcaption className="bio-description">Westpac Group</figcaption>
                    <figcaption>Chair | <Link to="/member-biographies#BioFrazis">Bio</Link></figcaption>

                  </figure>
                  <figure className="col-md-4 col-sm-4 col-xs-12 text-center">
                    <img src={BioRobertsSmith} alt="Ben Roberts-Smith" className="img-circle" height="150px" width="150px"></img>
                    <figcaption className="bio-title">Ben Roberts-Smith VC, MG</figcaption>
                    <figcaption className="bio-description">Seven Network</figcaption>
                    <figcaption>Deputy Chair | <Link to="/member-biographies#BioRobertsSmith">Bio</Link></figcaption>

                  </figure>
                </div>

                <div className="row">

                  <figure className="col-md-4 col-sm-4 col-xs-12 text-center">
                    <img src={BioBlake} alt="Chris Blake" className="img-circle" height="150px" width="150px"></img>
                    <figcaption className="bio-title">Chris Blake</figcaption>
                    <figcaption className="bio-description">Australia Post</figcaption>
                    <figcaption>Member | <a href="/member-biographies#BioBlake" >Bio</a></figcaption>
                  </figure>
                  <figure className="col-md-4 col-sm-4 col-xs-12 text-center">
                    <img src={BioColbert} alt="Natalie Colbert" className="img-circle" height="150px" width="150px"></img>
                    <figcaption className="bio-title">Natalie Colbert</figcaption>
                    <figcaption className="bio-description">CanPLAY Pty Ltd</figcaption>
                    <figcaption>Small Business Representative | <Link to="/member-biographies#BioColbert">Bio</Link></figcaption>
                  </figure>
                  <figure className="col-md-4 col-sm-4 col-xs-12 text-center">
                    <img src={BioGalgsdies} alt="Mark Galgsdies" className="img-circle" height="150px" width="150px"></img>
                    <figcaption className="bio-title">Mark Galgsdies</figcaption>
                    <figcaption className="bio-description">Serco Asia Pacific</figcaption>
                    <figcaption>Member | <a href="/member-biographies#BioGalgsdies" >Bio</a></figcaption>
                  </figure>

                </div>

                <div className="row">

                <figure className="col-md-4 col-sm-4 col-xs-12 text-center">
                    <img src={BioJansen} alt="Mark Jansen" className="img-circle" height="150px" width="150px"></img>
                    <figcaption className="bio-title">Mark Jansen</figcaption>
                    <figcaption className="bio-description">PwC</figcaption>
                    <figcaption>Member | <a href="/member-biographies#BioJansen" >Bio</a></figcaption>
                </figure>
                <figure className="col-md-4 col-sm-4 col-xs-12 text-center">
                    <img src={BioLambert} alt="Jenny Lambert" className="img-circle" height="150px" width="150px"></img>
                    <figcaption className="bio-title">Jenny Lambert</figcaption>
                    <figcaption className="bio-description">Australian Chamber of Commerce and Industry</figcaption>
                    <figcaption>Member | <a href="/member-biographies#BioLambert" >Bio</a></figcaption>
                </figure>

                  <figure className="col-md-4 col-sm-4 col-xs-12 text-center">
                    <img src={BioLefever} alt="Jim Lefever" className="img-circle" height="150px" width="150px"></img>
                    <figcaption className="bio-title">Jim Lefever</figcaption>
                    <figcaption className="bio-description">CSC Australia Pty Ltd</figcaption>
                    <figcaption>Member | <a href="/member-biographies#BioLefever" >Bio</a></figcaption>
                  </figure>

                </div>

                <div className="row">
                   <figure className="col-md-4 col-sm-4 col-xs-12 text-center">
                    <img src={BioMcdowell} alt="Colin McDowell" className="img-circle" height="150px" width="150px"></img>
                    <figcaption className="bio-title">Colin McDowell</figcaption>
                    <figcaption className="bio-description">Allied Express Transport</figcaption>
                    <figcaption>Member | <a href="/member-biographies#BioMcdowell" >Bio</a></figcaption>
                  </figure>
                  <figure className="col-md-4 col-sm-4 col-xs-12 text-center">
                    <img src={BioPalmerlee} alt="Luke Palmerlee" className="img-circle" height="150px" width="150px"></img>
                    <figcaption className="bio-title">Luke Palmerlee</figcaption>
                    <figcaption className="bio-description">J.P. Morgan Chase Bank, NA</figcaption>
                      <figcaption className="bio-description">(Sydney Branch)</figcaption>
                     <figcaption>Member | <a href="/member-biographies#BioPalmerlee" >Bio</a></figcaption>
                  </figure>
                  <figure className="col-md-4 col-sm-4 col-xs-12 text-center">
                    <img src={BioParker} alt="Christine Parker" className="img-circle" height="150px" width="150px"></img>
                    <figcaption className="bio-title">Christine Parker</figcaption>
                    <figcaption className="bio-description">Westpac Group</figcaption>
                    <figcaption>Member | <a href="/member-biographies#BioParker" >Bio</a></figcaption>
                  </figure>

                </div>

                <div className="row">
                  <figure className="col-md-4 col-sm-4 col-xs-12 text-center">
                    <img src={BioPlaskett} alt="Andrew Plaskett" className="img-circle" height="150px" width="150px"></img>
                    <figcaption className="bio-title">Andrew Plaskett</figcaption>
                    <figcaption className="bio-description">Clayton Utz</figcaption>
                    <figcaption>Member | <a href="/member-biographies#BioPlaskett" >Bio</a></figcaption>
                  </figure>
                  <figure className="col-md-4 col-sm-4 col-xs-12 text-center">
                    <img src={BioRosenfield} alt="Dean Rosenfield" className="img-circle" height="150px" width="150px"></img>
                    <figcaption className="bio-title">Dean Rosenfield</figcaption>
                    <figcaption className="bio-description">Saab Australia Pty Ltd</figcaption>
                    <figcaption>Member | <a href="/member-biographies#BioRosenfield" >Bio</a></figcaption>
                  </figure>
                  <figure className="col-md-4 col-sm-4 col-xs-12 text-center">
                    <img src={BioWard} alt="Michael Ward" className="img-circle" height="150px" width="150px"></img>
                    <figcaption className="bio-title">Michael Ward</figcaption>
                    <figcaption className="bio-description">Raytheon Australia</figcaption>
                    <figcaption>Member | <a href="/member-biographies#BioWard" >Bio</a></figcaption>
                  </figure>
                </div>
              </div>
            </section>
            <section id="section-nobreak">
                <h2 id="Groups">Working groups</h2>
                <p>The Committee will initially focus on eight key areas:
                </p>
                <ul>
                  <li>data and the business case for hiring veterans</li>
                  <li>translation of skills, including use of common language</li>
                  <li>awareness, career fairs and branding, including accrediting veterans’ employers</li>
                  <li>human resources policies and targets</li>
                  <li>on-boarding, transition, retention and mentors, including links with reserves and other
                      defence support organisations</li>
                  <li>employment of spouses</li>
                  <li>appreciation of the contribution of veterans by the community</li>
                  <li>the Prime Minister’s Veterans’ Employment Annual Awards</li>
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

                <p className="hidden-print">
                  <a href="#top">Top
                    <span className="glyphicon glyphicon-arrow-up" aria-hidden="true"></span>
                  </a>
                </p>
                </div>
              </section>
              </div>
            </div>
          </div>
      </div>
    );
  }
}
