import React from "react";
import { Link } from "react-router-dom";

export default class NotFoundPage extends React.Component {
  render() {
    return (
      <div className="body-content container">
        <h1>404 Page not found</h1>
        <h2>Unfortunately the page you requested could not be found.</h2>
        <ul>
          <li>Check the address of the page - is it spelt correctly in the address bar in your browser?</li>
          <li>Select another page from the menu at the top of the screen</li>
          <li><Link to="/">Go back to the home page</Link></li>
        </ul>
      </div>
    );
  }
}
