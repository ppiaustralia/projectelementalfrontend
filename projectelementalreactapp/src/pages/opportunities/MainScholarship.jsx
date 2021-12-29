import React from 'react';

import FullScholarship from './pages/FullScholarship';
import PartialScholarship from './pages/PartialScholarship';
import ExchangeProgram from './pages/ExchangeProgram';
import Testimony from './pages/Testimony';
import { CardScholarship as Cards } from './components/CardScholarship';

import Button from '../../components/Button';

export default function MainScholarship() {
  return (
    <div>
      {/* 1st layout -> 3 boxes */}
      <div>
        <h2>
          Are you an Indonesian who want to pursue higher education or join
          exchange programs in Australia with a scholarship
        </h2>
        <p>Check out our tips below</p>
      </div>

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
