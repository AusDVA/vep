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
    this.state = {
      loading : true,
      error : false,
      data: []
    };
  }

  componentWillMount() {

    axios.get("http://localhost:8080/drupal8/rest_vep").then((response) => {
      const l = response.data.length;
      const bio = [];

      for (let i = 0; i < l; i++) {

        bio.push({
          name: response.data[i].title[0].value,
          id: response.data[i].field_id[0].value,
          role: response.data[i].field_role[0].value,
          company: response.data[i].field_company[0].value,
          education1: response.data[i].field_education1[0],
          education2: response.data[i].field_education2[0],
          education3: response.data[i].field_education3[0],
          education4: response.data[i].field_education4[0],
          body: response.data[i].body[0].value,
          imageurl: response.data[i].field_bio_image[0].url,
          imagealt: response.data[i].field_bio_image[0].alt

        });
      }

      this.setState({
        data: bio,
        error : false,
        loading : false
      });

    }).catch((error) => {
      this.setState({
        loading : false,
        error : true
      });
    });
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
               <i className={ this.state.loading ? "fa fa-circle-o-notch fa-spin" : "fa fa-circle-o-notch fa-spin hidden"}/>
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

                  {typeof data.education1 != "undefined" && <p className="bio-education">{data.education1.value}</p>}
                  {typeof data.education2 != "undefined" && <p className="bio-education">{data.education2.value}</p>}
                  {typeof data.education3 != "undefined" && <p className="bio-education">{data.education3.value}</p>}
                  {typeof data.education4 != "undefined" && <p className="bio-education">{data.education4.value}</p>}

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
