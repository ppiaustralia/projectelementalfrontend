import React from 'react';
import PartialDB from '../database/PartialScholarship.json';
import { Image } from 'react-bootstrap';

import styles from './ScholarshipTypes.module.css';

function PartialScholarship(props) {
  // const partialLink = partial.PartialLink;

  return (
    <>
      <div>
        {PartialDB.Partial.map((partial) => (
          <div>
            <p>{partial.name}</p>
            <p>{partial.details}</p>
            <p>{partial.url}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default PartialScholarship;
