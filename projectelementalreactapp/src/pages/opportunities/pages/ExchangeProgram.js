import React from 'react';
import ExchangeDB from '../database/Exchange.json';
import styles from './ScholarshipPages.module.css';
import { Image } from 'react-bootstrap';

function ExchangeProgram(props) {
  // const exchangeLink = exchange.exchangeLink;

  return (
    // confirm running
    <>
      <h1 style={{ textAlign: 'center', margin: '20px 0' }}>
        Exchange Program
      </h1>
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
              <div className={styles.infoCard}>
                <h2>{name}</h2>
                <p>{description}</p>
                <ul>
                  <li>
                    Link: &nbsp;
                    <a href={link}>{link}</a>
                  </li>
                  <li>
                    Youtube: &nbsp;
                    <a href={youtube}>{youtube}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ExchangeProgram;
