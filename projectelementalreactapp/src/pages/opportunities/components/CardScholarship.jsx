import React, { useState, useEffect } from 'react';
// import 'CardScholarship.module.css';
import {
  Link,
  // useRouteMatch,
  useMatch,
  Switch,
  Routes,
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
      path: `/opportunities/scholarship/full-scholarship`,
      desc: 'lorem ipsum dolor site amet'
    },
    {
      id: 2,
      title: 'Partial Scholarship',
      path: '/opportunities/scholarship/partial-scholarship',
      desc: 'lorem ipsum dolor site amet'
    },
    {
      id: 3,
      title: 'Exchange Program',
      path: '/opportunities/scholarship/exchange',
      desc: 'lorem ipsum dolor site amet'
    }
  ];

  return (
    <>
      <div className="card__scholarship">
        <div className="card__scholarship__title">
          <h1>Interested to study at Australia?</h1>
        </div>
        <div className="card__scholarship__subtitle">
          <h3>Check out some of the options listed here</h3>
        </div>
      </div>

      {pages.map((data) => (
        <div className="card__scholarship" key={data.id}>
          <p className="card__scholarship__name">{data.title}</p>
          <p className="card__scholarship__desc">{data.desc}</p>
          <p className="card__scholarship__button">
            <Link to={data.path}>Read More</Link>
          </p>
        </div>
      ))}

      {/* <div>
        <Link to={`${types}/full-scholarship`}>Read More</Link>
        <Link to={`${types}/partial-scholarship`}>Read More</Link>
        <Link to={`${types}/exchange`}>Read More</Link>
      </div> */}

      <div>
        <Routes>
          <Route
            path={'/opportunities/scholarship/full-scholarship'}
            element={<FullScholarship />}
          />
          <Route
            path={'/opportunities/scholarship/partial-scholarship'}
            element={<PartialScholarship />}
          />
          <Route
            path={'/opportunities/scholarship/exchange'}
            element={<Exchange />}
          />
        </Routes>
      </div>
    </>
  );
}

export default CardScholarship;

// need to fix router

// https://dev.to/mrpbennett/rendering-nav-links-with-map-in-react-51l5
