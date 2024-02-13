import { createSlice } from '@reduxjs/toolkit';

export const passwordSlice = createSlice({
    name: 'password',
    initialState: '',
    reducers: {
       setPassWordValue: (state, action) => action.payload
    }
})

export const { setPassWordValue } = passwordSlice.actions;

export default passwordSlice.reducer;