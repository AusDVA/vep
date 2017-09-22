import React from "react";
import {HashLink as Link} from "react-router-hash-link";
import TopLink from "./partials/topLink";
import Loading from "./partials/loading";
import Error from "./partials/error";
import axios from "axios";

class BackLink extends React.Component {

  render() {
    return (
      <p className="hidden-print">
        <span className="glyphicon glyphicon-arrow-left" aria-hidden="true"></span>
        <Link to="/industry-advisory-committee?newsFocus=true#News"> Back to Industry Advisory Committee</Link>
      </p>
    );
  }
}

export default class NewsArchive extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: false,
      data: []
    };
  }

  componentWillMount() {

    axios.get("http://localhost:8080/drupal/iac-news-archive").then((response) => {
      const l = response.data.length;
      const news = [];

      for (let i = 0; i < l; i++) {
        news.push({
          title : response.data[i].title,
          body : response.data[i].body,
          date : response.data[i].date,
          id : response.data[i].id
        });
      }

      this.setState({data: news, error: false, loading: false});

    }).catch((error) => {
      this.setState({loading: false, error: true});
    });
  }

  render() {

    if (this.state.loading) {
      return (
        <div id="content" className="body-content container no-border" tabIndex="-1" autoFocus>
          <h1>Industry Advisory Committee News Archive</h1>
        <Loading />
      </div>

      );
    }

    if (this.state.error) {
      return (
        <div id="content" className="body-content container no-border" tabIndex="-1" autoFocus>
          <h1>Industry Advisory Committee News Archive</h1>
        <Error />
      </div>
      );
    }

    return (
      <div>
        <div id="content" className="body-content container no-border" tabIndex="-1" autoFocus>
          <div className="row">
            <ol className="breadcrumb hidden-print">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/industry-advisory-committee#News">Industry Advisory Committee</Link></li>
              <li className="active">Industry Advisory Committee News Archive</li>
            </ol>
            <div className="col-md-10" id="mainCol">

              <h1>Industry Advisory Committee News Archive</h1>
              <div className="list-contents-wrapper">
                <h2 className="list-contents-header">Contents</h2>
                <ul className="list-contents">
                  {this.state.data.map((data, index) => (
                    <li key={index}>
                      <Link to={"#" + data.id}>{data.date}</Link>
                    </li>
                  ))}

                </ul>
              </div>

              {this.state.data.map((data, index) => (
                <div key={index}>
                  <section className="section-nobreak">

                    <h2 id={data.id}>{data.title}</h2>
                    <div dangerouslySetInnerHTML={{__html: data.body}}/>
                  </section>
                  <BackLink/>
                </div>
              ))}

              <p className="break"></p>
              <TopLink/>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
