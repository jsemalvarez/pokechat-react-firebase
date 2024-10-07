import { createSlice } from "@reduxjs/toolkit";


export const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        friend: null
    },
    reducers: {
        setFriend: (  state, { payload })=> {
            state.friend = payload
        }
    }
})

export const { setFriend } = chatSlice.actions