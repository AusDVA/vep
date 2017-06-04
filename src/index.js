import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Provider} from "react-redux";
import withTracker from "./components/withTracker";
//Components
import Home from "./components/home";
import Veterans from "./components/veterans";
import ESO from "./components/eso";
import Awards from "./components/awards";
import Contact from "./components/contact";
import NavBar from "./components/partials/navbar";
import Footer from "./components/partials/footer";
import IAC from "./components/iac";
import Employers from "./components/employers";
import Header from "./components/partials/header";
import Bio from "./components/bio";
import NotFound from "./components/notfound";
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
  <Provider store={ store }>
    <BrowserRouter>
        <div>
            <NavBar/>
            <Header/>
            <Switch>
                <Route exact path="/" component={withTracker(Home)}/>
                <Route path="/employers" component={withTracker(Employers)}/>
                <Route path="/industry-advisory-committee" component={withTracker(IAC)}/>
                <Route path="/veterans" component={withTracker(Veterans)}/>
                <Route path="/ex-service-organisations" component={withTracker(ESO)}/>
                <Route path="/awards" component={withTracker(Awards)}/>
                <Route path="/member-biographies" component={withTracker(Bio)}/>
                <Route path="/contact" component={withTracker(Contact)}/>
                <Route path="*" component={withTracker(NotFound)}/>
            </Switch>
            <Footer/>
        </div>
    </BrowserRouter>
    </Provider>,

    document.getElementById('container')
);
