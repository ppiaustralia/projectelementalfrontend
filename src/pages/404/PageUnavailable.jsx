import React from 'react';
import { Link } from 'react-router-dom';
import style from './PageUnavailable.module.css';
// import Button from '../../components/Button';

function PageUnavailable() {
  console.log('test');

  return (
    <>
      <div className={style.center}>
        <h1 className={style.seperator}>404 not Found</h1>
        <p>The link you are looking for cannot be found.</p>
        <Link to="/alpha">
          <button>Return to Home</button>
        </Link>
      </div>
    </>
  );
}

export default PageUnavailable;
