import React from 'react';
import 'CardScholarship.module.css';
import { Link } from 'react-router-dom';

function CardScholarship() {
  const pages = [
    { id: 1, title: 'Full Scholarship', link: '' },
    { id: 2, title: 'Partial Scholarship', link: '' },
    { id: 3, title: 'Exchange Program', link: '' }
  ];
  return (
    <>
      <div>
        {pages.map((data, i) => {
          <div key={i}>
            <p>{data.title}</p>
            <Link to={data.link}>
              <p>Read More</p>
            </Link>
          </div>;
        })}
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

// this card component is created for Scholarship
