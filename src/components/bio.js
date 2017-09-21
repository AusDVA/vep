import React from "react";
import {HashLink as Link} from "react-router-hash-link";
import axios from "axios";


class BackLink extends React.Component {

  render() {
    return (
      <p className="hidden-print">
        <span className="glyphicon glyphicon-arrow-left" aria-hidden="true"></span>
        <Link to="/industry-advisory-committee?MembershipFocus=true#Membership"> Back to Industry Advisory Committee</Link>
      </p>
    );
  }
}

export default class Bio extends React.Component {

  constructor(props) {
    super(props);
      this.focus = this.focus.bind(this);
    this.state = {
      loading : true,
      error : false,
      data: []
    };
  }

  focus() {
    this.focus();
  }

  componentWillMount() {
    // get the bios from drupal
    axios.get("http://localhost:8080/drupal/vep-biographies").then((response) => {
      //length of the data response.
      const l = response.data.length;
      const bio = [];

      // loop through the data and push into variables to use in the content
      for (let i = 0; i < l; i++) {

        bio.push({
          name: response.data[i].name,
          id: response.data[i].id,
          role: response.data[i].role,
          company: response.data[i].company,
          education1: response.data[i].education1,
          education2: response.data[i].education2,
          education3: response.data[i].education3,
          education4: response.data[i].education4,
          education5: response.data[i].education5,
          body: response.data[i].body,
          imageurl: response.data[i].image.src,
          imagealt: response.data[i].image.alt

        });
      }
      // success push data into state, and remove loading icon
      this.setState({
        data: bio,
        error : false,
        loading : false
      });

      // display error message
    }).catch((error) => {
      this.setState({
        loading : false,
        error : true
      });

    });
  }

  componentDidUpdate() {
    var loc = (location.search);
    var ref = loc.substr(8);

    //focus the correct bio once payload received from drupal
    if (!this.state.loading && !this.state.error){
      this.refs[ref].focus();
    }
  }

  render() {
    return (
      <div id="content" className="body-content container no-float-print no-border" tabIndex="-1" autoFocus>
        <ol className="breadcrumb hidden-print">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/industry-advisory-committee">Industry Advisory Committee</Link></li>
          <li className="active">Member Biographies</li>
        </ol>
        <h1 className="hidden-print">Member Biographies</h1>
        <h2 className="print-only" aria-hidden="true">Industry Advisory Committee on Veterans' Employment Member biographies</h2>

        <div>

          <div className= { this.state.error ? "alert alert-danger" : "alert alert-danger hidden"}>
             <strong>Error!</strong> Unfortunatly there has been a communications error, try refreshing the page.
                                     If the problem still persists please contact <a href="mailto:veteransemployment@dva.gov.au">veteransemployment@dva.gov.au</a>
           </div>

           <div className="col-md-12 text-center spinner">
               <i className={ this.state.loading ? "fa fa-spinner fa-spin" : "fa fa-spinner fa-spin hidden"}/>
           </div>

          {this.state.data.map((data, index) => (
            <section key={index} ref={data.id  +"Bio"} tabIndex="-1" className="bio-section no-border" id={data.id}>
              <div className="row">
                <div className="col-xs-6 col-md-3 col-sm-3">
                  <div className="thumbnail">
                    <img src={data.imageurl} alt={data.imagealt}/>
                  </div>
                </div>

                <div className="col-md-8">
                  <p className="bio-description">{data.name}</p>
                  <p className="bio-description">{data.role}</p>
                  <p className="bio-description">{data.company}</p>

                  {typeof data.education1 != "undefined" && <p className="bio-education">{data.education1}</p>}
                  {typeof data.education2 != "undefined" && <p className="bio-education">{data.education2}</p>}
                  {typeof data.education3 != "undefined" && <p className="bio-education">{data.education3}</p>}
                  {typeof data.education4 != "undefined" && <p className="bio-education">{data.education4}</p>}
                  {typeof data.education5 != "undefined" && <p className="bio-education">{data.education4}</p>}

                  <div className="break" dangerouslySetInnerHTML={{__html: data.body}}/>
                </div>
              </div>
              <BackLink/>
            </section>
          ))}
        </div>
      </div>

    );
  }
}
