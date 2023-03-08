import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  usernameReg: "",
  mailReg: "",
  passwordReg: "",
};

const signUpSlice = createSlice({
  name: "signUpData",
  initialState,
  reducers: {
    addUsernameReg: (state, action) => {
      state.usernameReg = action.payload;
    },
    addPasswordReg: (state, action) => {
      state.passwordReg = action.payload;
    },
    addMailReg: (state, action) => {
      state.mailReg = action.payload;
    },
    clearSignUpState: () => {
      return initialState;
    },
  },
});

export default signUpSlice.reducer;

export const { addMailReg, addPasswordReg, addUsernameReg, clearSignUpState } =
  signUpSlice.actions;
