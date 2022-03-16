import React from 'react';
// import {
//   Link,
//   Routes,
//   BrowserRouter as Router,
//   Route,
//   useParams
// } from 'react-router-dom';
// import { useRouteMatch } from 'react-router-dom';

// import FullScholarship from './pages/FullScholarship';
// import PartialScholarship from './pages/PartialScholarship';
// import Exchange from './pages/ExchangeProgram';

import Testimony from './components/Testimony';
import ScholarshipPages from './pages/ScholarshipPages';
import SubmitScholarship from './components/SubmitScholarship';

import styles from './Scholarship.module.css';
export default function Scholarship() {
  // let { path, url } = useMatch();
  // const { pages } = useParams();

  return (
    <>
      {/* <Route
        path="/opportunities/scholarship/full-scholarship"
        element={<FullScholarship />}
      />
      <Route
        path="/opportunities/scholarship/partial-scholarship"
        element={<PartialScholarship />}
      />
      <Route
        path="/opportunities/scholarship/exchange"
        element={<Exchange />}
      /> */}

      <div className={styles.containerScholarship}>
        {/* 1st layout -> hero */}
        <div>
          <ScholarshipPages />
        </div>

        {/* 2nd layout -> testimonies carousel  */}
        <div>
          <Testimony />
        </div>

        {/* 3rd layout -> submit interest */}
        <div>
          <SubmitScholarship />
        </div>
      </div>
    </>
  );
}

// create ScholarshipPages inside here

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
