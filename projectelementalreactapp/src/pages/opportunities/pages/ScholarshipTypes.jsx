import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import FullScholarship from './FullScholarship';
import PartialScholarship from './PartialScholarship';
import ExchangeProgram from './ExchangeProgram';

import Loading from '../../../components/Loading';
import styles from './ScholarshipTypes.module.css';

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
          <FullScholarship props={props} />
        )}
        {partial.length < 1 ? <></> : <PartialScholarship props={props} />}
        {exchange.length < 1 ? <></> : <ExchangeProgram props={props} />}
      </div>
    </div>
  );
}

export default ScholarshipTypes;
