import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Provider} from "react-redux";
//Components
import Home from "./components/home";
import About from "./components/about";
import Veterans from "./components/veterans";
import Awards from "./components/awards";
import Contact from "./components/contact";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import IAC from "./components/iac";
import Employers from "./components/employers";
import store from "./store.js";
//CSS
import "./sass/styles.scss";
import "./vendor/font-awesome/css/font-awesome.min.css";
import "./vendor/magnific-popup/magnific-popup.css";
import "./vendor/googleFonts/merriWeather.css";
import "./vendor/googleFonts/openSans.css";
import "./vendor/googleFonts/oswald.css";
//JavaScript
import "bootstrap/dist/js/bootstrap";

ReactDOM.render(

  <BrowserRouter>
    <div>
      <NavBar/>
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/employers" component={Employers}/>
          <Route path="/about" component={About}/>
          <Route path="/iac" component={IAC}/>
          <Route path="/veterans" component={Veterans}/>
          <Route path="/awards" component={Awards}/>
         <Provider store={ store }>
          <Route path="/contact" component={Contact}/>
         </Provider>

        </Switch>
      <Footer/>
    </div>
  </BrowserRouter>,

    document.getElementById('container')
);
