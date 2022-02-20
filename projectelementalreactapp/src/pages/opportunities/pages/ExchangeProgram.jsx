import React from 'react';
import ExchangeDB from '../database/Exchange.json';
import styles from './ScholarshipTypes.module.css';

function ExchangeProgram(props) {
  // const exchangeLink = exchange.exchangeLink;

  return (
    <>
      <h1>Exchange Program</h1>
      <div>
        {ExchangeDB.exchange.map((exchange) => {
          const { name, description, link, youtube } = exchange;
          return (
            <div>
              <h2>{name}</h2>
              <p>Description: {description}</p>
              <p>Link: {link}</p>
              <p>Youtube: {youtube}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ExchangeProgram;
