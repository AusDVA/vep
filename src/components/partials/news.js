import React from 'react';
import IAC_Img from "../../image/iac.png";
import JobActive from "../../image/jobactive.png";
import ToggleDisplay from "react-toggle-display";
export default class News extends React.Component {

  constructor() {
   super();
   this.state = { show: false };
  }

  handleClick(e) {
   this.setState({
     show: !this.state.show
   });

   e.preventDefault();
   return false;
  }

  render() {

    return (

    	<div className="container section-nobreak no-float-print">
    		<div className="news row">
    			<div className="col-sm-12">
    				<h2>Recent news</h2>
    			</div>
    			<div className="col-sm-12 col-md-5">
            <section>
    					<div className="row">
    						<div className="col-sm-4 col-xs-12"><img alt="Group photo of Industry Advisory Committee members." src={IAC_Img}/></div>
    						<div className="col-sm-9 col-md-12">
                  <h4 className="news-headline">Industry Advisory Committee's inaugural meeting</h4>
                  <p>The Industry Advisory Committee on Veterans' Employment held its inaugural meeting in Sydney on <span className="no-wrap">31 March 2017.</span></p>
                  <ToggleDisplay show={this.state.show}>
                  <p>At the meeting, the Committee focused on establishing a number of priority areas of focus. These areas include the availability of data on the employment profile of veterans, improving the transition process from the ADF, translating skills and raising awareness of the value that former members of the ADF offer to Australian businesses.</p>

                  <p>The Committee will form Working Groups to progress its work, and will look to involve other businesses that have expressed interest in the Program.</p>

                  <p>The next meeting of the Committee will be held in mid-June.</p>
                </ToggleDisplay><a className="hidden-print" href="#" onClick={ (e) => this.handleClick(e) }>{this.state.show ? 'Read less' : 'Read more'}</a>
    						</div>
    					</div>
              </section>

    			</div>
    			<div className="col-sm-12 col-md-6 col-md-offset-1">
    				<section>
    					<div className="row">
    						<div className="col-sm-4 col-xs-12"><img className="text-center" alt="JobActive Logo" src={JobActive}/></div>
    						<div className="col-sm-9 col-md-12">
    							<h4 className="news-headline">Helping veterans to find jobs</h4>
    							<p>Jobactive is a board to help veterans to find jobs where ADF experience is valued... <a href="#">Read&nbsp;more</a></p>
    						</div>
    					</div>
    				</section>
    			</div>
    		</div>
    	</div>

    );
  }
}
