import React from "react";
import { HashLink as Link } from "react-router-hash-link";
export default class Footer extends React.Component {

  render(){
    return (
      <footer className="panel-footer hidden-print">
		<div className="container">
			<div className="row">
				<div className="col-sm-6">
					<section>
						<p><small><span className="sr-only">Copyright</span> <i className="fa fa-copyright" aria-hidden="true"></i> Commonwealth of Australia</small></p>
					</section>
				</div>
				<div className="col-sm-6">
					<ul className="list-inline pull-right">
						<li><Link to="/accessibility#top">Accessibility</Link></li>
						<li><Link to="/copyright#top">Copyright</Link></li>
						<li><Link to="/disclaimer#top">Disclaimer</Link></li>
						<li><Link to="/privacy#top">Privacy</Link></li>									
					</ul>
				</div>
			</div>
		</div>
	</footer>
    );
  }
}
