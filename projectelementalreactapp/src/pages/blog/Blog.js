import axios from "axios"
import React, { Component, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import Loading from "../../components/Loading"
import {
    setNews,
    setLoadingTrue,
    setLoadingFalse,
} from "../../store/news/newsSlice"
import s from "./Blog.module.css"
import NewsList from "./newsList/NewsList"
import Sidebar from "./sidebar/Sidebar"

function Blog() {
    //contain all the state. lets think about redux for the blog
    const news = useSelector((state) => state.news.news)
    const loading = useSelector((state) => state.news.loading)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setLoadingTrue())
        axios
            .get(`https://ppia-backend.herokuapp.com/feed/articles/`)
            .then((data) => {
                console.log(data.data)
                dispatch(setNews(data.data))
                dispatch(setLoadingFalse())
            })
    }, [])
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
