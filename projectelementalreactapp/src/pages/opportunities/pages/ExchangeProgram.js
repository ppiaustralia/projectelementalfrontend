import React from 'react';
import ExchangeDB from '../database/Exchange.json';
import styles from './ScholarshipPages.module.css';
import { Image } from 'react-bootstrap';

function ExchangeProgram(props) {
  // const exchangeLink = exchange.exchangeLink;

  return (
    // confirm running
    <>
      <h1>Exchange Program</h1>
      {ExchangeDB.exchange.map((exchange) => {
        const { name, description, link, youtube } = exchange;
        return (
          <div className={`${styles['types']}`}>
            {/* 
            <div className={styles.imageContainer}>
              <Image src={''} className={styles.logo} />
            </div>
               */}
            <div className={styles.infoContainer}>
              <h2>{name}</h2>
              <p>Description: {description}</p>
              <p>
                Link: &nbsp;
                <a href={link}>{link}</a>
              </p>
              <p>
                Youtube: &nbsp;
                <a href={youtube}>{youtube}</a>
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ExchangeProgram;
