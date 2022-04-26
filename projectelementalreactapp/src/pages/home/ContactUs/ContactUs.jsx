import React from 'react';
import { Link } from 'react-router-dom';

import styles from './ContactUs.module.css';

export default function ContactUs() {
  return (
    <>
      <div className={styles.container}>
        <h2>Do you have any questions?</h2>
        <p>Feel free to contact us by clicking this button below</p>
        <button className={styles.email}>
          <a href="mailto:infotech@ppi-australia.org">Contact PPIA IT</a>
        </button>
      </div>
    </>
  );
}
