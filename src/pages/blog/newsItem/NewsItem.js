import React from "react"
import Social from "../social/Social"
import s from "./NewsItem.module.css"
import ReactHtmlParser from "react-html-parser"
import moment from "moment"

function NewsItem(props) {
    const { title, tag, content, publish_date, image, slug, is_deleted } =
        props.newsContent
    const previewContent = content.slice(0, 100)
    const parsedDate = moment(publish_date).format("LLL")
    console.log()
    return (
        <div className={s.newsItemCont}>
            <div className={s.coverImageCont}>
                <img
                    className={s.coverImage}
                    src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png"
                    alt="Google logo"
                />
            </div>
            <div className={s.newsText}>
                <div className={s.newsTitle}>{title}</div>
                <div>{ReactHtmlParser(content)}</div>
                <div className={s.newsInfo}>
                    <span className={s.newsDate}>{parsedDate}</span>
                    <span>Education Sport News</span>
                </div>
                <div className={s.newsFooter}>
                    <span>
                        Read <i class="fas fa-arrow-right" />
                    </span>
                    <Social />
                </div>
            </div>
        </div>
    )
}

export default NewsItem
