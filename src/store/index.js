import { configureStore } from "@reduxjs/toolkit"
import passwordSlice from './slices/password.slice'
import emailSlice from './slices/email.slice'
import articlesSlice from "./slices/articles.slice"
import changeSlice from './slices/change.slice'

export default configureStore({
    reducer: {
        passwordSlice,
        emailSlice,
        articlesSlice,
        changeSlice
    }
})