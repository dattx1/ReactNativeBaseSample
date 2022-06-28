import createSagaMiddleware from 'redux-saga';
import Thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';

import userSlice from './user/slice';
import middlewareRegistry from './middlewareRegistry';
import rootSaga from './rootSaga';
import StateListenerRegistry from './StateListenerRegistry';

const createCustomStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const customeStore = configureStore({
    reducer: {
      User: userSlice.reducer,
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(
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

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
