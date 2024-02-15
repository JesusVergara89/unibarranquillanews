import { createSlice } from '@reduxjs/toolkit';


export const articlesSlice = createSlice({
    name: 'articles',
    initialState: '',
    reducers: {
        setArticlesValue: (state, action) => action.payload
    }
})

export const { setArticlesValue } = articlesSlice.actions;

export default articlesSlice.reducer;