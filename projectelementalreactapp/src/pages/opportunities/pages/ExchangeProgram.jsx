import React from 'react';
import Exchange from '../database/Exchange.json';

function ExchangeProgram() {
  return (
    <>
      <div>
        {Exchange.map((data, i) => (
          <div key={i}>
            <p>{data.exchange.name}</p>
            <p>{data.exchange.description}</p>
            <p>{data.exchange.link}</p>
            <p>{data.exchange.youtube}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default ExchangeProgram;
