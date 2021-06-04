import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import loggerMiddleware from 'app/config/logger-middleware'
const middleware = [thunk, loggerMiddleware];

export interface IRootState {
    // readonly authReducer: AuthState;
    // readonly DashBoardReducer: DashBoardState;
}

const reducer = combineReducers<IRootState>({
  // authReducer,
  // DashBoardReducer
});

const store = configureStore({
    reducer,
    middleware,
  });
  
  export default store;
  