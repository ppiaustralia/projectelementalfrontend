import React from "react"
import s from "./SmallNewsItem.module.css"

function SmallNewsItem() {
    return (
        <div className={s.smallNewsCont}>
            <img
                src="https://uc.uxpin.com/files/1165148/1125601/PPIA_1605140707463-bc3ec2c4b4f96c634f9cb3dbea232400-0115a1.jpg"
                alt="put title here"
                className={s.thumbnail}
            />
            <div className={s.newsTitle}>Some sample title of PPIA HAHA</div>
        </div>
    )
}

export default SmallNewsItem
