import { configureStore } from '@reduxjs/toolkit';

import databaseDataReducer  from './reducers/databaseData.js';

export const store = configureStore({
  reducer: {
    databaseData: databaseDataReducer
  },
});