import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance, token } from './api';

export const logIn = createAsyncThunk(
  'auth/login',
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await instance.post('/users/login', body);
      token.set(data.token);
      return data;
    } catch (error) {
      alert('Invalid password or email');
      return rejectWithValue(error.message);
    }
  }
);

export const register = createAsyncThunk(
  'auth/register',
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await instance.post('/users/signup', body);
      token.set(data.token);
      return data;
    } catch (error) {
      alert('Error');
      return rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/getUser',
  async (_, { rejectWithValue, getState }) => {
    try {
      const state = getState();
      const value = state.auth.token;
      if (!value) {
        return rejectWithValue();
      }
      token.set(value);
      const response = await instance.get('/users/current');
      return response.data;
    } catch (error) {
      token.unSet();
      return rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const response = await instance.post('/users/logout');
      token.unSet();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
