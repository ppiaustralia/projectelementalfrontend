import React from 'react';
import PartialDB from '../database/PartialScholarship.json';
import { Image } from 'react-bootstrap';

import styles from './ScholarshipTypes.module.css';

function PartialScholarship(props) {
  // const partialLink = partial.PartialLink;

  return (
    <>
      <h1>Partial Scholarship</h1>
      <div>
        {PartialDB.Partial.map((partial) => {
          const { name, details, url } = partial;
          return (
            <div>
              <h1>{name}</h1>
              <p>Description: {details}</p>
              <p>Link: {url}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default PartialScholarship;
