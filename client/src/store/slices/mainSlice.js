import { createSlice } from "@reduxjs/toolkit";
import {
  isServerError,
  isServerLoading,
  isServerSuccess,
} from "../../utils/defineServerStatus";
import {
  registerUser,
  getUsers,
  loginUser,
  blockUsers,
  deleteUsers,
  unblockUsers,
} from "../thunks";

const initialState = {
  users: [],
  currentUser: null,
  isShowSignIn: false,
  isLoggedIn: false,
  isSignedUp: false,
  logInMessage: "",
  selectionModel: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  successMessage: null,
  errorMessage: null,
  isShowSnackbar: false,
};

const mainSlice = createSlice({
  name: "mainData",
  initialState,
  reducers: {
    showModal: (state, action) => {
      state.isShowSignIn = action.payload;
    },
    showSnackbar: (state, action) => {
      state.isShowSnackbar = action.payload;
    },
    setLogInStatus: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setSignUpStatus: (state, action) => {
      state.isSignedUp = action.payload;
    },
    setLogInMessage: (state, action) => {
      state.logInMessage = action.payload;
    },
    setselectionModel: (state, action) => {
      state.selectionModel = action.payload;
    },
    clearMainState: () => {
      return initialState;
    },
    setSucceessMessage: (state, action) => {
      state.isSuccess = action.payload;
      state.successMessage = null;
    },
    setErrorMessage: (state, action) => {
      state.isError = action.payload;
      state.errorMessage = null;
    },
    setLogOut: (state) => {
      state.isLoggedIn = false;
      state.currentUser = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getUsers.fulfilled, (state, action) => {
        state.users = action.payload.users;
      })

      .addCase(registerUser.fulfilled, (state, action) => {
        state.successMessage = action.payload.message;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.successMessage = action.payload.message;
        state.currentUser = action.payload.user;
        console.log(action.payload.user);
      })

      .addCase(deleteUsers.fulfilled, (state, action) => {
        state.users = state.users.filter(
          (user) => !action.payload.includes(user._id)
        );
      })
      .addCase(blockUsers.fulfilled, (state, action) => {
        state.users.map((user) => {
          if (action.payload.includes(user._id)) user.userStatus = "blocked";
        });
      })
      .addCase(unblockUsers.fulfilled, (state, action) => {
        state.users.map((user) => {
          if (action.payload.includes(user._id)) user.userStatus = "active";
        });
      });

    builder.addMatcher(isServerLoading, (state) => {
      state.isLoading = true;
    });
    builder.addMatcher(isServerSuccess, (state) => {
      state.isSuccess = true;
      state.isLoading = false;
    });
    builder.addMatcher(isServerError, (state, action) => {
      state.isError = true;
      state.isLoading = false;
      state.isSuccess = false;
      state.errorMessage = action.payload;
    });
  },
});

export default mainSlice.reducer;

export const {
  showModal,
  setLogOut,
  setLogInStatus,
  setSignUpStatus,
  setLogInMessage,
  setselectionModel,
  showSnackbar,
  clearMainState,
  setErrorMessage,
  setSucceessMessage,
  deleteUser,
} = mainSlice.actions;
