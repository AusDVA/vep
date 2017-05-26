import React from "react";
import News from "./news";
import {Link} from "react-router-dom";
import ToggleDisplay from "react-toggle-display";


export default class Home extends React.Component {

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
      <div className="body-content">      
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <div className="description">
              <div className="row">
                <div className="col-md-8">
                  <p>The Prime Minister's Veterans' Employment Program demonstrates the importance the Government places on raising awareness with employers, 
                     both private and public sector, and of the value and unique experience of our veterans.</p>
                     <ToggleDisplay show={this.state.show}>
                     <p>The Australian Defence Force (ADF) invests heavily in its servicemen and women, and they have a broad range of skills and experience. 
                        Their skill-sets, including proven leadership and problem solving skills, are in strong demand and transfer readily to civilian employment. </p>
                     <p>Australian businesses of all sizes, and across all industries, have an opportunity to acquire these skilled and capable employees when they
                        separate from the ADF.  The Program aims to make businesses more aware of the value that veterans can add to their organisations, and as a 
                        result improve employment opportunities for veterans.</p>
                    </ToggleDisplay><a href="#" onClick={ (e) => this.handleClick(e) }>{this.state.show ? 'Read less' : 'Read more'}</a>
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
