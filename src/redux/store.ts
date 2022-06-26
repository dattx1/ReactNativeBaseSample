import { configureStore } from '@reduxjs/toolkit';
import userSlice from './user/slice';
import Thunk from 'redux-thunk';
import middlewareRegistry from './middlewareRegistry';

const createCustomStore = () => {
  const customeStore = configureStore({
    reducer: {
      User: userSlice.reducer,
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(
        Thunk,
        ...middlewareRegistry.getAllMiddleware(),
      ),
  });

  return customeStore;
};

export const store = createCustomStore();

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
