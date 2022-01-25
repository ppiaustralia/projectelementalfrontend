import React from "react"
import NewsItem from "../newsItem/NewsItem"
import s from "./NewsList.module.css"
function NewsList(props) {
    const { news } = props
    return (
        <div className={s.newsListCont}>
            {news.map((eachNews) => (
                <NewsItem newsContent={eachNews} />
            ))}
        </div>
    )
}

export default NewsList
