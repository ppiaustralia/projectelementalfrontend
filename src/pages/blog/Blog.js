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
import useSWR from "swr"

function Blog() {
    const dispatch = useDispatch();

    const fetcher = url => axios.get(url).then(res => res.data)
    const {data, error} = useSWR(`https://elemental-backend.onrender.com/feed/articles/`, fetcher);

    const fetchBlog = () =>{
        dispatch(setLoadingTrue());
        if (data !== undefined){
            dispatch(setNews(data));
            dispatch(setLoadingFalse());
        }
    }
    useEffect(() => {
        fetchBlog()
    }, [data]);


    const news = useSelector((state) => state.news.news)
    let chunkSize = 6
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
                    {news.length > 0 ? <NewsList news={news} chunkSize={chunkSize} />: <Loading /> }

                </div>
            </div>
        </div>
    )
}

export default Blog
