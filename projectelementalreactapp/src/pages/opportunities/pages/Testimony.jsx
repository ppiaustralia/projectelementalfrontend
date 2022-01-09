import React from 'react';

import Testimonial from './database/Testimony.json';
// import '../database/TestimonyPic';

import TestimonyPreview from './components/TestimonyPreview';

function Testimony() {
  return (
    <div>
      <h2>Testimonies</h2>
      <p>Check out how some of our associates got their scholarship</p>
      <div>
        {/* map inside the box  */}
        <TestimonyPreview />
      </div>
    </div>
  );
}

export default Testimony;
