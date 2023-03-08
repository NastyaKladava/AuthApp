import { createAsyncThunk } from "@reduxjs/toolkit";
import { useAppDispatch } from "../hooks/common";
import Service from "../services/services";
import { deleteUser } from "./slices/mainSlice";

export const registerUser = createAsyncThunk(
  "/api/auth/register",
  async (data, { rejectWithValue }) => {
    try {
      const res = await Service.register(data);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "/api/auth/login",
  async (data, { rejectWithValue }) => {
    try {
      const res = await Service.logInUser(data);
      console.log(res.data);
      return res.data;
    } catch (err) {
      console.log(err.response.data.message);
      return rejectWithValue(err.response.data.message);
    }
  }
);

export const getUsers = createAsyncThunk(
  "/api/users",
  async (_, { rejectWithValue }) => {
    try {
      const res = await Service.getAllUsers();
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

export const deleteUsers = createAsyncThunk(
  "/api/users/delete",
  async (data, { rejectWithValue }) => {
    try {
      const res = await Promise.all(data.map((id) => Service.deleteUsers(id)));
      console.log(res);
      return res;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

export const blockUsers = createAsyncThunk(
  "/api/users/block",
  async (data, { rejectWithValue }) => {
    try {
      const res = await Promise.all(data.map((id) => Service.blockUsers(id)));
      return res;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

export const unblockUsers = createAsyncThunk(
  "/api/users/deleteAll",
  async (data, { rejectWithValue }) => {
    try {
      const res = await Promise.all(data.map((id) => Service.unblockUsers(id)));
      return res;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);
