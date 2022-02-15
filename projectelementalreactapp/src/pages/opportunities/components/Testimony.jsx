import React from 'react';

// import Testimonial from './database/Testimony.json';
// import '../database/TestimonyPic';

// import TestimonyPreview from './components/TestimonyPreview';
import styles from './Testimony.module.css';

function Testimony() {
  return (
    <div className={styles.testimony}>
      <h2>Testimonies</h2>
      <p>
        Check out how some of our associates
        <br />
        got their scholarship
      </p>
      <div className={styles.testimony__carousel}>.</div>
    </div>
  );
}

export default Testimony;
