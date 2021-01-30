import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom" // this comes from install npm react-router-dom

class App extends React.Component { 
  render() {
    return ( // website nav pane
      <div> 
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
          <li>News</li>
            <ul>
              <li>Events</li>
              <li>Upcoming</li>
            </ul>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </div>
    )
  }
}

export default App;
