import React from 'react';
import Opera from '../../image/opera-house.jpg';
import Worker from '../../image/worker.jpg';
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

    	<div className="container section-nobreak">
    		<div className="news row">
    			<div className="col-sm-12">
    				<h2>Recent news</h2>
    			</div>
    			<div className="col-sm-12 col-md-6">
            <section>
    					<div className="row">
    						<div className="col-sm-4 col-xs-6"><img alt="Opera house" src={Opera}/></div>
    						<div className="col-sm-8">                  
                  <p>The Industry Advisory Committee on Veterans' Employment held its inaugural meeting in Sydney on 31 March 2017.</p>
                  <ToggleDisplay show={this.state.show}>
                  <p>At the meeting, the Committee focused on establishing a number of priority areas of focus. These areas include the availability of data on the employment profile of veterans, improving the transition process from the ADF, translating skills and raising awareness of the value that former members of the ADF offer to Australian businesses.</p>

                  <p>The Committee will form Working Groups to progress its work, and will look to involve other businesses that have expressed interest in the Program.</p>

                  <p>The next meeting of the Committee will be held in mid-June.</p>
                  </ToggleDisplay><a href="#" onClick={ (e) => this.handleClick(e) }>{this.state.show ? 'Read less' : 'Read more'}</a>
    						</div>
    					</div>
              </section>

    			</div>
    			<div className="col-sm-12 col-md-6">
    				<section>
    					<div className="row">
    						<div className="col-sm-4 col-xs-6"><img alt="Disabled worker" src={Worker}/></div>
    						<div className="col-sm-8">
    							<h4 className="news-headline"><a href="#">Helping veterans to find jobs</a></h4>
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
