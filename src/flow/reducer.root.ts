import { combineReducers } from '@reduxjs/toolkit';

import app from './app/reducer';

const createRootReducer = (history: any) => {
  const appReducer: any = combineReducers({
    app,
  } as any);

  const rootReducer = (state: any, action: any) => appReducer(state, action);
  return rootReducer;
};

export default createRootReducer;
