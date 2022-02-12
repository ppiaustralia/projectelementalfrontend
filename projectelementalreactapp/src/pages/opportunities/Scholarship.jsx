import React from 'react';
// import { useRouteMatch } from 'react-router-dom';
import { useMatch, useParams } from 'react-router-dom';

// import FullScholarship from './pages/FullScholarship';
// import PartialScholarship from './pages/PartialScholarship';
// import ExchangeProgram from './pages/ExchangeProgram';
import Testimony from './components/Testimony';
import Cards from './components/CardScholarship';

import Button from '../../components/Button';
import { Link } from 'react-router-dom';

export default function Scholarship() {
  // let { path, url } = useMatch();
  // const { options } = useParams();

  return (
    <div>
      {/* 1st layout -> 3 boxes */}
      <div>
        <h3>Interested to study at Australia?</h3>
        <p>Check out some of the options listed</p>
        <div>
          {/* three different boxes */}
          <Cards />
        </div>
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

// create CardScholarship inside here

/*
  Scholarship
    - Form:
    https://docs.google.com/document/d/1xZtlqCVR5s_Scwz4NsltoAptu8xvPlv70jlnme-p1ZY/edit#

  Testimony:
    - Form:
    https://docs.google.com/forms/u/1/d/1fiWdGO0s8fsQuaRHlL8QkPex07fw8XjnOf_TZHbDqsQ/edit?usp=drive_web
    
    - Photo:
    https://drive.google.com/drive/u/1/folders/1pjB9JhLJ7dOdLKU7h_XQMzXyR6fIzshFQTI1H3zpE5Mx61dSRo4t9VjauTm6fJaqDptVySk4
  */
