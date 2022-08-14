import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCorrect: '',
};

const isCorrectSlice = createSlice({
  name: "isCorrectReducer",
  initialState,
  reducers: {
    isCorrectRedux(state, action) {
      return {
        ...state,
        isCorrect: action.payload,
      };
    },
  },
});

export const { isCorrectRedux } = isCorrectSlice.actions;
export default isCorrectSlice.reducer;
