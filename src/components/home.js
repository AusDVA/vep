import React from "react";
import News from "./partials/news";
import ToggleDisplay from "react-toggle-display";


export default class Home extends React.Component {

   constructor() {
    super();
    this.state = { show: false,
                   showReadMore: true };
  }

  handleClick(e) {
    this.setState({
      show: !this.state.show,
      showReadMore: !this.state.showReadMore
    });
      this.refs.mainFocus.focus();

    e.preventDefault();
    return false;
  }

  render() {
    return (
      <div className="body-content">
        <div className="jumbotron jumbotron-fluid">
          <div className="container no-border" id="content" tabIndex="-1" autoFocus>
            <div className="description">
              <div className="row">
                <div className="col-md-10">
                  <h1 className="page-title">The Prime Minister's Veterans' Employment Program</h1>
                  <p>The Prime Minister's Veterans' Employment Program demonstrates the importance the Government places on raising the awareness of
                     private and public sector, employers of the value and unique experience of our veterans.</p>
                    <span className="no-border" tabIndex="-1" ref="mainFocus" autoFocus />
                     <ToggleDisplay className="show-print" show={this.state.show}>
                  <section className="section-nobreak">
                     <p id="about">The Australian Defence Force (ADF) invests heavily in its servicemen and women, and they have a broad range of skills and experience.
                        Their skill-sets, including proven leadership and problem solving skills, are in strong demand and transfer readily to civilian employment. </p>
                     <p>Australian businesses of all sizes, and across all industries, have an opportunity to employ these skilled and capable individuals when they
                        separate from the ADF.  By making businesses more aware of the value that veterans can bring to their organisations, employment opportunities for veterans will increase.</p>
                     <p>On 17 November 2016 the Prime Minister announced six initiatives under the Program.</p>

                    <h2>Industry Advisory Committee on Veterans’ Employment</h2>
                    <p>An Industry Advisory Committee on Veterans’ Employment has been established to develop and
                      provide advice on practical measures to embed veterans’ employment strategies into the recruitment
                      practices of Australian businesses.  The Committee will play a role in the broader promotion of the
                      skills and professional attributes that veterans have to offer Australian businesses.</p>
                  </section>

                  <section className="section-nobreak">
                    <h2>The Prime Minister’s Veterans’ Employment Annual Awards</h2>
                    <p>The Annual Awards will recognise achievements in the creation of employment opportunities for veterans.</p>

                    <h2>Ex-service Organisation Industry Partnership Register</h2>
                    <p>Ex-service organisations will be able to register their interest in partnering with industry on
                      projects to promote the employment of veterans.  Industry will be able to access this information
                      when they are seeking a partner to assist in the creation of employment opportunities for veterans,
                      including in regional and remote areas of the country.</p>
                    <p>Ex-service organisations can register their interest by
                      emailing <a href="mailto:ESOindustryregister@dva.gov.au">ESOindustryregister@dva.gov.au</a></p>
                   </section>

                <section className="section-nobreak">
                    <h2>Department of Defence and Department of Veterans’ Affairs initiatives</h2>
                    <p>The Departments of Defence and Veterans’ Affairs continue to improve the transition process for separating members of the Australian Defence Force (ADF). </p>
                    <p>Separating members of the ADF receive separation documentation, including training records.  They also receive an individual transition plan and tailored
                       transition coaching services.  Surveys of former ADF personnel post-separation have been reinstated to assess the effectiveness of ADF transition programs and inform
                       future initiatives, and work will continue on aligning military qualifications with civilian qualifications.</p>

                    <h2>Australian Public Service (APS) initiatives</h2>
                    <p>The APSjobs website includes specific information
                      for veterans seeking employment in the APS.  An application that aligns ADF ranks to APS
                      classifications and a toolkit that provides information to veterans about working in the APS
                      are also available.</p>
                  </section>

                  <section className="section-nobreak">
                    <h2>Department of Jobs and Small Business initiatives</h2>
                    <p>The Australian Government’s jobactive website now
                      includes an information page for veterans and
                      an optional ‘defence force experience desirable’
                      flag that can be used by employers to advertise job vacancies on the website.  This enables veterans seeking a job
                      to search for the most suitable vacancies and allows them to apply directly to the employer.</p>
                    <p>The Department of Jobs and Small Business will also develop a stronger partnership with the Department of Defence
                      to enhance the Career Transition Assistance Scheme for separating ADF members, including the
                      provision of employment planning advice and labour market information.</p>
                  </section>

                </ToggleDisplay><a className="hidden-print" href="#" onClick={ (e) => this.handleClick(e) }>{this.state.show ? "Read less" : "Read more"}
                <span className="sr-only">{this.state.show ? "Less about the Prime Minister's Veterans' Employment Program" : " about the Prime Minister's Veterans' Employment Program"}</span>
              </a>

              </div>
              </div>
            </div>
          </div>
        </div>
        <section>
        <News/>
      </section>
      <div id="latest-news-subscribe" className="jumbotron jumbotron-fluid hidden-print">
        <div className="container no-border">
            <div className="row">
              <div className="col-md-6">
                <h3 id="latest-news-h3">Subscribe to receive updates</h3>
                <p>  Subscribe to receive the latest information and updates on the <span className="no-wrap">Prime Minister’s</span> <span className="no-wrap">Veterans’ Employment Program.</span></p>
            </div>

            <div className="col-md-5">
            <div className="news-wrapper text-center">
                  <div id="subcribe"><a href="https://eepurl.com/c-ABGj" target="_blank" rel="noopener"><span className="subcribe subcribe-news">SUBSCRIBE FOR UPDATES</span>
                  <span className="sr-only">(this link will open in a new tab)</span></a></div>
            </div>
          </div>
            </div>

        </div>
      </div>
      </div>
    );
  }
}
