import React, { useEffect } from "react";
import { selectionModelSelector, usersSelector } from "../store/selectors";
import { getUsers } from "../store/thunks";
import { useAppDispatch, useAppSelector } from "./common";

export const useUsers = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(usersSelector);
  const selectionModel = useAppSelector(selectionModelSelector);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return { dispatch, users, selectionModel };
};
