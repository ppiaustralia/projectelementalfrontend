import React, { useState, useEffect } from 'react';
import {
  Link,
  Routes,
  BrowserRouter as Router,
  Route,
  useParams
} from 'react-router-dom';

import { BsArrowRightShort } from 'react-icons/bs';
import styles from './ScholarshipPages.module.css';

function ScholarshipPages() {
  const routes = [
    {
      title: 'Full Scholarship',
      path: 'full-scholarship'
    },
    {
      title: 'Partial Scholarship',
      path: 'partial-scholarship'
    },
    {
      title: 'Exchange Program',
      path: 'exchange'
    }
  ];

  return (
    <>
      <div className={styles.container}>
        <div className={styles.hero}>
          <h1 className={styles.heroTitle}>
            Interested to study at Australia?
          </h1>
          <h2 className={styles.heroSubtitle}>
            Check out some of the options listed below
          </h2>
        </div>

        <div className={styles.cardContainer}>
          {routes.map((data) => (
            <div className={styles.card}>
              <div key={data.id}>
                <Link to={data.path} className={styles.cardLink}>
                  <h3 className={styles.cardTitle}>{data.title}</h3>
                  {/* <p className={styles.cardBlogDesc}>{data.desc}</p> */}
                  <p className={styles.cardTertiary}>
                    Read More
                    <BsArrowRightShort />
                    {/* <Link to={data.path}>Read More</Link> */}
                    {/* goes to correct route but doenst go to the component page */}
                  </p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ScholarshipPages;
