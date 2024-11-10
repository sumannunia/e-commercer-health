import { configureStore } from "@reduxjs/toolkit";

import { useDispatch } from "react-redux";
import authReducer from "./slices/authSlice";
import cartReducer from "./slices/cartSlice";

// Configure store
const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

// Typed dispatch hook for async actions
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
