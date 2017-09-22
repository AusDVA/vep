import React from "react";
export default class Error extends React.Component {

  render() {
    return (

      <div className="alert alert-danger">
         <strong>Error!</strong> Unfortunatly there has been a communications error, try refreshing the page.
                                 If the problem still persists please contact <a href="mailto:veteransemployment@dva.gov.au">veteransemployment@dva.gov.au</a>
       </div>

    );
  }
}
