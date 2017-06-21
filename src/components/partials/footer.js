import React from 'react';
import {Link} from 'react-router-dom';
export default class Footer extends React.Component {

  render(){
    return (
      <footer className="panel-footer">
		<div className="container">
			<div className="row">
				<div className="col-sm-6">
					<section>
						<p><small><span className="sr-only">Copyright</span> <i className="fa fa-copyright" aria-hidden="true"></i> Commonwealth of Australia</small></p>
					</section>
				</div>
				<div className="col-sm-6">
					<ul className="list-inline pull-right hidden-print">
						<li><Link to="/accessibility">Accessibility</Link></li>
						<li><Link to="/copyright">Copyright</Link></li>
						<li><Link to="/disclaimer">Disclaimer</Link></li>
						<li><Link to="/privacy">Privacy</Link></li>									
					</ul>
				</div>
			</div>
		</div>
	</footer>
    );
  }
}
