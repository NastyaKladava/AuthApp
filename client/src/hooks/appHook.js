import React, { useEffect } from "react";
import { LOCALSTORAGEKEYS } from "../constants/constants";
import { setLogInStatus } from "../store/slices/mainSlice";
import { useAppDispatch } from "./common";

export const useApp = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (localStorage.getItem(LOCALSTORAGEKEYS.TOKEN)) {
      dispatch(setLogInStatus(true));
    }
  }, [dispatch]);

  return {};
};
