import { configureStore, combineReducers } from "@reduxjs/toolkit";
import mainSlice from "./slices/mainSlice";
import signInSlice from "./slices/signInSlice";
import signUpSlice from "./slices/signUpSlice";

const rootReducer = combineReducers({
  main: mainSlice,
  signUp: signUpSlice,
  signIn: signInSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
