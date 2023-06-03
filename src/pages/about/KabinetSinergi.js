import React, { Component, useEffect, useState } from 'react';
import {
  Carousel,
  Container,
  Row,
  Col,
  Image,
  CardGroup,
  Card,
  Button
} from 'react-bootstrap';
import axios from 'axios';
import styles from './KabinetSinergi.module.css';

import '../home/Home.css';

import dummy1 from '../../assets/images/cat.jpg';
import dummy2 from '../../assets/images/cat2.jpg';
import dummy3 from '../../assets/images/cat3.jpg';
import Loading from '../../components/Loading';

const image_arr = [
  <img
    className="d-block mx-auto responsive-carousel img-fluid"
    src={dummy1}
  />,
  <img
    className="d-block mx-auto responsive-carousel img-fluid"
    src={dummy2}
  />,
  <img className="d-block mx-auto responsive-carousel img-fluid" src={dummy3} />
];

const source_arr = [
  {
    img: dummy1,
    name: 'cat1',
    position: 'IT Officer',
    university: 'University of New South Wales'
  },
  {
    img: dummy2,
    name: 'cat2',
    position: 'Community Welfare Officer',
    university: 'University of Sydney'
  },
  {
    img: dummy3,
    name: 'cat3',
    position: 'IT Officer',
    university: 'University of Melbourne'
  },
  {
    img: dummy1,
    name: 'cat4',
    position: 'IT Officer',
    university: 'University of Technology Sydney'
  }
];

const execToObj = (array) => {
  let execObj = new Object();
  execObj.name = 'Executive';
  for (let x of array) {
    execObj[x.role] = new Object();
    execObj[x.role].name = x.name;
    execObj[x.role].image = x.image;
  }
  return execObj;
};
const oneDeptToObj = (array) => {
  let deptObj = new Object();
  //set name field for each dept
  deptObj.name = array[0].department;
  //will be an array of objects ( one commiittee one object)
  let commArr = [];
  for (let x of array) {
    if (x.role == 'Committee') {
      let comObj = new Object();
      comObj.name = x.name;
      comObj.image = x.image;
      commArr.push(comObj);
    } else {
      deptObj[x.role] = new Object();
      deptObj[x.role].name = x.name;
      deptObj[x.role].image = x.image;
    }
  }
  deptObj.Committee = commArr;
  return deptObj;
};

const iterateAllDept = (deptList, dataArr) => {
  let final = [];
  deptList.map((eachDept) => {
    const memberDepArr = dataArr.filter((item) => item.department === eachDept);
    const deptInObj = oneDeptToObj(memberDepArr);
    final.push(deptInObj);
  });
  return final;
};

const getAllDept = async () => {
  let deptList = [];
  await axios
    .get('https://elemental-backend.onrender.com/user/committee/')
    .then((data) => {
      //create Exec object
      const execArr = data.data.filter(
        (item) => item.department == 'Executive Committee'
      );
      let execObj = execToObj(execArr);
      //Each available dept
      data.data.map((ea) => {
        if (
          !deptList.includes(ea.department) &&
          ea.department !== 'Executive Committee'
        ) {
          deptList.push(ea.department);
        }
      });
      deptList = iterateAllDept(deptList, data.data);
      //need to add exec to the front
      deptList.unshift(execObj);
      console.log(deptList);
    });
  return deptList;
};

export default function KabinetSinergi() {
  const [deptList, setDeptList] = useState([]);

  useEffect(() => {
    async function fetchCommittee() {
      let response = await getAllDept();
      setDeptList(response);
      console.log('dept list');
    }

    fetchCommittee();
  }, []);

  return (
    <div>
      <h1 className="text-center text-[#ed1c24] mt-6">Our Committee</h1>
      <Carousel className="carousel-dark" fade>
        {deptList.length >= 1 ? (
          deptList.map((eachDept, idx) => {
            return (
              <Carousel.Item key={idx}>
                <Division deptData={eachDept} />
              </Carousel.Item>
            );
          })
        ) : (
          <div>
            <h2 className="text-center text-[#ed1c24] mt-6">Generating Images, Please Wait</h2>
          </div>
        )}
      </Carousel>
    </div>
  );
}

export function Division(props) {
  return (
    <div className="mx-12 my-8 px-4 py-0">
      <div className="flex flex-col items-center">
        <h3>{props.deptData.name}</h3>
        <p>Officers List</p>
      </div>
      <div className="flex flex-row flex-wrap justify-around mx-10 my-0 md:mx-40">
        <MemberCard deptData={props.deptData} />
      </div>
    </div>
  );
}

export function MemberCard(props) {
  const deptData = props.deptData;
  const s3PhotoLink = 'https://committeesphoto.s3.us-east-2.amazonaws.com/';
  let cardList = [];
  // if the data passed in is Executive.
  if (deptData.name === 'Executive') {
    for (const keys in deptData) {
      if (keys != 'name') {
        console.log(`${deptData[keys].name}`);
        console.log(`${deptData[keys].image}`);
        cardList.push(
          <Card className={`w-[25rem] flex flex-row items-center overflow-scroll mt-4 px-4 py-2`}>
            <Image
              src={`${s3PhotoLink}${deptData[keys].image}`}
              className={`w-20 h-20 object-cover fluid me-4 my-2`}
              roundedCircle
            />
            <Card.Body className={`ps-0`}>
              <Card.Title>{`${deptData[keys].name}`}</Card.Title>
              <Card.Subtitle>{`${keys}`}</Card.Subtitle>
            </Card.Body>
          </Card>
        );
      }
    }
  } else {
    //case for all other dept
    for (const keys in deptData) {
      if (keys != 'name') {
        if (keys == 'Committee') {
          //do committee with map or for each
          deptData[keys].forEach((each) => {
            cardList.push(
              <Card className={`w-[25rem] flex flex-row items-center overflow-scroll mt-4 px-2 py-2`}>
                <Image
                  src={`${s3PhotoLink}${each.image}`}
                  className={`w-20 h-20 object-cover fluid me-4 my-2`}
                  roundedCircle
                />
                <Card.Body className={`ps-0`}>
                  <Card.Title>{`${each.name}`}</Card.Title>
                  <Card.Subtitle>{`${keys}`}</Card.Subtitle>
                </Card.Body>
              </Card>
            );
          });
        } else {
          // for director and co director
          cardList.push(
            <Card className={`w-[25rem] flex flex-row items-center overflow-scroll mt-4 px-4 py-2`}>
              <Image
                src={`${s3PhotoLink}${deptData[keys].image}`}
                className={`w-20 h-20 object-cover fluid me-4 my-2`}
                roundedCircle
              />
              <Card.Body className={`ps-0`}>
                <Card.Title>{`${deptData[keys].name}`}</Card.Title>
                <Card.Subtitle>{`${keys}`}</Card.Subtitle>
              </Card.Body>
            </Card>
          );
        }
      }
    }
  }
  return <>{cardList}</>;
}
