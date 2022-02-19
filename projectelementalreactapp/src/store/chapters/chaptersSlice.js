import { createSlice, createSelector } from "@reduxjs/toolkit"

export const chaptersSlice = createSlice({
    name: "chapters",
    initialState: {
        chapters: [],
        loading: false,
        error: "",
    },
    reducers: {
        setChapters: (state, action) => {
            state.chapters = action.payload
        },
        setLoadingTrue: (state) => {
            state.loading = true
        },
        setLoadingFalse: (state) => {
            state.loading = false
        },
    },
})

export const { setChapters, setLoadingFalse, setLoadingTrue } =
    chaptersSlice.actions

export default chaptersSlice.reducer
