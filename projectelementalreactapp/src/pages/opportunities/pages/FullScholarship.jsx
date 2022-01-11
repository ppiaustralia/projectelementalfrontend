import React from 'react';
import FullScholarshipDB from '../database/Scholarship.json';

function FullScholarship() {
  return (
    <>
      <div>
        {FullScholarshipDB.map((data, i) => (
          <div key={i}>
            <p>{data.scholarship.Full.name}</p>
            <p>{data.scholarship.Full.details}</p>
            <p>{data.scholarship.Full.url}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default FullScholarship;
