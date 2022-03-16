import React from 'react';
import PartialDB from '../database/PartialScholarship.json';
import styles from './ScholarshipPages.module.css';
import { Image } from 'react-bootstrap';

function PartialScholarship() {
  // const partialurl = partial.Partialurl;

  return (
    <>
      <h1 style={{ textAlign: 'center', margin: '20px 0' }}>
        Partial Scholarship
      </h1>
      {PartialDB.Partial.map((partial) => {
        const { name, details, url } = partial;
        return (
          <div className={styles.infoContainer}>
            {/* 
            <div className={styles.imageContainer}>
              <Image src={''} className={styles.logo} />
            </div>
               */}
            <div className={styles.infoCard}>
              <h1>{name}</h1>
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

export default PartialScholarship;
