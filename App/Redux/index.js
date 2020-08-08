import {combineReducers} from 'redux';

const reducers = combineReducers({
  user: require('./AuthRedux').reducer,
});

export default reducers;
