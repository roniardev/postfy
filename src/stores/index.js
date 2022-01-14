import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "./reducer/user-reducer";
import albumReducer from "./reducer/album-reducer";

const middleware = [...getDefaultMiddleware({ thunk: false })];

const store = configureStore({
  reducer: {
    users: userReducer,
    albums: albumReducer,
  },
  middleware,
});

export default store;
