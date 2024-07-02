import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isLogin: false,
    user: null,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.isLogin = true;
            state.user = action.payload;
        },
        logout: (state, action) => {
            state.isLogin = false;
            state.user = null;
        },
    },
});

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;


// useDispatch()
// useDispatch() is a React hook that lets you dispatch actions from anywhere in your component tree.
// useSelector()
// useSelector() is a React hook that lets you read the current state of the store.