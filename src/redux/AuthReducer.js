import { createSlice } from '@reduxjs/toolkit'

let initialState = {
    user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
    isLoading: false,
    isError: false
}

export const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signInUser: (state, action) => {
            state.user = action.payload
            localStorage.setItem("user", JSON.stringify(action.payload))
        },

        signOutUser: (state) => {
            state.user = null
            localStorage.removeItem("user")
        }
    },
})

// Action creators are generated for each case reducer function
export const { signInUser, signOutUser } = authSlice.actions
export default authSlice.reducer
