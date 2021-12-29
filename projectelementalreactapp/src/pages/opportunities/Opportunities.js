import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  useRouteMatch,
  useParams,
  Switch,
  Link
} from 'react-router-dom';

import Scholarship from './Scholarship';
import Career from './MainCareer';

import React from 'react';

function Opportunities() {
  let { path, url } = useRouteMatch();

  return (
    <div>
      <Link to={`${url}/scholarship`}>Scholarship</Link>
      <Link to={`${url}/career`}>Career</Link>

      <Switch>
        <Route path={`${path}/:scholarship`} component={Scholarship} />
        <Route path={`${path}/:career`} component={Career} />
      </Switch>
    </div>
  );
}

export default Opportunities;

// create opportunities Component that includes 2 other components:
// page 1 scholarships page
// Main Page
// Government
// University
// Testimony

// page 2 Careers page
// Main Page
// Filter Function
// Job Postings
// Job Unavailable
