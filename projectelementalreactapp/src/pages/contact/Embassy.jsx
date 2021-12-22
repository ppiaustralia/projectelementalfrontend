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
}

export default Embassy;
