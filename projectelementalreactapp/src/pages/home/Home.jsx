import React from "react"
import "./Home.css"
import ImageSlider from "./ImageSlider/ImageSlider"
import ChaptersGallery from "./ChaptersGallery/ChaptersGallery"
import NewsCards from "./NewsCards/NewsCards"
import { useSelector, useDispatch } from "react-redux"

export default function Home() {
    const news = useSelector((state) => state.news.news)
    return (
        <>
            <ImageSlider />
            <ChaptersGallery />
            <NewsCards />
            {/* bottom_panel */}
            <div className="front-page bottompanel">UPCOMING EVENTS</div>;
        </>
    )
}
