import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// pages
import FullScholarship from '../pages/FullScholarship';
import PartialScholarship from '../pages/PartialScholarship';
import ExchangeProgram from '../pages/ExchangeProgram';

function DisplayScholarship() {
  const { types } = useParams();
  console.log(types);

  return (
    <>
      <div>
        {/* if params === link then render link's component */}
        {types === 'full-scholarship' ? (
          <FullScholarship />
        ) : types === 'partial-scholarship' ? (
          <PartialScholarship />
        ) : (
          <ExchangeProgram />
        )}
      </div>
    </>
  );
}

export default DisplayScholarship;
