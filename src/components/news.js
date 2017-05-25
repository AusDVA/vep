import React from 'react';
import Opera from '../image/opera-house.jpg';
import Worker from '../image/worker.jpg';
export default class News extends React.Component {

  render() {

    return (

    	<div className="container">
    		<div className="news row">
    			<div className="col-sm-12">
    				<h2>Recent news</h2>
    			</div>
    			<div className="col-sm-12 col-md-6">
            <section>
    					<div className="row">
    						<div className="col-sm-4"><img alt="Opera house" src={Opera}/></div>
    						<div className="col-sm-8">
    							<h4 className="news-headline"><a href="#">Industry Advisory Committee's inaugural meeting</a></h4>
    							<p>The Industry Advisory Committee on Veterans’ Employment held its inaugural meeting in Sydney on 31 March 2017... <a href="#">Read&nbsp;more</a></p>
    						</div>
    					</div>
              </section>

    			</div>
    			<div className="col-sm-12 col-md-6">
    				<section>
    					<div className="row">
    						<div className="col-sm-4"><img alt="Disabled worker" src={Worker}/></div>
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
