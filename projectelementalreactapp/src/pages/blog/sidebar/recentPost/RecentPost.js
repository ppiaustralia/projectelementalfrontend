import React from "react"
import s from "./RecentPost.module.css"
import SmallNewsItem from "./SmallNewsItem"
function RecentPost() {
    return (
        <div className={s.recentPostCont}>
            Recent Post
            <SmallNewsItem />
            <SmallNewsItem />
            <SmallNewsItem />
        </div>
    )
}

export default RecentPost
