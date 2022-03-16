import React from 'react';
import FullDB from '../database/FullScholarship.json';
import { Image } from 'react-bootstrap';
import styles from './ScholarshipPages.module.css';

function FullScholarship(props) {
  // const ScholarshipLink = full.ScholarshipLink;
  // confirm it is running

  return (
    <>
      <h1 style={{ textAlign: 'center', margin: '20px 0' }}>
        Full Scholarship
      </h1>
      {FullDB.Full.map((full) => {
        const { name, details, url } = full;
        return (
          <div className={`${styles['types']}`}>
            {/* 
            <div className={styles.imageContainer}>
              <Image src={''} className={styles.logo} />
            </div>
               */}
            <div className={styles.infoContainer}>
              <h2>{name}</h2>
              <p>{details}</p>
              <ul>
                <li>
                  Link: &nbsp;
                  <a href={url}>{url}</a>
                </li>
              </ul>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default FullScholarship;
