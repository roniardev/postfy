import { createSlice } from "@reduxjs/toolkit";

const usersInitialState = {
  data: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState: usersInitialState,
  reducers: {
    getUserById: (state, { payload }) => {
      state.data;
    },
    addUsers: (state, { payload }) => {
      state.data = payload;
    },
  },
});

export default usersSlice.reducer;
export const { getUserById } = usersSlice.actions;
export const { addUsers } = usersSlice.actions;

export const selectUsers = (state) => state.users.data;
