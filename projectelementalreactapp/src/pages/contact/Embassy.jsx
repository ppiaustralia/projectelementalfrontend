<<<<<<< HEAD
import React from 'react';
import styles from './Embassy.css';
import ContactDatabase from './ContactDatabase.json';

function Embassy(data) {
  //console.log(data)

  return (
    <div className="card p-3 pb-0">
      <div className={styles.embassy}>
        <h3>{ContactDatabase.Embassy.name}</h3>
        <p>Address: {ContactDatabase.Embassy.address} </p>
        <p>phone: {ContactDatabase.Embassy.number}</p>
        <p>website: {ContactDatabase.Embassy.website}</p>
      </div>
    </div>
  );
=======
import React from "react"
import "./Card.css"
import { Image } from "react-bootstrap"

function Embassy(data) {
    console.log(data);
    const { address, name, phone, website, image} = data.embassy[0]
    console.log(address);
    return (
        <div className="card">
            <div className = "imageContainer">
                <Image
                    src = {data.emBaseLink + image}
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
    )
>>>>>>> erick-blog
}

export default Embassy;
