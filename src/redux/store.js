// import { configureStore } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import nicknameReducer from "./reducers/nicknameReducer";
import isCorrectReducer from "./reducers/isCorrectReducer";
import quizReducer from "./reducers/quizReducer";
import { combineReducers } from "redux";

const reducer = combineReducers({
    nickname: nicknameReducer,
    isCorrect: isCorrectReducer,
    quiz: quizReducer
})

const store = configureStore ({
    reducer
});

export default store;