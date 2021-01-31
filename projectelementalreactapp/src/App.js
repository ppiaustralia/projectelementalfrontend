import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, browserHistory } from "react-router-dom"; // this comes from install npm react-router-dom

import Home from '../src/pages/home/Home'
import Chapter from '../src/pages/chapter/Chapter'
import About from '../src/pages/about/About'
import Contact from '../src/pages/contact/Contact'
import LiveInOz from '../src/pages/liveinoz/Liveinoz'

// website nav pane
class App extends React.Component { 
  render() {
    return ( 
      <Router>
        <div>
          <nav>
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
                <ul>
                  <li>Kabinet Sinergi 2020-2021</li>
                  <li>Vision Mission 2020-2021</li>
                  <li>AD/ART</li>
                </ul>
            <li><Link to="/chapter">Chapter</Link></li>
                <ul>
                  <li>New South Wales - ISA NSW</li>
                  <li>Northern Territory - PPIANT</li>
                  <li>Queensland - PPIA Queensland</li>
                  <li>South Australia</li>
                  <li>Tasmania - PPIATasmania</li>
                  <li>Victoria - PPIAVIC</li>
                  <li>Western Australia</li>
                </ul>
            <li><Link to="/liveinoz">LiveInOz</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
            </ul>
          </nav>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/chapter" component={Chapter}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/liveinoz" component={LiveInOz}/>
        </div>
      </Router>
    );
  }
}

export default App;