import { configureStore } from '@reduxjs/toolkit';

import databaseDataReducer  from './reducers/databaseData.js';
import authReducer from './reducers/auth.js';

export const store = configureStore({
  reducer: {
    databaseData: databaseDataReducer,
    auth: authReducer
  },
});