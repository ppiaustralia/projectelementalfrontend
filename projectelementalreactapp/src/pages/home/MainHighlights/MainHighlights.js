import React from 'react';

import styles from './MainHighlights.module.css';

import { Container, Row, Col } from 'react-bootstrap/';

import ImageHeader from '../../../assets/images/1.jpg';

export default function MainHighlights() {
  return (
    <div className={`${styles.background} ${styles['front-page']}`}>
      <Container>
        <Row>
          <Col xs={6}>
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

          <Col xs={6}>
            <div className={styles.content}>
              <p style={{ fontSize: '18px' }}>
                <b>2021 and 2022 is an interesting period for everyone</b>
              </p>

              <p>
                Despite all that, we stick together and have becoe a wonderful
                team. Below are some of the
                <b>
                  <span style={{ color: 'red' }}> IMPACT</span>
                </b>{' '}
                our team brings this year.
              </p>
              <br />
              <ul>
                <li className={styles.text}>
                  Host of PPI Dunia Symposium Dunia
                </li>
                <li className={styles.text}>
                  Re-Launch of PPIA Career and organize Career Festival
                </li>
                <li className={styles.text}>
                  Public Release of PPI-Apps, PPIA Official Membership
                  Application
                </li>
                <li className={styles.text}>Re-imagined PPIA Website</li>
              </ul>
              <h4>{/* <b>CREDITS TO @WILDWONDERINGWILLY</b> */}</h4>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
