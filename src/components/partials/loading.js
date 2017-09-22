import React from "react";
export default class Loading extends React.Component {

  render() {
    return (

      <div className="col-md-12 text-center spinner" aria-busy="true">
          <i className="fa fa-spinner fa-spin"/>
      </div>

    );
  }
}
