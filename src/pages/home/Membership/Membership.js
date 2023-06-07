import React from 'react';

import styles from './Membership.module.css';

import { Container, Row, Col, Button } from 'react-bootstrap/';

export default function Membership() {
  return (
    <div className={`bg-white rounded-[5px] ${styles['front-page']}`}>
      <Container direction="horizontal">
        <Row>
          <Col className='m-auto'>
            <p className={styles.text}>
              <b>
                Ready to be a <span style={{ color: 'red' }}>member*</span>
              </b>
            </p>
            <p className={styles.text}>Download our App NOW</p>
          </Col>

          <Col style={{ marginTop: '20px' }}>
            <Row>
              <Button
                type="button"
                className={styles.buttonDecoration}
                style={{
                  backgroundColor: 'black',
                  width: '200px',
                  marginBottom: '10px'
                }}
              >
                Apple App Store - Coming Soon
              </Button>
            </Row>
            <Row>
              <Button
                type="button"
                className={styles.buttonDecoration}
                style={{
                  backgroundColor: 'red',
                  width: '200px'
                }}
              >
                Android Play Store - Coming Soon
              </Button>
            </Row>
          </Col>
        </Row>

        <Row>
          <p className={styles.sideNote}>
            <i>
              *<u>it's free to register (once released)</u>
            </i>
          </p>
        </Row>
      </Container>
    </div>
  );
}
