import React from "react";
import axios from "axios";
import Error from "./error";
import Loading from "./loading";

export default class GeneralResourses extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading : true,
      error : false,
      data: []
    };
  }

  componentWillMount() {
    //get the current url for the zuul request
    const URL = location.protocol + "//" + location.hostname + ":8999/" ;
    axios.get(URL + "media-release").then((response) => {
      const l = response.data.length;
      const bio = [];

      for (let i = 0; i < l; i++) {

        bio.push({
          date : response.data[i].media_date ,
          text : response.data[i].link_text ,
          link : response.data[i].link_url
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
            <div>

                <h3>Australian Defence Force Separation Data</h3>
                <p><a href={process.env.PUBLIC_URL + '/doc/ADF Separations 2012 to 2016.xlsx'} title="ADF Separations 2012 to 2016.xlsx">ADF Separations 2012-2016 by State and Category (XLSX 808 KB)</a></p>

                <div>
                  <h3>Media Releases</h3>

                  {this.state.loading &&
                    <Loading />
                  }

                  {this.state.error &&
                    <Error />
                  }
                </div>

               <ul className="list-unstyled">
                 {this.state.data.map((data, index) => (
                   <li key={index}> {data.date} <a target="_blank" href={data.link}>{data.text} <span className="sr-only">(this link will open in a new tab)</span> </a></li>
                 ))}
               </ul>
            </div>
        );
    }
}
