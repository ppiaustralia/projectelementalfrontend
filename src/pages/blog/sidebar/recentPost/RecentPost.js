import React from "react"
import { useSelector } from "react-redux"

import s from "./RecentPost.module.css"
import SmallNewsItem from "./SmallNewsItem"
function RecentPost() {
    const news = useSelector((state) => state.news.news)
    const newsLatest = news.slice(0, 3)
    return (
        <div className={s.recentPostCont}>
            <strong> Recent Post</strong>
            {newsLatest.map((eachItem) => (
                <SmallNewsItem newsContent={eachItem} />
            ))}
        </div>
    )
}

export default RecentPost
