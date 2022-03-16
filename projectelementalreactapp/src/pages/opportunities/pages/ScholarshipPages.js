import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import { useParams } from 'react-router-dom';

import { Link, Routes, BrowserRouter as Router, Route } from 'react-router-dom';

import styles from './ScholarshipPages.module.css';

function ScholarshipPages(props) {
  const [full, setFull] = useState([]);
  const [partial, setPartial] = useState([]);
  const [exchange, setExchange] = useState([]);

  // const types = match.params; // copy link url
  const { types } = useParams();

  const pages = [
    {
      id: 1,
      title: 'Full Scholarship',
      path: '/opportunities/scholarship/full-scholarship'
      // component: FullScholarship
      // desc: 'lorem ipsum dolor site amet'
    },
    {
      id: 2,
      title: 'Partial Scholarship',
      path: '/opportunities/scholarship/partial-scholarship'
      // component: PartialScholarship
      // desc: 'lorem ipsum dolor site amet'
    },
    {
      id: 3,
      title: 'Exchange Program',
      path: '/opportunities/scholarship/exchange'
      // component: Exchange
      // desc: 'lorem ipsum dolor site amet'
    }
  ];

  // aws below

  return (
    <>
      <div className={styles.container}>
        <div className={styles.hero}>
          <h1 className={styles.heroTitle}>
            Interested to study at Australia?
          </h1>
          <h2 className={styles.heroSubtitle}>
            Check out some of the options listed below
            {/* Alternatively, you can
          download PPI Australia 2021-2022 Scholar Programs Booklet by clicking
          the button below */}
          </h2>
          {/* <button className={styles.heroButton}>
          <a href={'www.google.com'}>Download Module Book</a>
        </button> */}
        </div>

        <div className={styles.cardContainer}>
          {pages.map((data) => (
            <div className={styles.card}>
              <div key={data.id}>
                <h3 className={styles.cardTitle}>{data.title}</h3>
                {/* <p className={styles.cardBlogDesc}>{data.desc}</p> */}
                <p className={styles.cardTertiary}>
                  <a href={data.path}>Read More</a>
                  {/* goes to correct route but doenst go to the component page */}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.hero}>
          <h2 className={styles.heroAlternative}>
            <i>
              *Alternatively, you can download PPI Australia 2021-2022 Scholar
              Programs Booklet by clicking &nbsp;
            </i>
            <a href="http://www.google.com">here</a>
          </h2>
        </div>
      </div>
    </>
  );
}

export default ScholarshipPages;
