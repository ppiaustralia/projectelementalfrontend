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
    <div className={`${styles.background} ${styles['front-page']}`}>
      <div className={styles['news-title']}>
        <h2>Preview on PPIA Latest Updates</h2>
      </div>

      <div className={styles.newsDeck}>
        {newsLatest.map((eachItem) => (
          <NewsCards newsContent={eachItem} />
        ))}
      </div>

      <Link to="/blog" className={styles.moreButton}>
        <span>Read PPIA News, Events, & Blogs</span>
      </Link>
    </div>
  );
}
