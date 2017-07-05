import React from 'react';
import IAC_Img from "../../image/iac.png";
import JobActive from "../../image/jobactive.png";
import ToggleDisplay from "react-toggle-display";
export default class News extends React.Component {

  constructor() {
   super();
   this.state = { showNews1: false,
                  showNews2: false,
                  showReadMore1: true,
                  showReadMore2: true};
  }

  handleClickNews1(e) {
   this.setState({
     showNews1: !this.state.showNews1,
     showReadMore1: !this.state.showReadMore1
   });
     this.refs.newsFoucs1.focus();

   e.preventDefault();
   return false;
  }

  handleClickNews2(e) {
   this.setState({
     showNews2: !this.state.showNews2,
     showReadMore2: !this.state.showReadMore2
   });
     this.refs.newsFoucs2.focus();

   e.preventDefault();
   return false;
  }

  render() {

    return (

    	<div className="container section-nobreak no-float-print">
    		<div className="news row">
           <section className="section-nobreak">
    			<div className="col-sm-12">
    				<h2>Recent news</h2>
    			</div>
    			<div className="col-sm-12 col-md-5">
    					<div className="row">
    						<div className="col-sm-4 col-xs-12"><img alt="Group photo of Industry Advisory Committee members." src={IAC_Img}/></div>
    						<div className="col-sm-9 col-md-12">
                  <h3 className="news-headline">Industry Advisory Committee meets for the second time</h3>
                   <p>The Industry Advisory Committee on Veterans’ Employment met for the second time on <span className="no-wrap">16 June 2017.</span> The Committee heard updates
                      on the work being undertaken across the eight priority areas it had identified at its inaugural meeting on <span className="no-wrap">31 March 2017.</span></p>
                  <span className="no-border" tabIndex="-1" ref="newsFoucs1" autoFocus />
                  <ToggleDisplay className="show-print" show={this.state.showNews1}>
                    <p>The Committee noted progress on data collection and developing the business case for employing veterans.  Several working groups have recommended
                       the establishment of an accreditation process for employers and identified the need to facilitate contact between potential employers and transitioning
                       and former ADF members.  The Committee also discussed the importance of improving employment opportunities for spouses of serving members and planning
                       for the Prime Minister’s Veterans’ Employment Annual Awards.</p>
                  <p>The Committee acknowledged that there were overlaps in the eight focus areas and agreed to combine work into five priority areas:</p>
                  <ul>
                    <li>data, research and targets</li>
                    <li>human resources policies, accreditation, retention, translation of skills</li>
                    <li>communications (branding, awareness, transition seminars, website, job fairs)</li>
                    <li>spouse employment of serving ADF members</li>
                    <li>Prime Minister’s Veterans’ Employment Annual Awards</li>
                 </ul>
               <p>The Committee was also provided with a demonstration of the Veterans’ Employment Program’s website.  This website
                  will provide information about the Program, deliver the Ex-service Organisation Industry Partnership Register and support the Annual Awards.</p>
                </ToggleDisplay><a className="hidden-print" href="#" onClick={ (e) => this.handleClickNews1(e) }>{this.state.showNews1 ? "Read less" : "Read more"}
                <span className="sr-only">{this.state.showNews1 ? "Less about the Industry Advisory Committee's inaugural meeting" :
                                                                  "More about the Industry Advisory Committee's inaugural meeting"}</span></a>
    						</div>
    					</div>
    			</div>
         </section>




    			<div className="col-sm-12 col-md-6 col-md-offset-1">
    				<section className="section-nobreak">
    					<div className="row">
    						<div className="col-sm-4 col-xs-12"><img className="text-center" alt="Jobactive an Australian Government Initiative" src={JobActive}/></div>
    						<div className="col-sm-9 col-md-12">

    							<h3 className="news-headline">Helping veterans to find jobs</h3>
    							<p>jobactive is the Australian Government’s way to get more Australians into work, by connecting job seekers with employers.  Under the Prime Minister’s Veterans’ Employment Program, jobactive has been enhanced.</p>
                    <span className="no-border" tabIndex="-1" ref="newsFoucs2" autoFocus />
                    <ToggleDisplay className="show-print" show={this.state.showNews2}>
                  <p>The <a target="_blank" href="https://www.jobactive.gov.au/">jobactive website<span className="sr-only">(this link will open in a new tab)</span></a> now
                     enables employers to select an optional ‘defence force experience desirable’ flag, and veterans
                     can <a target="_blank" href="https://jobsearch.gov.au/job/search/ex-adf">search for jobs<span className="sr-only">(this link will open in a new tab)</span></a> that
                     employers have flagged.</p>
                  <p>The jobactive website also provides <a target="_blank" href="https://jobsearch.gov.au/jobseeker-info/employment-assistance-for-veterans">information tailored for veteran jobseekers.<span className="sr-only">(this link will open in a new tab)</span>
                  </a></p>
                </ToggleDisplay><a className="hidden-print" href="#" onClick={ (e) => this.handleClickNews2(e) }>{this.state.showNews2 ? 'Read less' : 'Read more'}
                 <span className="sr-only">{this.state.showNews2 ? 'Less about jobactive' : 'More about jobactive'}</span>
               </a>
    						</div>
    					</div>
    				</section>
    			</div>
    		</div>
    	</div>

    );
  }
}
