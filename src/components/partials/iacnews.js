import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import Error from "./error";
import Loading from "./loading";
import axios from "axios";


export default class IACNews extends React.Component {
  constructor(props) {
   super(props);
   this.focus = this.focus.bind(this);
   this.state = {
     loading : true,
     error : false,
     body : ""
   };
 }

 componentWillMount() {
   // get the latest news item from drupal
   axios.get("http://localhost:8080/drupal/iac-latest-news").then((response) => {

     // success push the news item into state
     this.setState({
       loading : false,
       error : false,
       body : response.data[0].body
     });

     //error, diplay error message
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

  {this.state.loading &&
    <Loading />
  }

  {this.state.error &&
    <Error/>
  }

      <p><Link to="/news-archive#top">Industry Advisory Committee News Archive</Link></p>
   </div>
    );
  }
}
