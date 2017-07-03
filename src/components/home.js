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
                  <p>The Prime Minister's Veterans' Employment Program demonstrates the importance the Government places on raising awareness with employers,
                     both private and public sector, of the value and unique experience of our veterans.</p>
                    <span className="no-border" tabIndex="-1" ref="mainFocus" autoFocus />
                     <ToggleDisplay id="show-print" show={this.state.show}>
                  <section id="section-nobreak">
                     <p id="about">The Australian Defence Force (ADF) invests heavily in its servicemen and women, and they have a broad range of skills and experience.
                        Their skill-sets, including proven leadership and problem solving skills, are in strong demand and transfer readily to civilian employment. </p>
                     <p>Australian businesses of all sizes, and across all industries, have an opportunity to employ these skilled and capable individuals when they
                        separate from the ADF.  The Program aims to make businesses more aware of the value that veterans can bring to their organisations, and as a
                        result improve employment opportunities for veterans.</p>                             
                     <p>On 17 November 2016 the Prime Minister announced six initiatives under the Program.</p>
                        
                    <h2>Industry Advisory Committee on Veterans’ Employment</h2>
                    <p>The Industry Advisory Committee on Veterans’ Employment will be established to develop and
                      provide advice on practical measures to embed veterans’ employment strategies into the recruitment
                      practices of Australian businesses.  The Committee will play a role in the broader promotion of the
                      skills and professional attributes that veterans have to offer Australian businesses.</p>
                  </section>

                  <section id="section-nobreak">
                    <h2>The Prime Minister’s Veterans’ Employment Annual Awards</h2>
                    <p>The Annual Awards will recognise the achievements of businesses
                      in creating employment opportunities for veterans.  The criteria for the awards will be developed in
                      consultation with the Industry Advisory Committee on Veterans’ Employment.</p>
                                  
                    <h2>Ex-Service Organisation Industry Partnership Register</h2>
                    <p>Ex-service organisations will be able to register their interest in partnering with industry on
                      projects to promote the employment of veterans.  Industry will be able to access this information
                      when they are seeking a partner to assist in the creation of employment opportunities for veterans,
                      including in regional and remote areas of the country.</p>
                    <p>Ex-service organisations can register their interest by
                      emailing <a href="mailto:ESOindustryregister@dva.gov.au">ESOindustryregister@dva.gov.au</a></p>
                   </section>
                      
                <section id="section-nobreak">                                          
                    <h2>Department of Defence and Department of Veterans’ Affairs initiatives</h2>
                    <p>The Departments of Defence and Veterans’ Affairs will continue to improve the transition process for separating members of the Australian Defence Force (ADF). </p>
                    <p>Separating members of the ADF will receive separation documentation, including training records.  They will also receive an individual transition plan and tailored 
                       transition coaching services.  Surveys of former ADF personnel post-separation will be reinstated to assess the effectiveness of ADF transition programs and inform 
                       future initiatives, and work will continue on aligning military qualifications with civilian qualifications.</p>
                    <p>Vocational rehabilitation services for veterans with an ADF-related injury or illness will also be improved.</p>
           
                    <h2>Australian Public Service (APS) initiatives</h2>
                    <p>A new APSjobs website will be launched in 2017 and will include specific information
                      for veterans seeking employment in the APS.  An application that aligns ADF ranks to APS
                      classifications and a toolkit that provides information to veterans about working in the APS
                      are also being developed.</p>
                  </section>

                  <section id="section-nobreak">
                    <h2>Department of Employment initiatives</h2>
                    <p>The Australian Government’s jobactive website will
                      include an information page for veterans and
                      an optional ‘defence force experience desirable’
                      flag for vacancies listed on the website.  This will enable veterans seeking a job
                      to search for the most suitable vacancies and allow them to apply directly to the employer.</p>
                    <p>The Department of Employment will also develop a stronger partnership with the Department of Defence
                      to enhance the Career Transition Assistance Scheme for separating ADF members, including the
                      provision of employment planning advice and labour market information.</p>
                  </section>
              
                </ToggleDisplay><a className="hidden-print" href="#" onClick={ (e) => this.handleClick(e) }>{this.state.show ? "Read less" : "Read more"}
                <span className="sr-only">{this.state.show ? "Less about the Prime Minister's Veterans' Employment Program" : "More about the Prime Minister's Veterans' Employment Program"}</span>
              </a>

              </div>
              </div>
            </div>
          </div>
        </div>
        <section>
        <News/>
      </section>
      </div>
    );
  }
}
