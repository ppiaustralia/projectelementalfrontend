import React from "react"
import NewsItem from "../newsItem/NewsItem"
import s from "./NewsList.module.css"
function NewsList() {
    return (
        <div className={s.newsListCont}>
            <NewsItem />
            <NewsItem />
            <NewsItem />
            <NewsItem />
        </div>
    )
}

export default NewsList
