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

// import Opportunities from '../src/pages/opportunities/Opportunities';
// import Scholarship from '../src/pages/opportunities/Scholarship';
// import ScholarshipTypes from '../src/pages/opportunities/pages/ScholarshipTypes';

import PageUnavailable from '../src/pages/404/PageUnavailable.jsx';
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
    axios.get(`https://elemental-backend.onrender.com/slideshow/`).then((data) => {
      dispatch(setSlideshow(data.data));
    });
  }, []);
  useEffect(() => {
    axios
      .get(`https://elemental-backend.onrender.com/user/ppia/`)
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
        <Route path="/alpha" element={<Home />} />
        <Route path="/alpha/about" element={<About />} />
        <Route path="/alpha/chapter/:statename" element={<Chapter />} />
        <Route path="/alpha/liveinoz" element={<Liveinoz />} />
        <Route path="/alpha/liveinoz/:id" element={<ReadMore />} />
        <Route path="/alpha/blog" element={<Blog />} />
        <Route path="/alpha/contact" element={<Contact />} />
        {/* <Route path="/alpha/opportunities/scholarship" element={<Scholarship />}>
          <Route
            path="/alpha/opportunities/scholarship/:types"
            element={<ScholarshipTypes />}
          />
        </Route> */}

        {/* if link doesnt exist or route is not connected, automatically go to this page */}
        <Route path="*" element={<PageUnavailable />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
