/* eslint-disable */
/* eslint-disable no-alert, no-console */
{/* prettier-ignore */}

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import Home from '../src/pages/home/Home';
import Navbar from './layout/navbar/Navbar';
import Chapter from '../src/pages/chapter/Chapter';
import About from '../src/pages/about/About';
import Contact from '../src/pages/contact/Contact';
import Liveinoz, { ReadMore } from '../src/pages/liveinoz/Liveinoz';
import Blog from '../src/pages/blog/Blog';

import Scholarship from '../src/pages/opportunities/scholarship/Scholarship';
import DisplayScholarship from '../src/pages/opportunities/scholarship/components/DisplayScholarship';

import PageUnavailable from '../src/pages/404/PageUnavailable';

// import { FooterContainer } from "./layout/footer/footer";
import Footer from './layout/newFooter/Footer';
import ScrollToTop from './components/ScrollToTop';
import {
  setNews,
  setLoadingTrue,
  setLoadingFalse
} from './store/news/newsSlice';
import { setSlideshow } from './store/slideshow/slideshowSlice';
import { setChapters } from './store/chapters/chaptersSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLoadingTrue());
    axios
      .get(`https://ppia-backend.herokuapp.com/feed/articles/`)
      .then((data) => {
        dispatch(setNews(data.data));
        dispatch(setLoadingFalse());
      });
  }, []);
  useEffect(() => {
    axios.get(`https://ppia-backend.herokuapp.com/slideshow/`).then((data) => {
      dispatch(setSlideshow(data.data));
    });
  }, []);
  useEffect(() => {
    axios
      .get(`https://ppia-backend.herokuapp.com/user/ppia/`)
      .then((data) => {
        dispatch(setChapters(data.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/chapter/:statename" element={<Chapter />} />
        <Route path="/liveinoz" element={<Liveinoz />} />
        <Route path="/liveinoz/:id" element={<ReadMore />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/opportunities/scholarship" element={<Scholarship />} />
        <Route
          path="/opportunities/scholarship/:types"
          element={<DisplayScholarship />}
        />

        {/* if link doesnt exist or route is not connected, automatically go to this page */}
        <Route path="*" element={<PageUnavailable />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
