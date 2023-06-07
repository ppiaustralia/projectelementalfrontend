import React from 'react';
import { Link } from 'react-router-dom';
import { news_data } from '../database_home';
import styles from './LatestUpdate.module.css';
import { useSelector } from 'react-redux';
import NewsCards from '../NewsCards/NewsCards';

export default function LatestUpdate() {
  const news = useSelector((state) => state.news.news);
  const loading = useSelector((state) => state.news.loading);
  const newsLatest = news.slice(0, 3);
  return (
    <div className="bg-[#e9ecef] rounded-[5px] flex flex-col items-center justify-center pt-[1em]">
      <div className="text-[32px] justify-center pb-[0.2em]">
        <h2>Preview on PPIA Latest Updates</h2>
      </div>

      <div className="flex flex-row">
        {newsLatest.map((eachItem,index) => (
          <NewsCards newsContent={eachItem} key={index} />
        ))}
      </div>

      <Link to="/alpha/blog" className="flex justify-center text-[#ec2027] bg-[white] w-48 no-underline text-center !mb-[1em] m-0 px-[1em] py-[0.5em] rounded-[1em] hover:bg-[#ec2027] hover:text-[white]">
        <span>Read PPIA News, Events, & Blogs</span>
      </Link>
    </div>
  );
}
