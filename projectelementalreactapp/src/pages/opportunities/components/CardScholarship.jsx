import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Link, Routes, BrowserRouter as Router, Route } from 'react-router-dom';

// import FullScholarship from '../pages/FullScholarship';
// import PartialScholarship from '../pages/PartialScholarship';
// import Exchange from '../pages/ExchangeProgram';
import ScholarshipTypes from '../pages/ScholarshipTypes';

import styles from './CardScholarship.module.css';

function CardScholarship() {
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

  return (
    <>
      <div className={styles.cardScholarship}>
        <div className={styles.cardScholarshipLeft}></div>
        <div className={styles.cardScholarshipRight}>
          <h1 className={styles.cardScholarshipTitle}>
            Interested to study at Australia?
          </h1>
          <h2 className={styles.cardScholarshipSubtitle}>
            Check out some of the options listed below. Alternatively, you can
            download PPI Australia 2021-2022 Scholar Programs Booklet by
            clicking <u>on the box on the left.</u>
          </h2>
        </div>
      </div>

      {pages.map((data) => (
        <div className={styles.cardBlog} key={data.id}>
          <h3 className={styles.cardBlogName}>{data.title}</h3>
          {/* <p className={styles.cardBlogDesc}>{data.desc}</p> */}
          <p className={styles.cardBlogButton}>
            <Link to={data.path}>Read More</Link>
          </p>
        </div>
      ))}
    </>
  );
}

export default CardScholarship;

// need to fix router

// https://dev.to/mrpbennett/rendering-nav-links-with-map-in-react-51l5
