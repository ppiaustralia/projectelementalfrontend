import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import useSWR from 'swr'

import './Chapter.css';
import Branch from './Branch';
import Twigs from './Twigs';
import Loading from '../../components/Loading';
// temporary Database
import ChapterDatabase from './ChapterDatabase.json';

const fetcher = (...args) => fetch(...args).then(res => res.json());

function useData2(){
  const {data, error} = useSWR('//https://elemental-backend.onrender.com/user/ppia/', fetcher);
  return {data, error};
}

function Chapter(props) {
  const [branch, setBranch] = useState([]);
  const [twigs, setTwigs] = useState([]);
  const chapterBaseLink = 'https://chapterslogo.s3.us-east-2.amazonaws.com/';

  const {data, errorAll, isLoadingAll } = useSWR('https://elemental-backend.onrender.com/user/ppia/', fetcher);
  // const { data: data2, error: error2 } = useData2();

  // get statename value form url
  let { statename } = useParams();
  //send get to backend
  useEffect(() => {
    // when statename changes, setBranch and twigs to empty to trigger loading icon
    setBranch([]);
    setTwigs([]);
    if (statename === 'all' && data != undefined) {
      setBranch(data.filter((eachData) => eachData.level === 1));
    } 
    // else if (data2 != undefined) {
    //   setBranch(data2.filter((eachData) => eachData.level === 1));
    //   setTwigs(data2.filter((eachData) => eachData.level === 2));
    // }
  }, [statename]);

  // const filteredData = receivedData.filter(data => data.parent = "ISA NSW")
  return (
    <div className="container">
      {branch.length < 1 ? (
        <>
          <Loading />
        </>
      ) : (
        <Branch data={branch} chBaseLink={chapterBaseLink} />
      )}
      {twigs.length < 1 ? (
        <></>
      ) : (
        <Twigs data={twigs} chBaseLink={chapterBaseLink} />
      )}
    </div>
  );
}

export default Chapter;
