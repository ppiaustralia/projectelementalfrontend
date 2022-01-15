import React from 'react';
import Exchange from '../database/Exchange.json';

function ExchangeProgram() {
  return (
    <>
      <div>
        {Exchange.exchange.map((data, i) => (
          <div key={i}>
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
