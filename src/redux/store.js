// import { configureStore } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import nicknameReducer from "./reducers/nicknameReducer";
import isCorrectReducer from "./reducers/isCorrectReducer";
import { combineReducers } from "redux";

const reducer = combineReducers({
    nickname: nicknameReducer,
    isCorrect: isCorrectReducer
})

const store = configureStore ({
    reducer
});

export default store;