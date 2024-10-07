import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { chatSlice } from "./chat/chatSlice";


export default configureStore({
    reducer:{
        auth: authSlice.reducer,
        chat: chatSlice.reducer
    }
})