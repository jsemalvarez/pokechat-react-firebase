import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking', // 'checking', 'not-authenticated', 'authenticated'
        uid: null,
        email: null,
        displayName: null,
        userName: null,
        photoURL: null,
        team: null,
        friends: [],
        errorMessage: null,
    },
    reducers: {
        login: (state, { payload }) => {
            state.status = 'authenticated';
            state.uid = payload.uid;
            state.email = payload.email;
            state.displayName = payload.displayName;
            state.userName = payload.userName || null;
            state.photoURL = payload.photoURL;
            state.team = payload.team || null;
            state.errorMessage = null;
        },
        logout: ( state, { payload } ) => {
            state.status = 'not-authenticated', // 'checking', 'not-authenticated', 'authenticated'
            state.uid = null;
            state.email = null;
            state.displayName = null;
            state.userName = null;
            state.photoURL = null;
            state.team = null;
            state.errorMessage = payload?.errorMessage;
        },
        checkingCredentials: (state) => {
            state.status = 'checking'
        },
        setFriends: ( state, { payload }) => {
            state.status = 'authenticated';
            state.friends = [...payload]
        }
    }
})

export const { login, logout, checkingCredentials, setFriends } = authSlice.actions;