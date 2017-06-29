import React from "react";
import { HashLink as Link } from "react-router-hash-link";

export default class Privacy extends React.Component {

  render() {
    return (
      <div>
        <section>
          <div id="content" className="body-content container no-border" tabIndex="-1" autoFocus>
            <div className="row">
              <div className="col-md-10" id="mainCol">
                <h1>Privacy</h1>

                   <div className="list-contents-wrapper">
                      <h2 className="list-contents-header">Contents</h2>
                          <ul className="list-contents" id="sidebar">
                              <li><Link to="#privacy-policy">DVA Privacy Policy</Link></li>
                              <li><Link to="#privacy-notices">Privacy Notices</Link></li>
                              <li><Link to="#complaints">How to make a complaint</Link></li>
                              <li><Link to="#security"> Security of your information when visiting our website</Link></li>                           
                              <li><Link to="#site-visit-data">Site visit data</Link></li>
                              <li><Link to="#cookies">Cookies</Link></li>
                              <li><Link to="#email">Use of email</Link></li>
                              <li><Link to="#subscription-lists">Subscription lists</Link></li>
                              <li><Link to="#spam">No spam</Link></li>
                          </ul>
                   </div>
                <section id="section-nobreak">
                  <p>This website is administered by the Department of Veterans' Affairs (DVA). Your privacy is important to us. 
                     DVA is bound by the Privacy Act 1988 (the Privacy Act) and the Australian Privacy Principles (APPs). The APPs 
                     regulate the handling of personal information by Australian government agencies and businesses under the Privacy Act.</p> 
                  <p>DVA collects personal information in order to deliver government programs for war veterans, members of the Australian 
                     Defence Force, members of the Australian Federal Police and their dependents.</p>

                <h2 id="privacy-policy">DVA Privacy Policy</h2>
                  <p>The <a href="https://www.dva.gov.au/sites/default/files/files/site-information/DVA_Privacy_Policy_2016.rtf" target="_blank">DVA Privacy Policy (RTF 2.8 MB)<span className="sr-only">Opens a Rich Text Format (RTF) file in a new tab</span></a> tells 
                     you how we manage your personal information. This includes:</p>  
                  
                    <ul>
                        <li>the kinds of personal information that we collect and hold about you;</li>
                        <li>how we collect your personal information;</li>  
                        <li>how we hold your personal information;</li>
                        <li>the purposes for collecting, holding, using and disclosing your personal information;</li>
                        <li>how you may access your personal information held by us and correct that information where it is incorrect;</li>
                        <li>how you may make a complaint about the way we collect, hold, use or disclose personal information, and how we will deal with privacy related complaints;</li>
                        <li>whether we will (or are likely to) disclose your personal information to overseas recipients and the countries where such recipients may be located.</li>                                                    
                    </ul>   
                  </section>

                  <section id="section-nobreak">
                    <h2 id="privacy-notices">Privacy Notices</h2>
                      <p>DVA is required under the Privacy Act to notify you of certain matters when it collects personal information about you. The below privacy notices, together 
                         with the DVA Privacy Policy, discuss the purposes for which DVA collects personal information, the usual parties to whom DVA may disclose this information and more.</p>
                      <ul>
                        <li><a target="_blank" href="https://www.dva.gov.au/site-information/privacy/privacy-notice-%E2%80%93-financial-and-health-information">Collection of financial and health information<span className="sr-only">(this link will open in a new tab)</span></a></li> 
                        <li><a target="_blank" href="https://www.dva.gov.au/site-information/privacy/privacy-notice-%E2%80%93-commemorations">Commemoration<span className="sr-only">(this link will open in a new tab)</span></a></li>
                        <li><a target="_blank" href="https://www.dva.gov.au/site-information/privacy/privacy-notice-%E2%80%93-human-resources">Human resources<span className="sr-only">(this link will open in a new tab)</span></a></li>
                      </ul>

                      <h2 id="complaints">How to make a complaint</h2>
                        <p>You can complain to us in writing about how we have handled your personal information. For more information on how DVA manages complaints, compliments 
                           and feedback, please refer to DVA’s <a target="_blank" href="https://www.dva.gov.au/contact/feedback">Feedback Management Policy<span className="sr-only">(this link will open in a new tab)</span></a>.</p>
                  </section>

                  <section id="section-nobreak">
                      <h2 id="security">Security of your information when visiting our website </h2>
                        <p>DVA applies a range of security controls to protect its websites from unauthorised access. However, users should be aware that the World Wide Web is
                           an unsecured public network. There is a risk using this website a user's transactions are being viewed, intercepted or modified by third parties. </p>
                        <p>Some interactive services on this website may request personal information as part of the provision of the service. DVA encrypts all data transmitted
                           between your computer's web browser and DVA's computers when you make use of any of these services. The encryption process used by DVA is secure socket
                           layer (SSL). For SSL encryption to work, your browser must support SSL. </p>
                        <p>External sites not operated by DVA that are linked to this site are outside DVA's control and you are advised to review their privacy and security 
                           statements when visiting those sites.</p>

                        <h2 id="site-visit-data">Site visit data</h2>
                          <p>DVA makes a record of your visit and logs the following information for statistical purposes:</p>
                              <ul>
                                <li>the user's server address</li>
                                <li>the user's top level domain name (e.g. .com, .gov, .au, .uk etc.)</li>
                                <li>the date and time of the visit to the site</li>
                                <li>the pages accessed and documents downloaded</li>
                                <li>the previous site visited</li>
                                <li>the type of browser used</li>
                                <li>the type of device used.</li>
                              </ul>
                          <p>DVA will not make any attempt to identify users or their browsing activities except, in the unlikely event of an investigation, 
                             where a law enforcement agency may exercise a warrant to inspect the internet service provider's logs.</p>
                    </section>

                    <section id="section-nobreak">                         
                          <h2 id="cookies">Cookies</h2>
                            <p>A cookie is a collection of information, usually including a username and the current date and time, stored on the local computer 
                               of a person using the World Wide Web, used chiefly by websites to identify users who have previously registered or visited their site.</p>
                            <p>Cookies can be 'persistent' or 'session-based':</p>
                                <ul>
                                  <li>persistent cookies are stored on your computer, contain an expiration date, and may be used to track your browsing behaviour upon 
                                      returning to the website from which the cookie was issued</li>
                                  <li>session-based cookies are short-lived, are used only during a browsing session, and expire when you close your browser.</li>                                  
                                </ul>
                            <p>This website may use session cookies during a search query of the website.  No other cookies are employed on the website except for those 
                               associated with the search engine and analytics. Website statistics for DVA websites are generated from the web logs as outlined above under <Link to="#site-visit-data">Site visit data</Link>.</p>
                            <p>Once you have closed your browser, the session cookie set by the DVA website is destroyed and DVA does not maintain any personal information 
                               that might identify you should you visit our website at a later date.</p>
                            <p>DVA does not use persistent cookies on this website.</p>

                            <h2 id="email">Use of email</h2>
                              <p>If you do not wish to contact DVA through email or use of an online form you can contact DVA through other means, such as post, fax or telephone 
                                (see <a target="_blank" href="https://www.dva.gov.au/contact">DVA’s contact details<span className="sr-only">(this link will open in a new tab)</span></a>).
                                 If you choose to use email to request information of a personal nature, DVA may provide that information to you by replying to your email. If you do not want DVA to
                                 provide personal information to you using email, please include a postal address, fax number and/or telephone number so that you can be contacted by your preferred method.</p>
                              <p>DVA also has a Secure Mail Facility for the sending of sensitive emails. Currently, external parties are not able to initiate and send sensitive e-mails via this facility. 
                                 External parties are only able to respond to sensitive e-mails sent to them by DVA. See <a target="_blank" href="https://www.dva.gov.au/site-help/sensitive-emails">further information and tips for using the Secure Mail Facility<span className="sr-only">(this link will open in a new tab)</span></a>.</p>
                      </section>

                      <section id="section-nobreak">
                            <h2 id="subscription-lists">Subscription lists</h2>
                              <p>If you subscribe to a mailing list on any of DVA's websites, your email address and any other personal information that you might provide will be maintained
                                 on our mailing list. The mailing list is hosted by an external service provider. It will only be used for the purpose for which you have provided it
                                 and will not be added to another mailing list without your prior consent, which DVA will seek through a request in writing. We will not use your email address 
                                 for any other purpose and will not disclose it without your consent.</p>

                              <h2 id="spam">No spam</h2>
                                <p>The publication of electronic addresses on this website is for the information of users. DVA does not authorise the receipt of commercial electronic 
                                   messages (generally known as spam) at any published electronic address. They are to be used for legitimate correspondence only.</p>

                              <p className="hidden-print">
                                  <Link to="#top">Back to top
                                      <span className="glyphicon glyphicon-arrow-up" aria-hidden="true"></span>
                                  </Link>
                             </p>
                      </section>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}











