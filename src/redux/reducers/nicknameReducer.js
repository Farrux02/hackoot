import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nickname: null,
};

const nicknameSlice = createSlice({
  name: "nicknameReducer",
  initialState,
  reducers: {
    isNickname(state, action) {
      return {
        ...state,
        nickname: action.payload,
      };
    },
  },
});

export const { isNickname } = nicknameSlice.actions;
export default nicknameSlice.reducer;
