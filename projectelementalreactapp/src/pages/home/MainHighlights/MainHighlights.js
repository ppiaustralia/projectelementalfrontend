import React from 'react';

import styles from './MainHighlights.module.css';

import { Container, Row, Col } from 'react-bootstrap/';

export default function MainHighlights() {
  return (
    <div className={`${styles.background} ${styles['front-page']}`}>
      <Container>
        <Row>
          <Col xs={6}>
            <div>
              <img
                src="https://images.squarespace-cdn.com/content/v1/5bfe7af2697a987cdd7bed47/1628170762772-M5V7TYN4SZQIOFVS8QEB/PPIA+Macquarie.jpg"
                style={{ width: '95%', height: '100%' }}
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
