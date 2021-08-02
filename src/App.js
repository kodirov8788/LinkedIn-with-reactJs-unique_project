import React from "react";
import Header from './components/header/Header';
import Chat from './components/chat/Chat';
import Footer from './components/footer/Footer';
import './App.css';

import About from './components/footerLink/about/About'
import Careers from './components/footerLink/careers/Careers'
import Advertise from './components/footerLink/advertising/Advertising'
import Business from './components/footerLink/smallBusiness/Business'
import Talent from './components/footerLink/talentSolutions/Talent'
import Marketing from './components/footerLink/marketingSolutions/Marketing'
import Sales from './components/footerLink/salesSolutions/Sales'
import Comunity from './components/footerLink/communityGuidelines/Comunity'
import Safety from './components/footerLink/safetyCenter/Safety'
import Privacy from './components/footerLink/Privacy & Terms/Privacy'
import Mobileapp from './components/footerLink/mobileApp/Mobilapp'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {

  return (


    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/careers">
            <Careers />
          </Route>
          <Route path="/Advertise">
            <Advertise />
          </Route>
          <Route path="/business">
            <Business />
          </Route>
          <Route path="/talent">
            <Talent />
          </Route>
          <Route path="/marketing">
            <Marketing />
          </Route>
          <Route path="/sales">
            <Sales />
          </Route>
          <Route path="/privacy">
            <Privacy />
          </Route>
          <Route path="/comunity">
            <Comunity />
          </Route>
          <Route path="/safety">
            <Safety />
          </Route>
          <Route path="/mobilapp">
            <Mobileapp />
          </Route>
          <Route path="/chat">
            <Chat />
          </Route>
          <Route path="/">
            {/* <h1>Hello</h1> */}
          </Route>
        </Switch>
        <Footer />
      </Router >
    </div>

  );
}

export default App;
