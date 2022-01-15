import React from 'react';
import ScholarshipDB from '../database/Scholarship.json';

function FullScholarship() {
  return (
    <>
      {ScholarshipDB.scholarship.map((data, i) => {
        return (
          <div>
            {
              <div key={i}>
                <p>name: {data.Full.name}</p>
                <p>details:{data.Full.details}</p>
                <p>url: {data.Full.url}</p>
              </div>
            }
          </div>
        );
      })}
    </>
  );
}

export default FullScholarship;
