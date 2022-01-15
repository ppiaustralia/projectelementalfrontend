import React, { useState, useEffect } from 'react';
// import 'CardScholarship.module.css';
import {
  Link,
  useRouteMatch,
  Switch,
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import FullScholarship from '../pages/FullScholarship';
import PartialScholarship from '../pages/PartialScholarship';
import Exchange from '../pages/ExchangeProgram';

function CardScholarship() {
  // let { path, url } = useRouteMatch();
  // const types = props.match.params.types; // copy link url

  // const [fullScholarship, setFullScholarship] = useState([]);
  // const [partialScholarship, setPartialScholarship] = useState([]);
  // const [exchange, setExchange] = useState([]);

  const pages = [
    {
      id: 1,
      title: 'Full Scholarship',
      path: '/opportunities/scholarship/full-scholarship'
    },
    {
      id: 2,
      title: 'Partial Scholarship',
      path: '/opportunities/scholarship/partial-scholarship'
    },
    {
      id: 3,
      title: 'Exchange Program',
      path: '/opportunities/scholarship/exchange'
    }
  ];

  // check link
  // use the link match with the path
  // map the value

  return (
    <>
      {/* <div>
        <Link to={`${types}/full-scholarship`}>Read More</Link>
        <Link to={`${types}/partial-scholarship`}>Read More</Link>
        <Link to={`${types}/exchange`}>Read More</Link>
      </div>
 */}

      {pages.map((data) => {
        <div key={data.id}>
          <p>{data.title}</p>
          <Link to={data.path}>
            <p>Read More</p>
          </Link>
        </div>;
      })}

      <div>
        <Switch>
          <Route
            path={'/opportunities/scholarship/full-scholarship'}
            component={FullScholarship}
          />
          <Route
            path={'/opportunities/scholarship/partial-scholarship'}
            component={PartialScholarship}
          />
          <Route
            path={'/opportunities/scholarship/exchange'}
            component={Exchange}
          />
        </Switch>
      </div>

      {/* <h3>{props.title}</h3>
      <p>{props.description}</p>
      <Link to={props.link}>
        <div>
          <p>Read More</p>
        </div>
      </Link> */}
    </>
  );
}

export default CardScholarship;
