import React from "react"
import Social from "../social/Social"
import s from "./NewsItem.module.css"
// import ReactHtmlParser from "react-html-parser"
import moment from "moment"

function NewsItem(props) {
    const { title, tag, content, publish_date, image, slug, is_deleted } =
        props.newsContent
    const previewContent = content.slice(0, 100)
    const parsedDate = moment(publish_date).format("LLL")
    return (
        <div className={s.newsItemCont}>
            <div className={s.coverImageCont}>
                <img
                    className={s.coverImage}
                    src={`${image}`}
                    alt={`${slug}`}
                />
            </div>
            <div className={s.newsText}>
                <div className={s.newsTitle}>{title}</div>
                {/*<div>{ReactHtmlParser(content)}</div>*/}
                <div className={s.newsInfo}>
                    <span className={s.newsDate}>{parsedDate}</span>
                    <span className={s.tags}>{tag[0].name}</span>
                </div>
            </div>
            <div className={s.newsFooter}>
                <span>
                    Read <i className="fas fa-arrow-right" />
                </span>
                <Social />
            </div>
        </div>
    )
}

export default NewsItem
