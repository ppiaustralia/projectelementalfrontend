import { createSlice } from "@reduxjs/toolkit"

export const slideshowSlice = createSlice({
    name: "slideshow",
    initialState: {
        slideshow: null,
    },
    reducers: {
        setSlideshow: (state, action) => {
            state.slideshow = action.payload
        },
    },
})

export const { setSlideshow } = slideshowSlice.actions

export default slideshowSlice.reducer
