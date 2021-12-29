import React from 'react';
import 'TestimonyPreview.module.css';

function TestimonyPreview(props) {
  return (
    <div>
      <h1>TESTIMONIES</h1>
      <p>Check out how some of our associates got their scholarship</p>
      <div>
        {/* Carousel */}
        {props.image}
        {props.image}
        {props.image}
      </div>
    </div>
  );
}

export default TestimonyPreview;
