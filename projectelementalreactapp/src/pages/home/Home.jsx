import React from 'react';
import './Home.css';
import ImageSlider from './ImageSlider/ImageSlider';
import ChaptersGallery from './ChaptersGallery/ChaptersGallery';
import MainHighlights from './MainHighlights/MainHighlights';
import Membership from './Membership/Membership';
// import NewsCards from './NewsCards/NewsCards';

import { useSelector, useDispatch } from 'react-redux';
import LatestUpdate from './LatestUpdate/LatestUpdate';
import ContactUs from './ContactUs/ContactUs';
export default function Home() {
  const news = useSelector((state) => state.news.news);

  return (
    <>
      <ImageSlider />
      <ChaptersGallery />
      <MainHighlights />
      <Membership />
      <LatestUpdate />
      {/* <NewsCards /> */}
      <ContactUs />
      {/* <div className="front-page bottompanel">UPCOMING EVENTS</div>; */}
    </>
  );
}
