import React from 'react';
import HumansDB from './HumansDB.json';

function Humans() {
  return (
    <>
      <div>
        {HumansDB.map((data) => {
          <ul>
            <li>{data.name}</li>
            <li>{data.position}</li>
            <li>{data.year}</li>
          </ul>;
        })}
      </div>
    </>
  );
}

export default Humans;
