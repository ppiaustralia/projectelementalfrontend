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

const fetcher = url => axios.get(url).then(res => res.data)

function usePage(url){
  const {data, error} = useSWR(url, fetcher);
  return {data, error};
}

function Chapter(props) {
  const [branch, setBranch] = useState([]);
  const [twigs, setTwigs] = useState([]);
  const chapterBaseLink = 'https://chapterslogo.s3.us-east-2.amazonaws.com/';

  const {data, errorAll, isLoadingAll } = usePage('https://elemental-backend.onrender.com/user/ppia/');
  // const {dataACT, error} = usePage('https://elemental-backend.onrender.com/user/ppia/?state=ACT') 

  // get statename value form url
  let { statename } = useParams();

  // send get to backend
  useEffect(() => {
    console.log(data)
    // when statename changes, setBranch and twigs to empty to trigger loading icon
    setBranch([]);
    setTwigs([]);
    if (statename === 'all' && data !== undefined) {
      setBranch(data.filter((eachData) => eachData.level === 1));
    } else if (statename !== 'all' && data !== undefined){
        // axios.get(`https://elemental-backend.onrender.com/user/ppia/?state=${statename}`)
        //   .then((data) => {
        //     setBranch(data.data.filter((eachData) => eachData.level === 1));
        //     setTwigs(data.data.filter((eachData) => eachData.level === 2));
        //   });
        setBranch(data.filter((eachData) => eachData.level === 1 && eachData.state === statename.toUpperCase()));
        setTwigs(data.filter((eachData) => eachData.level === 2 && eachData.state === statename.toUpperCase()));
    }
  }, [statename, data]);

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
