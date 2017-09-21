import React from 'react';
import {HashLink as Link} from "react-router-hash-link";
import ToggleDisplay from "react-toggle-display";
import axios from "axios";
export default class News extends React.Component {

  constructor() {
    super();
    this.state = {
      showNews1: false,
      showNews2: false,
      showReadMore1: true,
      showReadMore2: true,
      data: [],
      data1: [],
      loading: true,
      error: false
    };
  }

  handleClickNews1(e) {
    this.setState({
      showNews1: !this.state.showNews1,
      showReadMore1: !this.state.showReadMore1
    });
    this.refs.newsFoucs1.focus();

    e.preventDefault();
    return false;
  }

  handleClickNews2(e) {
    this.setState({
      showNews2: !this.state.showNews2,
      showReadMore2: !this.state.showReadMore2
    });
    this.refs.newsFoucs2.focus();

    e.preventDefault();
    return false;
  }

  componentWillMount() {

    axios.get("http://localhost:8080/drupal/news").then((response) => {

      const news = [];
      const news1 = [];
      // first news item
      news.push({
        imageurl: response.data[0].image.src,
        imagealt: response.data[0].image.alt,
        title: response.data[0].heading,
        body1: response.data[0].body1,
        body2: response.data[0].body2,
        imagelinkint: response.data[0].image_int,
        imagelinkext: response.data[0].image_ext
      });
      //second news item
      news1.push({
        imageurl: response.data[1].image.src,
        imagealt: response.data[1].image.alt,
        title: response.data[1].heading,
        body1: response.data[1].body1,
        body2: response.data[1].body2,
        imagelinkint: response.data[1].image_int,
        imagelinkext: response.data[1].image_ext
      });

      this.setState({data: news, data1: news1, loading: false, error: false});

    }).catch((error) => {
      this.setState({loading: false, error: true});
    });
  }

  render() {

    return (
      <div className="container section-nobreak no-float-print">
        <div className="news row">

          <div className="col-sm-12">
            <h2>Recent news</h2>
          <div className= { this.state.error ? "alert alert-danger" : "alert alert-danger hidden"}>
             <strong>Error!</strong> Unfortunatly there has been a communications error, try refreshing the page.
                                     If the problem still persists please contact <a href="mailto:veteransemployment@dva.gov.au">veteransemployment@dva.gov.au</a>
           </div>

           <div className="col-md-12 text-center spinner">
               <i className={ this.state.loading ? "fa fa-spinner fa-spin" : "fa fa-spinner fa-spin hidden"}/>
           </div>
          </div>

          {this.state.data.map((data, index) => (
            <section key={index} className="section-nobreak">
              <div className="col-sm-12 col-md-5">
                <div className="row">
                  <div className="col-sm-4 col-xs-12">
                    {typeof data.imagelinkint != "undefined" && <Link to={data.imagelinkint}>
                      <img alt={data.imagealt} src={data.imageurl}/>
                    </Link>
                    }

                    {typeof data.imagelinkext != "undefined" && <a href={data.imagelinkext} target="_blank">
                      <img alt={data.imagealt} src={data.imageurl}/>
                    </a>
                    }

                    {typeof data.imagelinkint == "undefined" && typeof data.imagelinkext == "undefined" &&
                      <img alt={data.imagealt} src={data.imageurl}/>
                    }
                  </div>
                  <div className="col-sm-9 col-md-12">
                    <h3 className="news-headline">{data.title}</h3>
                    <div dangerouslySetInnerHTML={{__html: data.body1}}/>
                    <span className="no-border" tabIndex="-1" ref="newsFoucs1" autoFocus/>
                    <ToggleDisplay className="show-print" show={this.state.showNews1}>

                      <div dangerouslySetInnerHTML={{__html: data.body2}}/>

                    </ToggleDisplay>
                    <a className="hidden-print" href="#" onClick={(e) => this.handleClickNews1(e)}>{this.state.showNews1
                        ? "Read less"
                        : "Read more"}
                      <span className="sr-only">{this.state.showNews1
                          ? " about " + data.title
                          : " about " + data.title}</span>
                    </a>
                  </div>
                </div>
              </div>
            </section>
          ))}

          {this.state.data1.map((data1, index) => (
            <div key={index} className="col-sm-12 col-md-6 col-md-offset-1">
              <section className="section-nobreak">
                <div className="row">
                  <div className="col-sm-4 col-xs-12">

                    {typeof data1.imagelinkint != "undefined" && <Link to={data1.imagelinkint}>
                      <img alt={data1.imagealt} src={data1.imageurl}/>
                    </Link>
                    }

                    {typeof data1.imagelinkext != "undefined" && <a href={data1.imagelinkext} target="_blank">
                      <img alt={data1.imagealt} src={data1.imageurl}/>
                    </a>
                    }

                    {typeof data1.imagelinkint == "undefined" && typeof data1.imagelinkext == "undefined" && <img alt={data1.imagealt} src={data1.imageurl}/>
                    }
                  </div>
                  <div className="col-sm-9 col-md-12">

                    <h3 className="news-headline">{data1.title}</h3>
                    <div dangerouslySetInnerHTML={{__html: data1.body1}}/>
                    <span className="no-border" tabIndex="-1" ref="newsFoucs2" autoFocus/>
                    <ToggleDisplay className="show-print" show={this.state.showNews2}>
                      <div dangerouslySetInnerHTML={{__html: data1.body2}}/>
                    </ToggleDisplay>
                    <a className="hidden-print" href="#" onClick={(e) => this.handleClickNews2(e)}>{this.state.showNews2
                        ? 'Read less'
                        : 'Read more'}
                      <span className="sr-only">{this.state.showNews2
                          ? ' about ' + data1.title
                          : ' about ' + data1.title}</span>
                    </a>
                  </div>
                </div>
              </section>
            </div>
          ))}
        </div>
      </div>

    );
  }
}
