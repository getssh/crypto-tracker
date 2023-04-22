import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const getCoin = createAsyncThunk(
  'crypto/coins',
  async (coinId, {rejectWithValue}) => {
    try {
      const res = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&market_data=true`)
      const data = await res.json()
  
      return data;
    } catch (error) {
      return rejectWithValue({ message: error.message });
    }
  }
)