import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCampers, fetchCamperById } from '../api/campersAPI';

export const getCampers = createAsyncThunk('campers/getCampers', fetchCampers);

const campersSlice = createSlice({
  name: 'campers',
  initialState: { list: [], status: 'idle', error: null },
  extraReducers: (builder) => {
    builder
      .addCase(getCampers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getCampers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload.data;
      })
      .addCase(getCampers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default campersSlice.reducer;
