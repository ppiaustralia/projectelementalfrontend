import React from 'react';

import { UniversityScholarship as University } from './pages/UniversityScholarship';
import { GovernmentScholarship as Government } from './pages/GovernmentScholarship';
import Testimony from './pages/Testimony';
import Button from '../../components/Button';

export default function MainScholarship() {
  return (
    <div>
      {/* 1st layout -> 3 boxes */}
      <div></div>

      {/* 2nd layout -> testimonies  */}
      <Testimony />

      {/* 3rd layout -> submit interest */}
      <div>
        <h3>Are you in a scholarship programme?</h3>
        <p>
          Do you want to share your experience and help others? Submit your
          scholarship testimony by clicking the link below
        </p>
        <Button /> {/* link: https://forms.gle/g6r35XqLNfKz7Apr5 */}
      </div>
    </div>
  );
}
