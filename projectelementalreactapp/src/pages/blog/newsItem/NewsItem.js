import React from "react"
import Social from "../social/Social"
import s from "./NewsItem.module.css"
function NewsItem(props) {
    const { title, tag, content, publish_date, image, slug, is_deleted } =
        props.newsContent
    const previewContent = content.slice(0, 100)
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
                <div dangerouslySetInnerHTML={{ __html: content }}></div>
                <div className={s.newsInfo}>
                    <span className={s.newsDate}>20th April 1969</span>
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
