import React from 'react';
import FullDB from '../database/FullScholarship.json';
import { Image } from 'react-bootstrap';
import styles from './ScholarshipTypes.module.css';

function FullScholarship(props) {
  // const ScholarshipLink = full.ScholarshipLink;

  return (
    <>
      <h1>Full Scholarship</h1>
      <div>
        {FullDB.Full.map((full) => {
          const { name, details, url } = full;
          return (
            <div>
              <h2>{name}</h2>
              <p>Description: {details}</p>
              <p>Link: {url}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default FullScholarship;
