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
      <div className={styles.ScholarshipPages}>
        <h1 className={styles.ScholarshipPagesTitle}>
          Interested to study at Australia?
        </h1>
        <h2 className={styles.ScholarshipPagesSubtitle}>
          Check out some of the options listed below. Alternatively, you can
          download PPI Australia 2021-2022 Scholar Programs Booklet by clicking
          the button below
        </h2>
        <button>
          <a href={'www.google.com'}>Download Module Book</a>
        </button>
      </div>

      {pages.map((data) => (
        <div className={styles.cardBlog} key={data.id}>
          <h3 className={styles.cardBlogName}>{data.title}</h3>
          {/* <p className={styles.cardBlogDesc}>{data.desc}</p> */}
          <p className={styles.cardBlogButton}>
            <a href={data.path}>Read More</a>
            {/* goes to correct route but doenst go to the component page */}
          </p>
        </div>
      ))}
    </>
  );
}

export default ScholarshipPages;
