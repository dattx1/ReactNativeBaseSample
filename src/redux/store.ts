import createSagaMiddleware from 'redux-saga';
import Thunk from 'redux-thunk';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';

import userSlice from './user/slice';
import middlewareRegistry from './middlewareRegistry';
import rootSaga from './rootSaga';
import StateListenerRegistry from './StateListenerRegistry';

const createCustomStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const reducers = combineReducers({
    User: userSlice.reducer,
  });

  const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['User'],
  };

  const persistedReducer = persistReducer(persistConfig, reducers);

  const customeStore = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(
        Thunk,
        ...middlewareRegistry.getAllMiddleware(),
        sagaMiddleware,
      ),
  });
  sagaMiddleware.run(rootSaga);
  StateListenerRegistry.subscribe(customeStore);
  return customeStore;
};

export const store = createCustomStore();
export const persistor = persistStore(store);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;