import { configureStore, combineReducers } from "@reduxjs/toolkit";
import DashboardReducer from "reducer/DashboardReducer";

const rootReducer = combineReducers({
  DashboardReducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
