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
    </div>
  );
}

export default PPIA;