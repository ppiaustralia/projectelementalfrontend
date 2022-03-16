import React from 'react';
import PartialDB from '../database/PartialScholarship.json';
import styles from './ScholarshipPages.module.css';
import { Image } from 'react-bootstrap';

function PartialScholarship(props) {
  // const partialurl = partial.Partialurl;

  return (
    // confirm running
    <>
      <h1 style={{ textAlign: 'center', margin: '20px 0' }}>
        Partial Scholarship
      </h1>
      {PartialDB.Partial.map((partial) => {
        const { name, details, url } = partial;
        return (
          <div className={`${styles['types']}`}>
            {/* 
            <div className={styles.imageContainer}>
              <Image src={''} className={styles.logo} />
            </div>
               */}
            <div className={styles.infoContainer}>
              <div className={styles.infoCard}>
                <h1>{name}</h1>
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
