import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LOCALSTORAGEKEYS, TIMERDELAY } from "../constants/constants";
import {
  currentUserSelector,
  errorMessageSelector,
  isErrorSelector,
  isLoggedInSelector,
  isShowSnackbarSelector,
  isSucceessSelector,
  mailLogInSelector,
  mailRegSelector,
  passwordLogInSelector,
  passwordRegSelector,
  succeessMessageSelector,
  usernameRegSelector,
} from "../store/selectors";
import {
  clearMainState,
  setErrorMessage,
  setLogInStatus,
  setSucceessMessage,
  showSnackbar,
} from "../store/slices/mainSlice";
import { clearSignInState } from "../store/slices/signInSlice";
import { clearSignUpState } from "../store/slices/signUpSlice";
import { useAppDispatch, useAppSelector } from "./common";

export const useRegister = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const successMessage = useAppSelector(succeessMessageSelector);
  const isSuccess = useAppSelector(isSucceessSelector);
  const isShowSnackbar = useAppSelector(isShowSnackbarSelector);
  const isError = useAppSelector(isErrorSelector);
  const errorMessage = useAppSelector(errorMessageSelector);
  const isLoggedIn = useAppSelector(isLoggedInSelector);

  const currentUser = useAppSelector(currentUserSelector);

  const usernameReg = useAppSelector(usernameRegSelector);
  const passwordReg = useAppSelector(passwordRegSelector);
  const mailReg = useAppSelector(mailRegSelector);

  const passwordLog = useAppSelector(passwordLogInSelector);
  const mailLog = useAppSelector(mailLogInSelector);

  useEffect(() => {
    let timerId;

    if (isSuccess && successMessage) {
      dispatch(showSnackbar(true));
      timerId = setTimeout(() => {
        if (isLoggedIn) {
          localStorage.setItem(LOCALSTORAGEKEYS.TOKEN, currentUser.token);
          navigate("/users");
        }
        dispatch(clearSignUpState());
        dispatch(clearSignInState());
        dispatch(setSucceessMessage(false));
        //dispatch(clearMainState());
        dispatch(setLogInStatus(true));
      }, TIMERDELAY);
    }

    if (isError && errorMessage) {
      dispatch(showSnackbar(true));
      timerId = setTimeout(() => {
        dispatch(clearSignUpState());
        dispatch(clearSignInState());
        dispatch(setErrorMessage(false));
      }, TIMERDELAY);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [isSuccess, successMessage, isError, errorMessage]);

  return {
    dispatch,
    successMessage,
    isSuccess,
    isShowSnackbar,
    isError,
    errorMessage,
    usernameReg,
    mailReg,
    passwordReg,
    passwordLog,
    mailLog,
  };
};
