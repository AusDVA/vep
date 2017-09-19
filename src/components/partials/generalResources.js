import React from "react";
import axios from "axios";

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

    axios.get("http://localhost:8080/drupal8/media").then((response) => {
      const l = response.data.length;
      const bio = [];

      for (let i = 0; i < l; i++) {

        bio.push({
          date : response.data[i].field_media_date[0].value ,
          text : response.data[i].field_media_link[0].title ,
          link : response.data[i].field_media_link[0].uri
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

                <h3>Media Releases</h3>
                <div className= { this.state.error ? "alert alert-danger" : "alert alert-danger hidden"}>
                   <strong>Error!</strong> Unfortunatly there has been a communications error, try refreshing the page.
                                           If the problem still persists please contact <a href="mailto:veteransemployment@dva.gov.au">veteransemployment@dva.gov.au</a>
                 </div>

                 <div className="col-md-12 text-center spinner">
                     <i className={ this.state.loading ? "fa fa-spinner fa-spin" : "fa fa-spinner fa-spin hidden"}/>
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
