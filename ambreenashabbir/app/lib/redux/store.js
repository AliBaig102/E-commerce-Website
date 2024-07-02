import {configureStore} from "@reduxjs/toolkit";
import authSlice from "@/app/lib/redux/features/auth/authSlice";

export default configureStore({
    reducer: {
        // Add reducers here
        auth:  authSlice,
    },
});