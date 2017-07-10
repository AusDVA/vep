import React from "react";
import { HashLink as Link } from "react-router-hash-link";

export default class TopLink extends React.Component {

  focus() {
    this.refs.skipNav.focus();
  }

  render() {
    return (
      <p className="hidden-print">
        <Link onClick={this.focus} to="#top">Back to top
          <span className="glyphicon glyphicon-arrow-up" aria-hidden="true"></span>
        </Link>
      </p>
    );
  }
}
