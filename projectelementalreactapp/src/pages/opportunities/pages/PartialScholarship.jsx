import React from 'react';
import PartialScholarshipDB from '../database/Scholarship.json';

function PartialScholarship() {
  return (
    <>
      <div>
        {PartialScholarshipDB.map((data, i) => (
          <div key={i}>
            <p>{data.scholarship.Partial.name}</p>
            <p>{data.scholarship.Partial.details}</p>
            <p>{data.scholarship.Partial.url}</p>
          </div>
        ))}
      </div>
    </>
}

export default PartialScholarship;
