import React, { useState, useEffect } from 'react';
import NewsItem from '../newsItem/NewsItem';
import s from './NewsList.module.css';
function NewsList(props) {
  const { news, chunkSize } = props;
  const [currIdx, setCurrIdx] = useState(0);
  const handleIdxChange = (idx) => {
    setCurrIdx(idx);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currIdx]);

  let newsArray = [];
  for (let i = 0; i < news.length; i += chunkSize) {
    let pageNewsArr = news.slice(i, i + chunkSize);
    newsArray.push(pageNewsArr);
  }
  return (
    <div className={s.newsListCont}>
      {news.map((eachNews) => (
        <NewsItem newsContent={eachNews} />
      ))}
    </div>
  );
}

export default NewsList;
