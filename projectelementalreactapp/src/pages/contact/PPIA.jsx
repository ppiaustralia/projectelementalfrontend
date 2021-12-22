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
    </div>
  );
}

export default PPIA;
