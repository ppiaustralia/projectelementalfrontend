import React from 'react';
import ContactDatabase from './ContactDatabase.json';

function ConsulatesCard() {
  return (
    <div className="card p-3 ">
      <p className="mb-0">Contact Lists: </p>
      <ul>
        {ContactDatabase.Consulate.map((contact) => {
          return (
            <li>
              {
                <React.Fragment>
                  <h3>{contact.title}</h3>
                  <p>name : {contact.name}</p>
                  <p>Address : {contact.address}</p>
                  <p>Number : {contact.number}</p>
                  <p>Website : {contact.website}</p>
                </React.Fragment>
              }
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ConsulatesCard;
