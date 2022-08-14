// import { configureStore } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import nicknameReducer from "./reducers/nicknameReducer";
import { combineReducers } from "redux";

const reducer = combineReducers({
    nickname: nicknameReducer
})

const store = configureStore ({
    reducer
});

export default store;