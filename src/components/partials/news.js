import React from 'react';
import { HashLink as Link } from "react-router-hash-link";
import Awards from "../../image/awards_Steve Willis.jpg";
import ToggleDisplay from "react-toggle-display";
export default class News extends React.Component {

  render() {

    return (

    	<div className="container section-nobreak no-float-print">
    		<div className="row">
           <section className="section-nobreak">
    			<div className="col-sm-12">
    				<h2>Recent news</h2>
    			</div>
    			<div className="col-sm-12 col-md-10">
    					<div className="row">
    						<div className="col-sm-4 col-xs-12"><Link to="/awards#top">
                   <img className="text-center" alt="Steve Willis" src={Awards}/>
                </Link>
                <span className="sr-only">"Defence force personnel take pride in their work, and everything they do, which makes them highly 
                                           sought after by employers." - Steve "Commando" Willis</span>
                </div>

                <div className="col-sm-9 col-md-12">
                
                 <h3 className="news-headline">Prime Minister’s Veterans’ Employment Awards 2018</h3>
                 <p>The Prime Minister’s Veterans’ Employment Awards recognise organisations that create employment opportunities for
                    veterans and spouses of serving Defence members, as well as veterans who have made a significant contribution to their workplace.</p>
                  <p>Nominations closed on <span className="no-wrap">22 December 2017</span> and winners will be announced 
                     at a ceremony in Canberra on <span className="no-wrap">28 March 2018.</span></p>
                  <p>Check out the <Link to="/awards#top">Awards page</Link> for more information.</p>
    						</div>

    					</div>
    			</div>     
         </section>
    		</div>
        <div className="row">
        <div className="col-sm-12 col-md-10">
    				<h2>Resources</h2>
            <p>Looking to promote your support for the Prime Minister’s Veterans’ Employment Program? 
               The <Link to="/awards-resources#top">Resources</Link> page contains a number of social media graphics, veteran success stories and videos 
              that can be used for communications and marketing.</p>
    		</div>
        </div>      
    	</div>

    );
  }
}
