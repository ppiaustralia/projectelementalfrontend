import React from 'react';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import CatStory from './CatStory';
// import Humans from './Humans';
import style from './PageUnavailable.module.css';
// import Button from '../../components/Button';

import Cat from './cat.jpg';

function PageUnavailable() {
  console.log('test');

  return (
    <>
      <div>
        <Routes>
          <Route path="/404/catstory" element={<CatStory />} />
          {/* <Route path="/humans" element={<Humans />} /> */}
        </Routes>
      </div>
      <div className={style.center}>
        <h1 className={style.seperator}>404 not Found</h1>
        <p>
          The link you are looking for cannot be found <br />
          <Link to="/404/catstory">
            <img src={Cat} alt="cat-image" />
          </Link>
        </p>
        <Link to="/">
          <button>Return to Home</button>
        </Link>
      </div>
    </>
  );
}

export default PageUnavailable;
