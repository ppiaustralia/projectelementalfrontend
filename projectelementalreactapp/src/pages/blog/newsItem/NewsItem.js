import React from "react"
import s from "./NewsItem.module.css"

function NewsItem() {
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
                <div className={s.newsTitle}>Title</div>
                <p>
                    Subtitle Lorem ipsum dolor sit amet.Contrary to popular
                    belief, Lorem Ipsum is not simply random text. It has roots
                    in a piece of classical Latin literature from 45 BC, making
                    it over 2000 years old.
                </p>
            </div>
        </div>
    )
}

export default NewsItem
