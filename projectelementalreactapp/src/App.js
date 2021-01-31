import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"; // this comes from install npm react-router-dom
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
              <li><a href="/projectelementalreactapp/src/pages/home/Home.jsx">Home</a></li>
              <li><a href="/projectelementalreactapp/src/pages/about/About.jsx">About Us</a></li>
                <ul>
                  <li>Kabinet Sinergi 2020-2021</li>
                  <li>Vision Mission 2020-2021</li>
                  <li>AD/ART</li>
                </ul>
              <li><a href="/projectelementalreactapp/src/pages/chapter/Chapter.jsx">Chapters</a></li>
                <ul>
                  <li>New South Wales - ISA NSW</li>
                  <li>Northern Territory - PPIANT</li>
                  <li>Queensland - PPIA Queensland</li>
                  <li>South Australia</li>
                  <li>Tasmania - PPIATasmania</li>
                  <li>Victoria - PPIAVIC</li>
                  <li>Western Australia</li>
                </ul>
              <li><a href="/projectelementalreactapp/src/pages/liveinoz/Liveinoz.jsx">Live in OZ</a></li>
              <li><a href="/projectelementalreactapp/src/pages/contact/Contact.jsx">Contact</a></li>
            </ul>
          </nav>
        </div>
    );
  }
}

export default App;