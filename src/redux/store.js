// import { configureStore } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import nicknameReducer from "./reducers/nicknameReducer";
import isCorrectReducer from "./reducers/isCorrectReducer";
import quizReducer from "./reducers/quizReducer";
import { combineReducers } from "redux";
import userReducer from "./reducers/userReducer";

const reducer = combineReducers({
    nickname: nicknameReducer,
    isCorrect: isCorrectReducer,
    quiz: quizReducer,
    user: userReducer
})

const store = configureStore ({
    reducer
});

export default store;