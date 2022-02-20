import React from 'react';
import PartialDB from '../database/PartialScholarship.json';

function PartialScholarship(partial) {
  // const partialLink = partial.PartialLink;

  return (
    <>
      <div>
        {PartialDB.Partial.map((data) => (
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

export default PartialScholarship;
