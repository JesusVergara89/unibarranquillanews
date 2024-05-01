import { createSlice } from '@reduxjs/toolkit';


export const changeSlice = createSlice({
    name: 'change',
    initialState: false,
    reducers: {
        changed: state => {
            return !state;
        }
    }
})

export const { changed } = changeSlice.actions;

export default changeSlice.reducer;