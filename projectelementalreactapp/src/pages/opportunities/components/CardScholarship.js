import React from 'react';
import 'CardScholarship.module.css';
import { Link } from 'react-router-dom';

function CardScholarship(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <Link to={props.link}>
        <div>
          <p>Read More</p>
        </div>
      </Link>
    </div>
  );
}

export default CardScholarship;

// this card component is created for Scholarship
