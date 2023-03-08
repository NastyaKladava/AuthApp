import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mailLog: "",
  passwordLog: "",
};

const signInSlice = createSlice({
  name: "signUpData",
  initialState,
  reducers: {
    addPasswordLog: (state, action) => {
      state.passwordLog = action.payload;
    },
    addMailLog: (state, action) => {
      state.mailLog = action.payload;
    },
    clearSignInState: () => {
      return initialState;
    },
  },
});

export default signInSlice.reducer;

export const { addPasswordLog, addMailLog, clearSignInState } =
  signInSlice.actions;
