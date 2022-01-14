import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "./reducer/user-reducer";

const middleware = [...getDefaultMiddleware({ thunk: false })];

const store = configureStore({
  reducer: {
    users: userReducer,
  },
  middleware,
});

export default store;
