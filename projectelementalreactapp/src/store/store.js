import { configureStore } from '@reduxjs/toolkit';
import newsReducer from './news/newsSlice';
import slideshowReducer from './slideshow/slideshowSlice';
import chaptersReducer from './chapters/chaptersSlice';

export default configureStore({
  reducer: {
    news: newsReducer,
    slideshow: slideshowReducer,
    chapters: chaptersReducer
  }
});
