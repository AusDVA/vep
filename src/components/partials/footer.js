import React from "react";
import { HashLink as Link } from "react-router-hash-link";
export default class Footer extends React.Component {

  render(){
    return (
      <footer className="panel-footer hidden-print">
		<div className="container">
			<div className="row" id="mobile-footer">
				<div className="col-sm-6 col-xs-12 col-md-3 text-center">

						<p><small><span className="sr-only">Copyright</span> <i className="fa fa-copyright" aria-hidden="true"></i> Commonwealth of Australia</small></p>

				</div>
				<div className="col-sm-6 col-xs-12 col-md-10">
					<ul className="list-inline hidden-print text-center">
						<li className="col-sm-4 col-xs-12"><Link to="/accessibility#top">Accessibility</Link></li>
						<li className="col-sm-4 col-xs-12"><Link to="/copyright#top">Copyright</Link></li>
						<li className="col-sm-4 col-xs-12"><Link to="/disclaimer#top">Disclaimer</Link></li>
						<li className="col-sm-4 col-xs-12"><Link to="/privacy#top">Privacy</Link></li>
            <li className="col-sm-4 col-xs-12"><a href="http://eepurl.com/c-ABGj" target="_blank" rel="noopener">Subscribe
              <span className="sr-only">(this link will open in a new tab)</span></a></li>
					</ul>
				</div>
			</div>

      <div className="row desktop-footer">
				<div className="col-sm-4 col-md-3 text-left">
            <p><small><span className="sr-only">Copyright</span> <i className="fa fa-copyright" aria-hidden="true"></i> Commonwealth of Australia</small></p>


				</div>

				<div className="col-sm-8 col-md-6 pull-right">
					<ul className="list-inline  hidden-print">

						<li className="col-sm-4 col-md-2"><Link to="/accessibility#top">Accessibility</Link></li>
						<li className="col-sm-4 col-md-2"><Link to="/copyright#top">Copyright</Link></li>
						<li className="col-sm-4 col-md-2"><Link to="/disclaimer#top">Disclaimer</Link></li>
						<li className="col-sm-4 col-md-2"><Link to="/privacy#top">Privacy</Link></li>
            <li className="col-sm-4 col-md-2"><a href="http://eepurl.com/c-ABGj" target="_blank" rel="noopener">Subscribe
                <span className="sr-only">(this link will open in a new tab)</span></a></li>
					</ul>
				</div>
			</div>
		</div>
	</footer>
    );
  }
}
