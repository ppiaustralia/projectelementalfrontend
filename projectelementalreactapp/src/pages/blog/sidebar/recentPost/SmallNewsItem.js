import React from "react"

import s from "./SmallNewsItem.module.css"

function SmallNewsItem(props) {
    const { title, tag, content, publish_date, image, slug, is_deleted } =
        props.newsContent
    return (
        <div className={s.smallNewsCont}>
            <img src={`${image}`} alt={`${slug}`} className={s.thumbnail} />
            <div className={s.newsTitle}>{title}</div>
        </div>
    )
}

export default SmallNewsItem
