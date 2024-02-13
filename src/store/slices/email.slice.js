import { createSlice } from '@reduxjs/toolkit';


export const emailSlice = createSlice({
    name: 'email',
    initialState: '',
    reducers: {
        setEmailValue: (state, action) => action.payload
    }
})

export const { setEmailValue } = emailSlice.actions;

export default emailSlice.reducer;