<<<<<<< HEAD
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
=======
import React from "react";
import "./Card.css"
import { Image } from "react-bootstrap"


function ConsulatesCard(data) {
  console.log(data);
  /*
  Not sure what this is for - Daniel

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  */
  // const { address, name, phone, website }

  const{address, name, phone, website, image} =data.consulate;

  return (
    <div className="card">
            <div className = "imageContainer">
                <Image
                    src = {data.conBaseLink + image}
                    className="logo"
                />

            </div>
            <div className = "infoContainer">
                <h3 className="m-2"> {name}</h3>
                <p>{`Address: ${address}`}</p>
                <p>{`Phone: ${phone}`}</p>
                <p>{`Website ${website}`}</p>
            </div>
        </div>
>>>>>>> erick-blog
  );
}

export default ConsulatesCard;
