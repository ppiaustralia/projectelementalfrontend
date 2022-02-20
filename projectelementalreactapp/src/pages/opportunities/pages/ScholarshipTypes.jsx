import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import FullScholarship from './FullScholarship';
import PartialScholarship from './PartialScholarship';
import ExchangeProgram from './ExchangeProgram';

import Loading from '../../../components/Loading';

function ScholarshipTypes(props) {
  const [full, setFull] = useState([]);
  const [partial, setPartial] = useState([]);
  const [exchange, setExchange] = useState([]);

  // const types = match.params; // copy link url
  const { types } = useParams();

  // aws below

  return (
    <div>
      <div>
        {full.length < 1 ? (
          <>
            <Loading />
          </>
        ) : (
          <FullScholarship props={full} />
        )}
        {partial.length < 1 ? <></> : <PartialScholarship props={partial} />}
        {exchange.length < 1 ? <></> : <ExchangeProgram props={exchange} />}
      </div>
    </div>
  );
}

export default ScholarshipTypes;
