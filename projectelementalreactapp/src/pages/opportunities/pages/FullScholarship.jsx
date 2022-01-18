import React from 'react';
import FullDB from '../database/FullScholarship.json';

function FullScholarship() {
  // var test = FullDB.scholarship;
  // console.log(test);

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
