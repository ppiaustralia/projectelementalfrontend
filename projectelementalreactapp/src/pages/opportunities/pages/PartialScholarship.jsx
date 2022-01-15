import React from 'react';
import PartialScholarshipDB from '../database/Scholarship.json';

function PartialScholarship() {
  return (
    <>
      <div>
        {PartialScholarshipDB.scholarship.map((data, i) => (
          <div key={i}>
            <p>{data.Partial.name}</p>
            <p>{data.Partial.details}</p>
            <p>{data.Partial.url}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default PartialScholarship;
