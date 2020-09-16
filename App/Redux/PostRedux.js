import {createActions, createReducer} from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */
const {Types, Creators} = createActions({
  getOtherPostRequest: ['location'],
  getOtherPostSuccess: ['otherPost'],
  getOtherPostFailure: ['errorGetOtherPost'],
});

export const UsePosrTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
  otherPost: [],

  errorOtherPost: null,
  fetchingGetOtherPost: false,
});

/* ------------- Reducers ------------- */
export const getOtherPostRequest = (state) => {
  return state.merge({fetchingGetOtherPost: true, errorOtherPost: null});
};
export const getOtherPostSuccess = (state, {otherPost}) =>
  state.merge({fetchingGetOtherPost: false, otherPost});
export const getOtherPostFailure = (state, {errorOtherPost}) =>
  state.merge({fetchingGetOtherPost: false, errorOtherPost});

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_OTHER_POST_REQUEST]: getOtherPostRequest,
  [Types.GET_OTHER_POST_SUCCESS]: getOtherPostSuccess,
  [Types.GET_OTHER_POST_FAILURE]: getOtherPostFailure,
});
