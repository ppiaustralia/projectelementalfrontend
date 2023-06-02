import React from 'react';

import styles from './MainHighlights.module.css';

import { Container, Row, Col } from 'react-bootstrap/';

import ImageHeader from '../../../assets/images/1.jpg';

export default function MainHighlights() {
  return (
    <div className="bg-[#e9ecef] rounded-[5px]">
      <Container>
        <Row>
          <Col lg={6} sm={12}>
            <div>
              <img
                src={ImageHeader}
                style={{
                  width: '100%',
                  paddingTop: '54px',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              />
            </div>
          </Col>

          <Col lg={6} sm={12}>
            <div className="text-left p-[50px]">
              <p style={{ fontSize: '18px' }}>
                <b>2021 and 2022 is an interesting period for everyone</b>
              </p>
              <p>
                Despite all that, we stick together and have becoe a wonderful
                team. Below are some of the
                <b>
                  <span style={{ color: 'red' }}> IMPACT</span>
                </b>{' '}
                our team brings this year:
              </p>
              <br />
              <ul className='list-disc'>
                <li className="mb-3">
                  Host of PPI Dunia Symposium Dunia
                </li>
                <li className="mb-3">
                  Re-Launch of PPIA Career and organize Career Festival
                </li>
                <li className="mb-3">
                  Public Release of PPI-Apps, PPIA Official Membership
                  Application
                </li>
                <li className="mb-3">Re-imagined PPIA Website</li>
              </ul>
              <h4>{/* <b>CREDITS TO @WILDWONDERINGWILLY</b> */}</h4>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
