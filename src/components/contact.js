import React from "react";
export default class Contact extends React.Component {

  render() {

    return (
      <div className="body-content container no-border" id="content" tabIndex="-1" autoFocus>
        <div className="row">
          <div className="col-md-10" id="mainCol">

            <h1>Contact</h1>
            <h2 className="contact-subheader" aria-hidden="true">General enquiries (8am-5pm, Monday-Friday)</h2>
            <h2 className="sr-only">General enquiries (8am-5pm, Monday-Friday)</h2>
            <p><span className="head">Telephone: </span>133 254 </p>
            <p><span className="head">Regional callers: </span>1800 555 254 </p>
            <p><span className="head">International callers: </span>61 2 6289 1133 </p>

            <h2 className="contact-subheader">Postal address</h2>
              <p>Department of Veterans' Affairs</p>
              <p>GPO Box 9998</p>
              <p>Canberra ACT 2601</p>

            <h2 className="contact-subheader">Email</h2>
             <p><a href="mailto:veteransemployment@dva.gov.au">veteransemployment@dva.gov.au</a> </p>
          </div>
        </div>
    </div>


    );
  }
}
