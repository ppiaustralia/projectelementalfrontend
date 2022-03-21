import React from 'react';

import styles from './SubmitScholarship.module.css';

function SubmitScholarship() {
  return (
    <div className={styles.scholarshipReset}>
      <div className={styles.scholarshipContainer}>
        <h3>
          <b>Interested to know more?</b>
        </h3>
        <p>You can download our module book by clicking the button below</p>
        <button className={styles.submit}>Download Module Book</button>
        {/* link: https://forms.gle/g6r35XqLNfKz7Apr5 */}
      </div>
    </div>
  );
}

export default SubmitScholarship;
