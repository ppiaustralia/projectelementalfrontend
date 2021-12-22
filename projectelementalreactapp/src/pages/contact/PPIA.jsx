import React from "react";
const ppiaAustralia = {
    "name": "PPI Australia",
    "contact": [
      "president@ppi-australia.org",
      "publicrelations@ppi-australia.org"
    ]
  }


function PPIA() {
  return (
    <div className="card p-3 pb-0">
      <h3> {ppiaAustralia.name}</h3>
      <p className="mb-0">Contact Lists: </p>
      <ul>
        {ppiaAustralia.contact.map((element) => {
          return <li> {element} </li>;
        })}
      </ul>
    </div>
  );
}

export default PPIA;
