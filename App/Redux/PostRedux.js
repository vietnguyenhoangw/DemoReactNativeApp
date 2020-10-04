import {createActions, createReducer} from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */
const {Types, Creators} = createActions({
  getPostRequest: ['location'],
  getPostSuccess: ['otherPost'],
  getPostFailure: ['errorGetOtherPost'],
});

export const PostTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
  otherPost: [],

  errorOtherPost: null,
  fetchingGetOtherPost: false,
});

/* ------------- Reducers ------------- */
export const getPostRequest = (state) => {
  return state.merge({fetchingGetOtherPost: true, errorOtherPost: null});
};
export const getPostSuccess = (state, {otherPost}) =>
  state.merge({fetchingGetOtherPost: false, otherPost});
export const getPostFailure = (state, {errorOtherPost}) =>
  state.merge({fetchingGetOtherPost: false, errorOtherPost});

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_POST_REQUEST]: getPostRequest,
  [Types.GET_POST_SUCCESS]: getPostSuccess,
  [Types.GET_POST_FAILURE]: getPostFailure,
});
