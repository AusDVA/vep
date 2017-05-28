import React from "react";
import Opera from '../image/opera-house.jpg';

export default class IACNews extends React.Component {

  render() {
    return (
        <div className="container">
            <div className="news row">
                <div className="col-sm-12">
                    <h2 id="News">Latest News</h2>
                </div>
                <div className="col-sm-12 col-md-6">
                    <section>
                        <div className="row">
                            <div className="col-sm-4 col-xs-6"><img alt="Opera house" src={Opera} /></div>
                            <div className="col-sm-8">
                                <h4 className="news-headline"><a href="#">Industry Advisory Committee on Veterans’ Employment Communique – 31
                                    March 2017</a></h4>
                                <p>The Industry Advisory Committee on Veterans’ Employment held its inaugural meeting in
                                    Sydney
                                    on 31 March 2017... <a href="#">Read&nbsp;more</a></p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
  }
}
