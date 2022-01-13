import { configureStore } from "@reduxjs/toolkit"
import newsReducer from "./news/newsSlice"

export default configureStore({
    reducer: {
        news: newsReducer,
    },
})
