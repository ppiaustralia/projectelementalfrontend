import React from 'react';
import './Card.css';
import { Image } from 'react-bootstrap';

function ConsulatesCard(data) {
  console.log(data);
  /*
  Not sure what this is for - Daniel

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  */
  // const { address, name, phone, website }

  const { address, name, phone, website, image } = data.consulate;

  return (
    <div className="card">
      <div className="imageContainer">
        <Image src={data.conBaseLink + image} className="logo" />
      </div>
      <div className="infoContainer">
        <h3> {name}</h3>
        <p>{`Address: ${address}`}</p>
        <p>{`Phone: ${phone}`}</p>
        <p>{`Website ${website}`}</p>
      </div>
    </div>
  );
}

export default ConsulatesCard;
