import React, { useState, useEffect } from "react"
import NewsItem from "../newsItem/NewsItem"
import Counter from "./counter/Counter"
import s from "./NewsList.module.css"
function NewsList(props) {
    const { news, chunkSize } = props
    const [currIdx, setCurrIdx] = useState(0)
    const handleIdxChange = (idx) => {
        setCurrIdx(idx)
    }
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [currIdx])

    let newsArray = []
    for (let i = 0; i < news.length; i += chunkSize) {
        let pageNewsArr = news.slice(i, i + chunkSize)
        newsArray.push(pageNewsArr)
    }
    return (
        <div className="flex flex-wrap justify-evenly">
            {newsArray[currIdx].map((eachNews,index) => (
                <NewsItem newsContent={eachNews} key={index} />
            ))}
            <div className="w-full grid place-items-center">
                <Counter
                    currIdx={currIdx}
                    length={newsArray.length}
                    handleIdxChange={handleIdxChange}
                />
            </div>
        </div>
    )
}

export default NewsList
