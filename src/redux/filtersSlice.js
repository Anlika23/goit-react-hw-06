// import { createSlice } from '@reduxjs/toolkit';

// const filterSlice = createSlice({
//   name: 'filter',
//   initialState: '',
//   reducers: {
//     setFilter: (state, action) => action.payload,
//   },
// });

// export const { setFilter } = filterSlice.actions;
// export const filterReducer = filterSlice.reducer;
// export const selectNameFilter = (state) => state.filter;


import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: { name: '' }, 
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload; 
    },
  },
});

export const { changeFilter } = filterSlice.actions; 
export const filterReducer = filterSlice.reducer;
export const selectNameFilter = (state) => state.filter.name; 
