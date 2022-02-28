import React from 'react';
import './Home.css';
import ImageSlider from './ImageSlider/ImageSlider';
import ChaptersGallery from './ChaptersGallery/ChaptersGallery';
import NewsCards from './NewsCards/NewsCards';
import { useSelector, useDispatch } from 'react-redux';
import LatestUpdate from './latestUpdate/LatestUpdate';
import ContactUs from './ContactUs/ContactUs';
export default function Home() {
  const news = useSelector((state) => state.news.news);

  return (
    <>
      <ImageSlider />
      <ChaptersGallery />
      <LatestUpdate />
      <ContactUs />
    </>
  );
}
