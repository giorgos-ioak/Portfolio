import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null
};

export const databaseDataSlice = createSlice({
  name: 'databaseData',
  initialState,
  reducers: {
    storeData : (state, action) => {
      state.value = action.payload;
    }
  }
});



export const { storeData } = databaseDataSlice.actions;
export default databaseDataSlice.reducer;