import React from 'react';
import ExchangeDB from '../database/Exchange.json';

function ExchangeProgram() {
  return (
    <>
      <div>
        {ExchangeDB.exchange.map((data) => (
          <div>
            <p>{data.name}</p>
            <p>{data.description}</p>
            <p>{data.link}</p>
            <p>{data.youtube}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default ExchangeProgram;
