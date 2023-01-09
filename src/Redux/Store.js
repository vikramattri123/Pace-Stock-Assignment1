import { configureStore } from "@reduxjs/toolkit";
import Storage from "./DataStorage";

import AuthReducer from "./Authentication";

export const store = configureStore({
    reducer :{
        DataStore:Storage.reducer,
        AuthStore:AuthReducer.reducer
    }
})

