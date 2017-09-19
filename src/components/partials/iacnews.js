import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import axios from "axios";


export default class IACNews extends React.Component {
  constructor(props) {
   super(props);
   this.focus = this.focus.bind(this);
   this.state = {
     loading : true,
     error : false
   };
 }

 componentWillMount() {
   axios.get("http://localhost:8080/drupal8/iac_latest_news").then((response) => {


     this.setState({
       loading : false,
       error : false,
       body : response.data[0].body[0].value
     });


   }).catch((error) => {
     this.setState({
       loading: false,
       error : true
     });
   });

 }

 focus() {
   this.refs.iacNews.focus();
 }

 componentDidMount() {
    const LOCATION = (location.search);

    if (LOCATION == "?newsFocus=true") {
      this.focus();
    }
  }

  render() {
    return (
        <div id="News" className="no-border" tabIndex="-1" ref="iacNews">
  <h2>Latest News</h2>
  <div dangerouslySetInnerHTML={{__html: this.state.body}}/>
  <div className= { this.state.error ? "alert alert-danger" : "alert alert-danger hidden"}>
     <strong>Error!</strong> Unfortunatly there has been a communications error, try refreshing the page.
                             If the problem still persists please contact <a href="mailto:veteransemployment@dva.gov.au">veteransemployment@dva.gov.au</a>
   </div>

   <div className="col-md-12 text-center spinner">
       <i className={ this.state.loading ? "fa fa-spinner fa-spin" : "fa fa-spinner fa-spin hidden"}/>
   </div>

      <p><Link to="/news-archive#top">Industry Advisory Committee News Archive</Link></p>
   </div>
    );
  }
}
