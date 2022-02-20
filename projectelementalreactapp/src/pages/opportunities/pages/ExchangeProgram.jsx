import React from 'react';
import ExchangeDB from '../database/Exchange.json';
import styles from './ScholarshipTypes.module.css';

function ExchangeProgram(props) {
  // const exchangeLink = exchange.exchangeLink;

  return (
    <>
      <div>
        {ExchangeDB.exchange.map((exchange) => (
          <div>
            <p>{exchange.name}</p>
            <p>{exchange.description}</p>
            <p>{exchange.link}</p>
            <p>{exchange.youtube}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default ExchangeProgram;
