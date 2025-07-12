// store.js
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // default: localStorage for web

// Persist configuration
const persistConfig = {
  key: 'root',
  storage,
  version: 1,
};
// Combine reducers
const rootReducer = combineReducers({
  user: userReducer,
});


// Create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Create persistor
export const persistor = persistStore(store);

// Optional typings
// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch
