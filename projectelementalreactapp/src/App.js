<<<<<<< HEAD
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { withRouter } from 'react-router';
import Home from '../src/pages/home/Home';
import Navbar from './layout/navbar/Navbar';
=======
import React, { useEffect } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "../src/pages/home/Home"
import Navbar from "./layout/navbar/Navbar"
>>>>>>> erick-blog

import Chapter from '../src/pages/chapter/Chapter';
import About from '../src/pages/about/About';
import Contact from '../src/pages/contact/Contact';
import Liveinoz, { ReadMore } from '../src/pages/liveinoz/Liveinoz';
import Blog from '../src/pages/blog/Blog';
// import Opportunities from '../src/pages/opportunities/Opportunities';
import Scholarship from '../src/pages/opportunities/Scholarship';
import CardScholarship from '../src/pages/opportunities/components/CardScholarship';
// import Career from '../src/pages/career/Career';
// import { FooterContainer } from "./layout/footer/footer";
<<<<<<< HEAD
import PageUnavailable from '../src/pages/404/PageUnavailable.jsx';
import Footer from './layout/newFooter/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route
          path="/chapter/:statename"
          exact
          component={withRouter(Chapter)}
        />
        <Route path="/liveinoz" exact component={Liveinoz} />
        <Route path="/liveinoz/:id" exact component={ReadMore} />
        <Route path="/blog" exact component={Blog} />
        <Route path="/contact" exact component={Contact} />
        <Route
          path="/opportunities/scholarship"
          exact
          component={Scholarship}
        />
        <Route
          path="/opportunities/scholarship/:types"
          exact
          component={withRouter(CardScholarship)}
        />

        {/* In react-router-v4 you don't nest <Routes />. Instead, you put them inside another <Component />.
          <Route path="/opportunities/scholarship"exact component={Scholarship}  />
          <Route path="/opportunities/career" exact component ={Career} />
        */}
        <Route component={PageUnavailable} />
        {/* <Route path="*" component={PageUnavailable} /> */}
        {/* <Route path="/404" component={PageUnavailable} /> */}
        {/* <Redirect to="/404" /> */}
      </Switch>
      <Footer />
    </Router>
  );
=======
import Footer from "./layout/newFooter/Footer"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"

import {
    setNews,
    setLoadingTrue,
    setLoadingFalse,
} from "./store/news/newsSlice"
import { setSlideshow } from "./store/slideshow/slideshowSlice"

function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setLoadingTrue())
        axios
            .get(`https://ppia-backend.herokuapp.com/feed/articles/`)
            .then((data) => {
                dispatch(setNews(data.data))
                dispatch(setLoadingFalse())
            })
    }, [])
    useEffect(() => {
        axios
            .get(`https://ppia-backend.herokuapp.com/slideshow/`)
            .then((data) => {
                dispatch(setSlideshow(data.data))
            })
    }, [])
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="chapter/:statename" element={<Chapter />} />
                <Route path="liveinoz" element={<Liveinoz />} />
                <Route path="liveinoz/:id" element={<ReadMore />} />
                <Route path="blog" element={<Blog />} />
                <Route path="contact" element={<Contact />} />
            </Routes>
            <Footer />
        </Router>
    )
>>>>>>> erick-blog
}

export default App;
