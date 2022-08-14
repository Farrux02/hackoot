import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [
    {
        user_id: null,
        points: null,
        user_name: null
    }
  ],
};

const userSlice = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    user(state, action) {
      return {
        ...state,
        user: action.payload,
      };
    },
  },
});

export const { user } = userSlice.actions;
export default userSlice.reducer;
