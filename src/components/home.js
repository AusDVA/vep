import React from 'react';
import News from './news';
import {Link} from 'react-router-dom';
export default class Home extends React.Component {

  render() {
    return (
      <div className="body-content">
        <header className="newsfeed">
  		<div className="container">
  			<div className="row">
  				<div className="col-sm-12">
  					<h1 id="content">Prime Minister’s Veterans’ Employment Program</h1>
              <span><h3>Transfer between military and civilian life </h3></span>
  				</div>
  			</div>
  		</div>
  	</header>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <div className="description">
              <div className="row">
                <div className="col-md-8">
                  <p>The Prime Minister's Veterans' Employment Program demonstrates the importance the Government places on raising awareness with employers,
                     both private and public sector, and of the value and unique experience of our veterans. <Link to="/about">Read more</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <News/>
      </div>
    );
  }
}
