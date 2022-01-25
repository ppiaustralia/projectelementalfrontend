import React from "react"
import s from "./RecentPost.module.css"
import SmallNewsItem from "./SmallNewsItem"
function RecentPost() {
    return (
        <div className={s.recentPostCont}>
            <strong> Recent Post</strong>
            <SmallNewsItem />
            <SmallNewsItem />
            <SmallNewsItem />
        </div>
    )
}

export default RecentPost
