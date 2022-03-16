import React from 'react';
import FullDB from '../database/FullScholarship.json';
import { Image } from 'react-bootstrap';
import styles from './ScholarshipPages.module.css';

function FullScholarship() {
  // const ScholarshipLink = full.ScholarshipLink;

  return (
    <>
      <h1 style={{ textAlign: 'center', margin: '20px 0' }}>
        Full Scholarship
      </h1>
      {FullDB.Full.map((full) => {
        const { name, details, url } = full;
        return (
          <div className={styles.infoContainer}>
            {/* 
            <div className={styles.imageContainer}>
              <Image src={''} className={styles.logo} />
            </div>
               */}
            <div className={styles.infoCard}>
              <h2>{name}</h2>
              <div className={styles.infoCardText}>
                <p>{details}</p>
                <ul>
                  <li>
                    Link: &nbsp;
                    <a href={url}>{url}</a>
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

export default FullScholarship;
