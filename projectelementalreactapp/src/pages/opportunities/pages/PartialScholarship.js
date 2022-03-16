import React from 'react';
import PartialDB from '../database/PartialScholarship.json';
import styles from './ScholarshipPages.module.css';
import { Image } from 'react-bootstrap';

function PartialScholarship(props) {
  // const partialurl = partial.Partialurl;

  return (
    // confirm running
    <>
      <h1>Partial Scholarship</h1>
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
              <h1>{name}</h1>
              <p>Description: {details}</p>
              <p>
                Link: &nbsp;
                <a href={url}>{url}</a>
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default PartialScholarship;
