import { configureStore } from "@reduxjs/toolkit"
import newsReducer from "./news/newsSlice"
import slideshowReducer from "./slideshow/slideshowSlice"

export default configureStore({
    reducer: {
        news: newsReducer,
        slideshow: slideshowReducer,
    },
})
