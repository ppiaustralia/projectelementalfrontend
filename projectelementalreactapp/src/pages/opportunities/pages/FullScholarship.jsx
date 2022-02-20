import React from 'react';
import FullDB from '../database/FullScholarship.json';
import { Image } from 'react-bootstrap';

function FullScholarship(full) {
  // const ScholarshipLink = full.ScholarshipLink;

  return (
    <>
      <div>
        {FullDB.Full.map((data) => (
          <div>
            <p>{data.name}</p>
            <p>{data.details}</p>
            <p>{data.url}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default FullScholarship;
