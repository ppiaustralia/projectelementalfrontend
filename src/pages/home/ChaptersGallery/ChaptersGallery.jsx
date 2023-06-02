import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './ChaptersGallery.module.css';
import axios from 'axios';

import { Container, Row, Col, Image } from 'react-bootstrap/';
import { useSelector } from 'react-redux';

import Loading from '../../../components/Loading';

export default function ChaptersGallery() {
  const [branchList, setBranchList] = useState([]);
  const chapterBaseLink = 'https://chapterslogo.s3.us-east-2.amazonaws.com/';

  const chapters = useSelector((state) => state.chapters.chapters);
  const branches = chapters.filter((eachData) => eachData.level === 1);

  useEffect(() => {
    axios
      .get(`https://elemental-backend.onrender.com/user/ppia/`)
      .then((data) => {
        setBranchList(
          data.data.filter((eachPPIAObj) => eachPPIAObj.level === 1)
        );
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);
  return (
    <div className="flex flex-col justify-items-center items-center justify-evenly text-center">
      <div className="text-[32px] mt-[1em]">
        <h2>Chapters</h2>
      </div>

      <div className="inline-grid grid-cols-[repeat(4,auto)] grid-rows-[auto] mt-[30px]">
        <Container>
          <Row className="justify-content-md-center">
            {branches.map((branch, i) => {
              return (
                <>
                  <Col md="auto">
                    <Link to={`alpha/chapter/${branch.state}`}>
                      <Image
                        src={`${chapterBaseLink}${branch.image}`}
                        className="w-[180px] h-[180px] object-contain border-0 block mb-2.5 mx-auto"
                        // roundedCircle
                        style={{ objectFit: 'contain' }}
                      />
                      <h5 className={styles.chaptersName}>{branch.name}</h5>
                      {/* <h5 className="text-xs text-[black] w-[0.2px] mb-[50px]">{branch.name}</h5> */}
                    </Link>
                  </Col>
                </>
              );
            })}
          </Row>
          <p className="text-lg w-6/12 mt-[70px] mb-[30px] m-auto">
            PPIA comprises of 8 state-level organisations
            <i>(or PPIA Chapters) </i>
            and <br /> 33 university-level organisations
            <i>(or PPIA Branches)</i>
          </p>
        </Container>
      </div>
    </div>
  );
}
