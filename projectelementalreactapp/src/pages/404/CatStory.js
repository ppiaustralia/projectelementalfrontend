import React from 'react';
import { Link } from 'react-router-dom';

export default function CatStory() {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h5>
        <i>
          " Before our pre-build, we use cat pictures for all of dummy images to
          test if our code runs properly or not. <br /> To remind ourselves how
          far we have come, we use Cat Image as our 404 "
        </i>
      </h5>
      {/* <p>
        Click
        <Link to="/humans"> here </Link>
        to check all of the contributors
      </p> */}
    </div>
  );
}
