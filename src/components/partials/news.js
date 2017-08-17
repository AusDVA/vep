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
                 <h3 className="news-headline">Meeting of the Industry Advisory Committee</h3>
                   <p>The Industry Advisory Committee on Veterans’ Employment met on <span className="no-wrap">4 August 2017.</span> Five working 
                      groups, established by the Committee to focus on priority areas, presented updates and recommendations for the Committee’s 
                      program of work going forward.  This will inform the Committee’s report to the Minister for Veterans’ Affairs by the end of September. 
                    </p>
                  <span className="no-border" tabIndex="-1" ref="newsFoucs1" autoFocus />
                  <ToggleDisplay className="show-print" show={this.state.showNews1}>
                      <p>The Committee was also updated on the work being done by McKinsey & Company for a group of employers assembled by <span className="no-wrap">JP Morgan</span> last
                        year.  This work will provide vital evidence and recommendations that will inform the Committee’s work.</p>
                     <p>A representative of Townsville Enterprise also provided the Committee with information on Townsville’s employment situation and outlook.  Townsville 
                        has close ties with the Australian Defence Force and an interest in the work of the Committee.</p>        
                     <p>The Committee will next meet to finalise its report to the Minister.</p>
                </ToggleDisplay><a className="hidden-print" href="#" onClick={ (e) => this.handleClickNews1(e) }>{this.state.showNews1 ? "Read less" : "Read more"}
                <span className="sr-only">{this.state.showNews1 ? " about meeting of the Industry Advisory Committee" :
                                                                  " about meeting of the Industry Advisory Committee"}</span></a>
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
                 <span className="sr-only">{this.state.showNews2 ? ' about jobactive' : ' about jobactive'}</span>
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
