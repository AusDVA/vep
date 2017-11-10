import React from "react";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import ImgRecruitmentOfVeterans from "../image/social_media/leadership in recruitment of veterans.jpg";
import ImgEmployeeOfTheYear from "../image/social_media/veteran employee of the year.jpg";
import ImgLargeBusiness from "../image/social_media/veterans employer of the year large business.jpg";
import ImgSmallToMediumBusiness from "../image/social_media/veterans employer of the year small to medium business.jpg";
import ImgPublicSectorOrg from "../image/social_media/veterans employer of the year public sector organisation.jpg";
import ImgSupportingVeteransEmployment from "../image/social_media/excellence in supporting veterans employment.jpg";
import ImgSupportingSpouseEmployment from "../image/social_media/excellence in supporting spouse employment.jpg";
import ImgPMEmploymentAward from "../image/social_media/Prime Ministers Veterans Employment Awards 2018.jpg";
import ImgPoster from "../image/social_media/AWARDS_Poster.jpg";
import ImgFacebook from "../image/social_media/Facebook.jpg";
import ImgLinkedIn from "../image/social_media/LinkedIn.jpg";
import ImgTwitter from "../image/social_media/Twitter.jpg";
import VideoCherieAnn from "../image/social_media/ADF Transitions - Cherie-Anns story.mp4";
import VideoJoels from "../image/social_media/ADF Transitions - Joels story.mp4";
import VideoKrishaans from "../image/social_media/ADF Transitions - Krishaans story.mp4";
import VideoRenaes from "../image/social_media/ADF Transitions - Renaes story.mp4";
import VideoRichards from "../image/social_media/ADF Transitions - Richards story.mp4";
import { HashLink as Link } from "react-router-hash-link";
import TopLink from "./partials/topLink";
export default class Awards extends React.Component {

  render(){

    return (
      <div>
        <section>
          <div className="body-content container no-border" id="content" tabIndex="-1" autoFocus>
            <div className="row">
              <ol className="breadcrumb hidden-print">
                <li><Link to="/#top">Home</Link></li>
                <li><Link to="/awards#top">Awards</Link></li>
                <li className="active">Resources</li>
              </ol>
              <div className="col-md-10" id="mainCol">
                <h1>Resources</h1>
                 <div className="list-contents-wrapper">
                   <h2 className="list-contents-header">Contents</h2>
                    <ul className="list-contents">
                     <li><Link to="#tiles">Social media tiles</Link></li>
                     <li><Link to="#newsletter">Sample newsletter content</Link></li>
                     <li><Link to="#stories">Veterans' share their stories</Link></li>
                     <li><Link to="#poster">Poster</Link></li>
                   </ul>
                 </div>



                          <section className="section-nobreak">

                        <h2 id="tiles">Social media tiles</h2>
                        <div className="row">
                          <figure className="col-md-4 col-sm-4 col-xs-12 text-center">
                             <img src={ImgRecruitmentOfVeterans} alt="Leadership in the Recruitment of Veterans" height="100px" width="225px"></img>
                             <figcaption className="bio-position">Leadership in the Recruitment of Veterans | <a href={process.env.PUBLIC_URL + '/doc/leadership in recruitment of veterans.jpg'} download="leadership in recruitment of veterans.jpg" target="_blank">Download (260 KB)<span className="sr-only">Opens a jpg file in a new tab</span></a></figcaption>
                          </figure>
                          <figure className="col-md-4 col-sm-4 col-xs-12 text-center">
                            <img src={ImgEmployeeOfTheYear} alt="Veteran Employee of the Year" height="100px" width="225px"></img>
                            <figcaption className="bio-position">Veteran Employee of the Year | <a href={process.env.PUBLIC_URL + '/doc/veteran employee of the year.jpg'} download="veteran employee of the year.jpg" target="_blank">Download (257 KB)<span className="sr-only">Opens a jpg file in a new tab</span></a></figcaption>
                          </figure>
                          <figure className="col-md-4 col-sm-4 col-xs-12 text-center">
                            <img src={ImgLargeBusiness} alt="Veterans’ Employer of the Year – Large Business" height="100px" width="225px"></img>
                            <figcaption className="bio-position">Veterans’ Employer of the Year – Large Business | <a href={process.env.PUBLIC_URL + '/doc/veterans employer of the year large business.jpg'} download="veterans employer of the year large business.jpg" target="_blank">Download (259 KB)<span className="sr-only">Opens a jpg file in a new tab</span></a></figcaption>
                          </figure>
                        </div>

                        <div className="row">
                          <figure className="col-md-4 col-sm-4 col-xs-12 text-center">
                              <img src={ImgSmallToMediumBusiness} alt="Veterans’ Employer of the Year – Small to Medium Sized Business" height="100px" width="225px"></img>
                               <figcaption className="bio-position">Veterans’ Employer of the Year – Small to Medium Sized Business | <a href={process.env.PUBLIC_URL + '/doc/veterans employer of the year small to medium business.jpg'} download="veterans employer of the year small to medium business.jpg" target="_blank">Download (262 KB)<span className="sr-only">Opens a jpg file in a new tab</span></a></figcaption>
                          </figure>
                          <figure className="col-md-4 col-sm-4 col-xs-12 text-center">
                            <img src={ImgPublicSectorOrg} alt="Veterans’ Employer of the Year – Public Sector Organisation" height="100px" width="225px"></img>
                            <figcaption className="bio-position">Veterans’ Employer of the Year – Public Sector Organisation | <a href={process.env.PUBLIC_URL + '/doc/veterans employer of the year public sector organisation.jpg'} download="veterans employer of the year public sector organisation.jpg" target="_blank">Download (261 KB)<span className="sr-only">Opens a jpg file in a new tab</span></a></figcaption>
                          </figure>
                          <figure className="col-md-4 col-sm-4 col-xs-12 text-center">
                            <img src={ImgSupportingVeteransEmployment} alt="Excellence in Supporting Veterans’ Employment" height="100px" width="225px"></img>
                            <figcaption className="bio-position">Excellence in Supporting Veterans’ Employment | <a href={process.env.PUBLIC_URL + '/doc/excellence in supporting veterans employment.jpg'} download="excellence in supporting veterans employment.jpg" target="_blank">Download (258 KB)<span className="sr-only">Opens a jpg file in a new tab</span></a></figcaption>
                          </figure>
                        </div>

                        <div className="row">
                          <figure className="col-md-4 col-sm-4 col-xs-12 text-center">
                            <img src={ImgSupportingSpouseEmployment} alt="Excellence in Supporting Spouse Employment" height="100px" width="225px"></img>
                            <figcaption className="bio-position">Excellence in Supporting Spouse Employment | <a href={process.env.PUBLIC_URL + '/doc/excellence in supporting spouse employment.jpg'} download="excellence in supporting spouse employment.jpg" target="_blank">Download (261 KB)<span className="sr-only">Opens a jpg file in a new tab</span></a></figcaption>
                          </figure>
                          <figure className="col-md-4 col-sm-4 col-xs-12 text-center">
                            <img src={ImgPMEmploymentAward} alt="Prime Ministers Veterans Employment Awards 2018" height="100px" width="225px"></img>
                            <figcaption className="bio-position">Prime Minister’s Veterans’ Employment Awards 2018 | <a href={process.env.PUBLIC_URL + '/doc/Prime Ministers Veterans Employment Awards 2018.jpg'} download="Prime Ministers Veterans Employment Awards 2018.jpg" target="_blank">Download (250 KB)<span className="sr-only">Opens a jpg file in a new tab</span></a></figcaption>
                          </figure>
                        </div>

                        <h2>Cover photos</h2>
                        <div className="row">
                          <figure className="col-md-4 col-sm-4 col-xs-12 text-center">
                             <img src={ImgFacebook} alt="Facebook Cover" height="100px" width="225px"></img>
                             <figcaption className="bio-position">Facebook | <a href={process.env.PUBLIC_URL + '/doc/Facebook.jpg'} download="Facebook.jpg" target="_blank">Download (143 KB)<span className="sr-only">Opens a jpg file in a new tab</span></a></figcaption>
                          </figure>
                          <figure className="col-md-4 col-sm-4 col-xs-12 text-center">
                            <img src={ImgLinkedIn} alt="LinkedIn Cover" height="100px" width="225px"></img>
                            <figcaption className="bio-position">LinkedIn | <a href={process.env.PUBLIC_URL + '/doc/LinkedIn.jpg'} download="LinkedIn.jpg" target="_blank">Download (158 KB)<span className="sr-only">Opens a jpg file in a new tab</span></a></figcaption>
                          </figure>
                          <figure className="col-md-4 col-sm-4 col-xs-12 text-center">
                            <img src={ImgTwitter} alt="Twitter Cover" height="100px" width="225px"></img>
                            <figcaption className="bio-position">Twitter | <a href={process.env.PUBLIC_URL + '/doc/Twitter.jpg'} download="Twitter.jpg" target="_blank">Download (250 KB)<span className="sr-only">Opens a jpg file in a new tab</span></a></figcaption>
                          </figure>
                        </div>

                        <h2 id="newsletter">Sample newsletter content</h2>
                        <br/>
                        <p className="text-center"><b>Know an outstanding business that employs veterans?<br/>
                             Nominate them for a Prime Minister’s Veterans’ Employment Award</b></p>

                        <p>Men and women of the Australian Defence Force (ADF) are highly trained, diligent, professional and adaptable.  These skills, abilities and behaviours
                         make them valuable employees in business. Are you an organisation who has given yourself a competitive edge by hiring veterans? Or, are you a veteran or
                         an ADF spouse who feels supported by your employer in the workplace? Nominate now for a Prime Minister’s Veterans’ Employment Award. </p>

                        <p><span className="no-wrap">In September 2017</span>, the Prime Minister and the Minister for Veterans’ Affairs opened nominations for the inaugural Prime Minister’s Veterans’ Employment Awards.
                         The awards recognise and celebrate Australian businesses that support and employ veterans and ADF spouses, as well as veterans who are making a significant
                         contribution to their workplace. </p>

                        <p>Each year, around 5,200 people will leave the ADF and the Government’s aim is to ensure our ADF members can transition to civilian life effectively and smoothly and find meaningful employment. </p>

                        <p>The awards are part of the Prime Minister’s Veterans’ Employment Program which was launched last year to help recognise the extensive talents of our veterans and
                         to encourage the private sector to take advantage of that expertise. </p>

                         <p>The award categories open for nominations are: </p>
                          <ul>
                            <li>Leadership in Recruitment of Veterans</li>
                            <li>Veteran Employee of the Year</li>
                            <li>Veterans’ Employer of the Year – Large Business</li>
                            <li>Veterans’ Employer of the Year – Small to Medium-Sized Business</li>
                            <li>Veterans’ Employer of the Year – Public Sector Organisation</li>
                            <li>Excellence in Supporting Veterans’ Employment</li>
                            <li>Excellence in Supporting Spouse Employment</li>
                          </ul>

                          <p>To nominate an employer, your own organisation or a veteran employee for an award, visit <a target="_blank" href="https://veteransemployment.gov.au/awards">www.veteransemployment.gov.au/awards<span className="sr-only">(this link will open in a new tab)</span></a>.
                           Nominations close at midnight on Friday <span className="no-wrap">22 December 2017.</span></p>

                        <h2 id="stories">Veterans' share their stories</h2>

                        <p><b>Krishaan Wright - Program and Portfolio Manager, EY </b></p>
                         <p>"You know that (ADF) person is going to have a good set of leadership experiences and has been trusted with responsibility from a very early time in their career." </p>
                         <p>Krishaan graduated from the Australian Defence Force Academy in 1996 with a degree in Aerospace Engineering. Following graduation, Krishaan qualified to become a C-130 Hercules pilot.
                           He was a lead advisor on the implementation of software driven operations management systems and later became a Strategic Advisor to senior leadership groups in Defence.
                           His transition from the Air Force was planned and, with Defence support, he was successful in obtaining a job with EY. Krishaan has worked as a Program and Portfolio
                           Manager at EY since late 2015, where his work focuses on advising clients how best to solve project problems and issues. </p>

                           <div className="row"><div className="col-md-6">
                             <Video tabIndex="-1" loop controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}>
                               <source src={VideoKrishaans} type="video/mp4"/>
                               <source src={VideoKrishaans} type="video/ogg"/>
                               Your browser does not support the video tag. See more of <a tabIndex="-1" href={process.env.PUBLIC_URL + '/doc/ADF Transitions - Krishaans story.mp4'} target="_blank">Krishaan's transition story<span className="sr-only">Opens a mp4 video file in a new tab</span></a>.
                             </Video>
                             </div></div>
                             <br/>

                       <p><b>Cherie-Ann Bourghouts - Business Owner, Indira Organics </b></p>
                        <p>"Employers receive an asset with so much training and experience. They get someone who is motivated and eager to do a great job." </p>
                        <p>Cherie-Ann joined the Air Force in 1997 and studied at the Australian Defence Force Academy, receiving her Bachelor of Engineering (Civil) degree from UNSW (ADFA) in 2000.
                          During her 20 years of service she was deployed to Iraq and was responsible for Airfield Engineering and Engineering capability across 12 major RAAF bases in Australia.
                          On transferring to the Air Force Reserves, Cherie-Ann attended ADF Transition Seminars, received career coaching and successfully applied to undertake
                          The Prince's Charities "Lead your Own Business" career transition course. Cherie-Ann is now using her skills and experience to complement her business training in
                          developing her own organic skincare company, "Indira Organics" in Queensland. </p>

                          <div className="row"><div className="col-md-6">
                            <Video tabIndex="-1" loop controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}>
                              <source src={VideoCherieAnn} type="video/mp4"/>
                              <source src={VideoCherieAnn} type="video/ogg"/>
                              Your browser does not support the video tag. See more of <a tabIndex="-1" href={process.env.PUBLIC_URL + '/doc/ADF Transitions - Cherie-Anns story.mp4'} target="_blank">Cherie-Ann's transition story<span className="sr-only">Opens a mp4 video file in a new tab</span></a>.
                            </Video>
                            </div></div>
                            <br/>

                        <p><b>Joel Sardi - Candidate Liaison Officer, Ironside Recruitment </b></p>
                        <p>"Ex-Servicemen and women are great potential employees for a civilian employer. We come with a great set of values and skills. We are diligent, disciplined, respectful and professional."</p>
                        <p>Joel joined the Army in 2011 as a rifleman and served for five years in <span className="no-wrap">7 RAR</span>, which included a deployment to Kandahar, Afghanistan in 2013.
                           A keen sportsman, Joel represented the Army at national and inter-service AFL tournaments. Following a non-service related accident in <span className="no-wrap">August 2014</span>,
                           Joel sustained a serious spinal injury and is now a quadriplegic. Joel was supported by Defence during the transition process and began a placement
                           at Ironside Recruitment in <span className="no-wrap">September 2015</span>. He is now a Candidate Liaison Officer at Ironside, assisting and supporting other former ADF members
                           to find civilian employment.  </p>

                           <div className="row"><div className="col-md-6">
                             <Video tabIndex="-1" loop controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}>
                               <source src={VideoJoels} type="video/mp4"/>
                               <source src={VideoJoels} type="video/ogg"/>
                               Your browser does not support the video tag. See more of <a tabIndex="-1" href={process.env.PUBLIC_URL + '/doc/ADF Transitions - Joels story.mp4'} target="_blank">Joel's transition story<span className="sr-only">Opens a mp4 video file in a new tab</span></a>.
                             </Video>
                             </div>
                           </div>
                             <br/>

                        <p><b>Renae Docherty - Integrated Logistics & Systems Support Manager, Northrop Grumman</b></p>
                        <p>"Employers receive an asset with so much training and experience. They get someone who is motivated and eager to do a great job."</p>
                        <p>Renae joined the Army in <span className="no-wrap">October 2003</span>. After her initial training at Kapooka she went on to develop hands-on skills in the finance and personnel
                           fields in Army Pay Corps. During her Army career Renae deployed to Afghanistan and on return to Australia was promoted to the rank of
                           Warrant Officer Class 2. Renae received transition support from Defence when she left the Army to begin her civilian career.
                           Renae is now an Integrated Logistics and Systems Support Manager with Northrop Grumman, a leading global security company, and is responsible
                           for procurement, inventory, repairs and supply chain planning. </p>

                           <div className="row"><div className="col-md-6">
                             <Video tabIndex="-1" loop controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}>
                               <source src={VideoRenaes} type="video/mp4"/>
                               <source src={VideoRenaes} type="video/ogg"/>
                               Your browser does not support the video tag. See more of <a tabIndex="-1" href={process.env.PUBLIC_URL + '/doc/ADF Transitions - Renaes story.mp4'} target="_blank">Renae's transition story<span className="sr-only">Opens a mp4 video file in a new tab</span></a>.
                             </Video>
                             </div></div>
                             <br/>

                        <p><b>Richard Gorey - Manager Operations & Business, Queensland Fire and Emergency Services </b></p>
                        <p>"Skills that I have learned in the Australian Defence Force, as I have progressed through the ranks, have helped me greatly in my civilian employment."</p>
                        <p>Richard Gorey continues his Defence service today as a Petty Officer Diver in the Navy Reserve. His experience over more than two decades as a Navy diver has
                           taught him leadership, time and organisational management skills that are highly valued and employed every day in his job with the Queensland Fire and
                           Emergency Services in Brisbane. As an Inspector and Manager of Operations and Business, Richard has a hands-on role managing events and resources,
                           including multi-million dollar development projects. </p>

                          <div className="row"><div className="col-md-6">
                          <Video tabIndex="-1" loop controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}>
                            <source src={VideoRichards} type="video/mp4"/>
                            <source src={VideoRichards} type="video/ogg"/>
                            Your browser does not support the video tag. See more of <a tabIndex="-1" href={process.env.PUBLIC_URL + '/doc/ADF Transitions - Richards story.mp4'} target="_blank">Richards's transition story<span className="sr-only">Opens a mp4 video file in a new tab</span></a>.
                          </Video>
                          </div></div>


                        <h2 id="poster">Poster</h2>
                        <div className="row">
                          <figure className="col-md-4 col-sm-4 col-xs-12 text-center">
                              <img src={ImgPoster} alt="Awards poster" height="450px" width="300px"></img>
                               <figcaption className="bio-position">Poster | <a href={process.env.PUBLIC_URL + '/doc/AWARDS - Poster.pdf'} target="_blank">Download (786 KB)<span className="sr-only">Opens a pdf file in a new tab</span></a></figcaption>
                          </figure>
                        </div>

                          <p className="hidden-print">
                            <span className="glyphicon glyphicon-arrow-left" aria-hidden="true"></span>
                            <Link to="/awards#top"> Back to Prime Minister’s Veterans’ Employment Awards</Link>
                          </p>
                           <p className="break"></p>



                      </section>
                      <TopLink />
                 </div>

              </div>
            </div>


        </section>

      </div>
    );
  }
}
