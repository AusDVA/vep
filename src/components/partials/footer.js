import React from 'react';
export default class Footer extends React.Component {

  render(){
    return (
      <footer className="panel-footer">
		<div className="container">
			<div className="row">
				<div className="col-sm-6">
					<section>
						<p><small>© Commonwealth of Australia</small></p>
					</section>
				</div>
				<div className="col-sm-6">
					<ul className="list-inline pull-right hidden-print">
						<li><a href="#">Privacy</a></li>
						<li><a href="#">Copyright</a></li>
					</ul>
				</div>
			</div>
		</div>
	</footer>
    );
  }
}
