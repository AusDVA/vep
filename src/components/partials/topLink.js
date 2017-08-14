import React from "react";
import { HashLink as Link } from "react-router-hash-link";

export default class TopLink extends React.Component {

   constructor(props) {
    super(props);
    this.blur = this.blur.bind(this);
  }

  blur() {
   document.activeElement.blur();
  }

  render() {
    return (
      <p className="hidden-print">
        <Link onClick={this.blur} to="#top">Back to top
          <span className="glyphicon glyphicon-arrow-up" aria-hidden="true"></span>
        </Link>
      </p>
    );
  }
}


