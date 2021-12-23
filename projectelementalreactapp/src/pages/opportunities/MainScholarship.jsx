import React from 'react';

import { UniversityUniversity as University } from './UniversityScholarship';
import { GovernmentScholarship as Government } from './GovernmentScholarship';

import Button from '../../components/Button';
export default function MainScholarship() {
  return (
    <div>
      {/* 1st layout -> 3 boxes */}
      <div></div>

      {/* 2nd layout -> testimonies  */}
      <div></div>

      {/* 3rd layout -> submit interest */}
      <div>
        <h3>Are you in a scholarship programme?</h3>
        <p>
          Do you want to share your experience and help others? Submit your
          scholarship testimony by clicking the link below
        </p>
        <Button>Submit Scholarship</Button>
      </div>
    </div>
  );
}
