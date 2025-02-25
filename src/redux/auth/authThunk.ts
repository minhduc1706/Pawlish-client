import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginApi, logoutApi, registerApi } from "../../api/authApi";

export const loginThunk = createAsyncThunk(
  "auth/login",
  async (
    credentials: { email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      return await loginApi(credentials);
    } catch (error: unknown) {
      return rejectWithValue(
        error instanceof Error
          ? error.message
          : "Login failed. Please try again."
      );
    }
  }
);

export const registerThunk = createAsyncThunk(
  "auth/register",
  async (
    userData: { email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      return await registerApi(userData);
    } catch (error: unknown) {
      return rejectWithValue(
        error instanceof Error
          ? error.message
          : "Registration failed. Please try again."
      );
    }
  }
);

export const logoutThunk = createAsyncThunk("auth/logout", async () => {
  await logoutApi();
});
