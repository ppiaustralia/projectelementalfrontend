import React from 'react';

import styles from './SubmitScholarship.module.css';

function SubmitScholarship() {
  return (
    <div>
      <div className={styles.scholarshipReset}>
        <div className={styles.scholarshipContainer}>
          <h3>
            <b>Are you in a scholarship programme?</b>
          </h3>
          <p>
            Do you want to share your experience and help others? Submit your
            scholarship testimony by clicking the link below
          </p>
          <button className={styles.submit}>Submit Scholarship</button>
          {/* link: https://forms.gle/g6r35XqLNfKz7Apr5 */}
        </div>
      </div>
    </div>
  );
}

export default SubmitScholarship;
