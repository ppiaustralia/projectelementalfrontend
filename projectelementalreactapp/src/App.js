import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from "react-router-dom"; // this comes from install npm react-router-dom
// import pages folders
import Home from './pages/home/Home';
import About from './pages/about/About';
import Chapter from './pages/chapter/Chapter';
import Contact from './pages/contact/Contact';
import LiveInOz from './pages/liveinoz/Liveinoz';

// website nav pane
class App extends React.Component { 
  render() {
    return ( 
        <div>
          <nav>
            <ul>
              <li>Home</li>
              <li>About Us</li>
                <ul>
                  <li>Kabinet Sinergi 2020-2021</li>
                  <li>Vision Mission 2020-2021</li>
                  <li>Contact</li>
                  <li>AD/ART</li>
                </ul>
              <li>Chapters</li>
                <ul>
                  <li>New South Wales - ISA NSW</li>
                  <li>Northern Territory - PPIANT</li>
                  <li>Queensland - PPIA Queensland</li>
                  <li>South Australia</li>
                  <li>Tasmania - PPIATasmania</li>
                  <li>Victoria - PPIAVIC</li>
                  <li>Western Australia</li>
                </ul>
              <li>Live in OZ</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>
    );
  }
}

export default App;