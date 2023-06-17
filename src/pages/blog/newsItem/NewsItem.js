import React from "react"
import Social from "../social/Social"
import s from "./NewsItem.module.css"
import parse  from 'html-react-parser'
import moment from "moment"

function NewsItem(props) {
    const { title, tag, content, publish_date, image, slug, is_deleted } =
        props.newsContent
    const previewContent = content.slice(0, 100)
    const parsedDate = moment(publish_date).format("LLL")
    return (
        <div className="border w-[90%] mb-[1em] p-[1em] border-solid border-[lightgrey] md:w-[45%]">
            <div className="grid w-full place-items-center mb-[1em]">
                <img
                    className="w-6/12 max-h-[25vh] object-contain"
                    src={`${image}`}
                    alt={`${slug}`}
                />
            </div>
            {/* TO-DO: covert scroll to tailwind */}
            <div className={s.newsText}>
                <div className="text-2xl text-[#ff2020]">{title}</div>
                <div>{parse(content)}</div>
                <div className="flex flex-row justify-between mb-0 pb-0 border-b-[lightsteelblue] border-b border-solid">
                    <span className="text-[10px]">{parsedDate}</span>
                    <span className="text-[10px]">{tag[0].name}</span>
                </div>
            </div>
            <div className="flex flex-row justify-between pt-[0.5em]">
                <span>
                    Read <i className="fas fa-arrow-right" />
                </span>
                <Social />
            </div>
        </div>
    )
}

export default NewsItem
