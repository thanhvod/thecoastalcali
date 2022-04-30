import { createStore, applyMiddleware, compose } from '@reduxjs/toolkit';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createMigrate, persistStore, persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';

import migrations from './migrations';
import createRootReducer from './reducer.root';

const persistConfig = {
  key: 'root',
  storage,
  version: 21050501,
  migrate: createMigrate(migrations, {
    debug: 'development' === process.env.REACT_APP_ENV,
  }),
  stateReconciler: autoMergeLevel2,
  whitelist: ['app', 'auth'],
};

function configureStore(history: any, initialState: any) {
  const rootReducer: any = createRootReducer(history);
  const persistedRootReducer: any = persistReducer(persistConfig, rootReducer);

  const store = createStore(
    persistedRootReducer,
    initialState,
    compose(
      applyMiddleware(..._getMiddleware()),
      'development' === process.env.REACT_APP_ENV &&
        environment.devToolsExtension
        ? environment.devToolsExtension()
        : (f: any) => f
    )
  );

  const persistor = persistStore(store);

  return { store, persistor };
}

function _getMiddleware() {
  let middleware = [routerMiddleware(window.history as any), thunk];

  if ('development' === process.env.REACT_APP_ENV) {
    middleware = [...middleware, logger];
  }

  return middleware;
}

const environment: any = window || this;

export default configureStore;
