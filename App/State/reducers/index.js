import { combineReducers } from 'redux';

const appReducers = combineReducers({
});

const rootReducer = (state, action) => {
  return appReducers(state, action);
};

export default rootReducer;
