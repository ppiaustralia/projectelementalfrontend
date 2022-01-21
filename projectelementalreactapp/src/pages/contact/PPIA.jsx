<<<<<<< HEAD
import React from 'react';
import ContactDatabase from './ContactDatabase.json';
import axios from 'axios';

function PPIA(data) {
  return (
    <div className="card p-3 pb-0">
      <h3>{ContactDatabase.PPIAustralia.name}</h3>
      <p className="mb-0">Contact Lists: </p>
      <ul>
        {ContactDatabase.PPIAustralia.contact.map((contact) => {
          return <li> {contact} </li>;
        })}
      </ul>
=======
import React from "react";
import "./Card.css"
import { Image } from "react-bootstrap"

const ppiaAustralia = {
    "name": "PPI Australia",
    "contact": [
      "president@ppi-australia.org",
      "publicrelations@ppi-australia.org"
    ]
  }

  // src={`https://chapterslogo.s3.us-east-2.amazonaws.com/PPIA.png`}
function PPIA() {
  return (
    <div className="card" styles = "margin-bottom : 0px">
      <div className = "imageContainer">
          <Image
              src={`https://chapterslogo.s3.us-east-2.amazonaws.com/PPIA.png`}
              className="logo"
          />
      </div>
      <div className="infoContainer">
        <h3> {ppiaAustralia.name}</h3>
        <p className="mb-0">Contact Lists: </p>
        <ul>
          {ppiaAustralia.contact.map((element) => {
            return <li> {element} </li>;
          })}
        </ul>
      </div>
>>>>>>> erick-blog
    </div>
  );
}

export default PPIA;