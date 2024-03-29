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
      <h2 className="font-header text-[2em] justify-center mb-[0.5em]">Preview on PPIA Latest Updates</h2>
      <div className="flex flex-col md:flex-row">
        {newsLatest.map((eachItem,index) => (
          <NewsCards newsContent={eachItem} key={index} />
        ))}
      </div>
      <Link to="/alpha/blog" className="flex justify-center text-[#ec2027] bg-[white] border-2 border-grey w-48 no-underline text-center !mb-[2em] m-0 px-[1em] py-[0.5em] rounded-[1em] hover:bg-[#ec2027] hover:text-[white]">
        Read PPIA News, Events, & Blogs
      </Link>
    </div>
  );
}
