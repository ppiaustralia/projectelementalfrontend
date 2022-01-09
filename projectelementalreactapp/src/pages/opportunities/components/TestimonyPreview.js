import React from 'react';
import 'TestimonyPreview.module.css';
import { TestimonyPic as Pictures } from '../database/TestimonyPic';

function TestimonyPreview() {
  return (
    <div>
      <div>
        {Pictures.map((data, i) => {
          <div>
            <img alt={i}>{data.Pictures}</img>
          </div>;
        })}
      </div>
    </div>
  );
}

export default TestimonyPreview;
