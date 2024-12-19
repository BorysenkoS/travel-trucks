import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers';

export const fetchCampers = createAsyncThunk(
  'campers/fetchCampers',
  async (_, { getState }) => {
    const { location, form, features, transmission } =
      getState().campers.filters;

    const params = {};
    if (location) params.location = location;
    if (form) params.form = form;
    if (transmission) params.transmission = transmission;

    features.forEach((feature) => {
      params[feature] = true;
    });

    const response = await axios.get(BASE_URL, { params });
    return response.data.items;
  }
);

const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    items: [],
    favorites: JSON.parse(localStorage.getItem('favorites')) || [],
    filters: {
      location: '',
      form: '',
      features: [],
      transmission: '',
    },
    status: 'idle',
    error: null,
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const camperId = action.payload;
      if (state.favorites.includes(camperId)) {
        state.favorites = state.favorites.filter((id) => id !== camperId);
      } else {
        state.favorites.push(camperId);
      }
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },

    setFilter: (state, action) => {
      const { key, value } = action.payload;
      if (key === 'features') {
        if (state.filters.features.includes(value)) {
          state.filters.features = state.filters.features.filter(
            (feature) => feature !== value
          );
        } else {
          state.filters.features.push(value);
        }
      } else {
        state.filters[key] = value;
      }
    },

    clearFilters: (state) => {
      state.filters = {
        location: '',
        form: '',
        features: [],
        transmission: '',
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.status = 'loading';
        state.items = [];
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { toggleFavorite, setFilter, clearFilters } = campersSlice.actions;
export default campersSlice.reducer;
