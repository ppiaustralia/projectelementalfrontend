import {
    createSlice,
    createAsyncThunk,
    PayloadAction,
    createSelector,
} from "@reduxjs/toolkit"
import axios from "axios"

// export const fetchNews = createAsyncThunk("setNews", async (_, thunkAPI) => {
//     try {
//         const response = await axios.get(
//             `https://ppia-backend.herokuapp.com/feed/articles/`
//         )
//         return await response.json()
//     } catch (error) {
//         return thunkAPI.rejectWithValue({ error: error.message })
//     }
// })

export const newsSlice = createSlice({
    name: "news",
    initialState: {
        news: [],
        loading: false,
        error: "",
    },
    reducers: {
        setNews: (state, action) => {
            state.news = action.payload
        },
        setLoadingTrue: (state) => {
            state.loading = true
        },
        setLoadingFalse: (state) => {
            state.loading = false
        },
        // extraReducers: (builder) => {
        //     builder.addCase(fetchNews.pending, (state) => {
        //         state.news = {}
        //         state.loading = "loading"
        //     })
        //     builder.addCase(fetchNews.fulfilled, (state, { payload }) => {
        //         state.news = payload
        //         state.loading = "loaded"
        //     })
        //     builder.addCase(fetchNews.rejected, (state, action) => {
        //         state.loading = "error"
        //         state.error = action.error.message
        //     })
    },
})

export const selectNews = createSelector(
    (state) => ({
        news: state.news,
        loading: state.loading,
    }),
    (state) => state
)

export const { setNews, setLoadingFalse, setLoadingTrue } = newsSlice.actions

export default newsSlice.reducer
