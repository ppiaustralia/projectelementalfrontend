import React from 'react';
import FullDB from '../database/FullScholarship.json';
import { Image } from 'react-bootstrap';
import styles from './ScholarshipTypes.module.css';


function FullScholarship(props) {
  // const ScholarshipLink = full.ScholarshipLink;

  return (
    <>
      <div>
        {FullDB.Full.map((full) => (
          <div>
            <p>{full.name}</p>
            <p>{full.details}</p>
            <p>{full.url}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default FullScholarship;
