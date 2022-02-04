import React from "react"


import "./Home.css";
import ImageSlider from "./ImageSlider/ImageSlider";
import ChaptersGallery from "./ChaptersGallery/ChaptersGallery";
import MainHighlights from "./MainHighlights/MainHighlights";
import Membership from "./Membership/Membership";
import NewsCards from "./NewsCards/NewsCards";

export default function Home() {
    return (
      <>
        <ImageSlider />
        <ChaptersGallery />
        <MainHighlights />
        <Membership/>
        <NewsCards />
        {/* bottom_panel */}
        <div className="front-page bottompanel">UPCOMING EVENTS</div>;
      </>
    );
}
