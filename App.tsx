/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import "react-native-gesture-handler";

import React from 'react';
import MainRoutes from './App/Routes/index.routes';
import { Provider } from "react-redux";

import { createStore, applyMiddleware } from 'redux';
import rootReducer from './App/State/reducers/index';
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <MainRoutes />
    </Provider>
  );
}

export default App;
