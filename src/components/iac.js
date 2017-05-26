import React from "react";
import IacNews from "./iacnews";
import DefaultBio from '../image/bios/placeholderbio.png';
import BioColbert from '../image/bios/biocolbert.png';
import BioFrazis from '../image/bios/biofrazis.png';
import BioBlake from '../image/bios/bioblake.png';
import BioGalgsdies from '../image/bios/biogalgsdies.png';
import BioJansen from '../image/bios/biojansen.png';
import BioLambert from '../image/bios/biolambert.png';
import BioLefever from '../image/bios/biolefever.png';
import BioMcdowell from '../image/bios/biomcdowell.png';
import BioPalmerlee from '../image/bios/biopalmerlee.png';
import BioParker from '../image/bios/bioparker.png';
import BioPlaskett from '../image/bios/bioplaskett.png';
import BioRobertsSmith from '../image/bios/bioroberts-smith.png';
import BioRosenfield from '../image/bios/biorosenfield.png';
import BioWard from '../image/bios/bioward.png';




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
                  <li><a href="#News">Latest News</a></li>
                  <li><a href="#Terms">Terms of reference</a></li>
                  <li><a href="#Membership">Membership</a></li>
                  <li><a href="#Biographies">Member Biographies</a></li>
                  <li><a href="#Groups">Working groups</a></li>
                  <li><a href="#Contact">Contact</a></li>
                  <li><a href="#Links">Useful links</a></li>
                </ul>
                <IacNews/>
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
                  <div className="col-md-4 col-sm-6 col-xs-6">
                    <p>Chair</p>
                    <p>Deputy Chair</p>
                    <p>Small business representative</p>
                  </div>
                  <div className="col-md-6 col-sm-6 col-xs-6">
                    <p>Mr George Frazis
                    </p>
                    <p>Mr Ben Roberts-Smith VC, MG
                    </p>
                    <p>Ms Natalie Colbert<br/><br/></p>
                  </div>
                </div>



                <div className="row">
                  <div className="col-md-3 col-sm-3 col-xs-3">
                    <img src={BioFrazis} alt="Image of George Frazis" class="block image-circle" height="150px" width="150px"></img>
                    <h3>Mr George Frazis</h3> 
                    <p>Chair | <a href="" class="">Bio</a></p>
                  </div>
                  <div className="col-md-3 col-sm-3 col-xs-3">
                    <img src={BioRobertsSmith} alt="Image of Ben Roberts-Smith" class="block image-circle" height="150px" width="150px"></img>
                    <h3>Mr Ben Roberts-Smith VC, MG</h3> 
                    <p>Deputy Chair | <a href="" class="">Bio</a></p>
                  </div>
                  <div className="col-md-3 col-sm-3 col-xs-3">
                    <img src={BioColbert} alt="Image of Natalie Colbert" class='img-circle' height="150px" width="150px"></img>
                    <h3>Ms Natalie Colbert</h3> 
                    <p>Small Business Representative | <a href="" class="">Bio</a></p>
                  </div>
                  <div className="col-md-3 col-sm-3 col-xs-3">
                    <img src={BioBlake} alt="Sample" class="block image-circle" height="150px" width="150px"></img>
                    <h3>Mr Chris Blake</h3> 
                    <p>Member | <a href="" class="">Bio</a></p>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-3 col-sm-3 col-xs-3">
                    <img src={BioGalgsdies} alt="Sample" class="block image-circle" height="150px" width="150px"></img>
                    <h3>Mr Mark Galgsdies</h3> 
                    <p>Member | <a href="" class="">Bio</a></p>
                  </div>
                  <div className="col-md-3 col-sm-3 col-xs-3">
                    <img src={BioJansen} alt="Sample" class="block image-circle" height="150px" width="150px"></img>
                    <h3>Mr Mark Jansen</h3> 
                    <p>Member | <a href="" class="">Bio</a></p>
                  </div>
                  <div className="col-md-3 col-sm-3 col-xs-3">
                    <img src={BioLambert} alt="Sample" class="block image-circle" height="150px" width="150px"></img>
                    <h3>Ms Jenny Lambert</h3> 
                    <p>Member | <a href="" class="">Bio</a></p>
                  </div>

                  <div className="col-md-3 col-sm-3 col-xs-3">
                    <img src={BioLefever} alt="Sample" class="block image-circle" height="150px" width="150px"></img>
                    <h3>Mr Jim Lefever</h3> 
                    <p>Member | <a href="" class="">Bio</a></p>
                  </div>
                </div>


                
                <div className="row">
                  <div className="col-md-3 col-sm-3 col-xs-3">
                    <img src={BioMcdowell} alt="Sample" class="block image-circle" height="150px" width="150px"></img>
                    <h3>Mr Colin McDowell</h3> 
                    <p>Member | <a href="" class="">Bio</a></p>
                  </div>
                  <div className="col-md-3 col-sm-3 col-xs-3">
                    <img src={BioPalmerlee} alt="Sample" class="block image-circle" height="150px" width="150px"></img>
                    <h3>Mr Luke Palmerlee</h3> 
                     <p>Member | <a href="" class="">Bio</a></p>
                  </div>
                  <div className="col-md-3 col-sm-3 col-xs-3">
                    <img src={BioParker} alt="Sample" class="block image-circle" height="150px" width="150px"></img>
                    <h3>Ms Christine Parker</h3> 
                    <p>Member | <a href="" class="">Bio</a></p>
                  </div>
                  <div className="col-md-3 col-sm-3 col-xs-3">
                    <img src={BioPlaskett} alt="Sample" class="block image-circle" height="150px" width="150px"></img>
                    <h3>Mr Andrew Plaskett</h3> 
                    <p>Member | <a href="" class="">Bio</a></p>
                  </div>
                </div>


                
                <div className="row">
                  <div className="col-md-3 col-sm-3 col-xs-3">
                    <img src={BioRosenfield} alt="Sample" class="block image-circle" height="150px" width="150px"></img>
                    <h3>Mr Dean Rosenfield</h3> 
                    <p>Member | <a href="" class="">Bio</a></p>
                  </div>
                  <div className="col-md-3 col-sm-3 col-xs-3">
                    <img src={BioWard} alt="Sample" class="block image-circle" height="150px" width="150px"></img>
                    <h3>Mr Michael Ward</h3> 
                    <p>Member | <a href="" class="">Bio</a></p>
                  </div>
                </div>




                <p></p>
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
