import React from "react"

import "./Home.css"
import ImageSlider from "./ImageSlider/ImageSlider"
import ChaptersGallery from "./ChaptersGallery/ChaptersGallery"
import NewsCards from "./NewsCards/NewsCards"

export default function Home() {
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
