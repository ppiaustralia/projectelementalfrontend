import axios from "axios"
import React, { Component, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import Loading from "../../components/Loading"
import ScrollToTop from "../../components/ScrollToTop"
import {
    setNews,
    setLoadingTrue,
    setLoadingFalse,
    selectNews,
} from "../../store/news/newsSlice"
import s from "./Blog.module.css"
import NewsList from "./newsList/NewsList"
import Sidebar from "./sidebar/Sidebar"

function Blog() {
    //contain all the state. lets think about redux for the blog
    const news = useSelector((state) => state.news.news)
    const loading = useSelector((state) => state.news.loading)
    return (
        <div className={s.blogContainer}>
            <div className={s.title}>
                <h2>Welcome to PPIA Blog</h2>
            </div>
            <div className={s.blogContent}>
                <div className={s.blogSidebar}>
                    <Sidebar />
                </div>
                <div className={s.blogNews}>
                    {loading ? <Loading /> : <NewsList news={news} />}
                </div>
            </div>
        </div>
    )
}

export default Blog
