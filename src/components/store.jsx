import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  sharedBoolean: true,
};

const sharedSlice = createSlice({
  name: 'shared',
  initialState,
  reducers: {
    toggleBoolean: (state) => {
      state.sharedBoolean = !state.sharedBoolean;
    },
  },
});

export const { toggleBoolean } = sharedSlice.actions;

const store = configureStore({
  reducer: {
    shared: sharedSlice.reducer,
  },
});

export default store;
