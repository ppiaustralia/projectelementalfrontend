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
        <div className="flex flex-col p-[3em]">
            <div className={s.title}>
                <h2>Welcome to PPIA Blog</h2>
            </div>
            <div className="flex flex-col sm:flex-row">
                <div className="flex-1 w-full bg-[thistle]">
                    <Sidebar />
                </div>
                <div className="flex-[4] w-full mt-4 sm:!mt-0">
                    {news.length > 0 ? <NewsList news={news} chunkSize={chunkSize} />: <Loading /> }
                </div>
            </div>
        </div>
    )
}

export default Blog
