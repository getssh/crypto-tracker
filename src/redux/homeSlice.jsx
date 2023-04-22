import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const getHome = createAsyncThunk(
  'crypto/trending',
  async (_, {rejectWithValue}) => {
    try {
      const res = await fetch('https://api.coingecko.com/api/v3/search/trending')
      const data = await res.json()
  
      return data.coins;
    } catch (error) {
      return rejectWithValue({ message: error.message });
    }
  }
)