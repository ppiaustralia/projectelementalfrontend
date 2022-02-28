import React, { useEffect } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "../src/pages/home/Home"
import Navbar from "./layout/navbar/Navbar"

import Chapter from "../src/pages/chapter/Chapter"
import About from "../src/pages/about/About"
import Contact from "../src/pages/contact/Contact"
import Liveinoz, { ReadMore } from "../src/pages/liveinoz/Liveinoz"
import Blog from "../src/pages/blog/Blog"
// import { FooterContainer } from "./layout/footer/footer";
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
}

export default App
