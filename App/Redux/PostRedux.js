import {createActions, createReducer} from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */
const {Types, Creators} = createActions({
    getPostRequest: [''],
    getPostSuccess: ['postList'],
    getPostFailure: ['errorGetPost'],
});

export const PostTypes = Types
export default Creators

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
    postList: null,
  
    errorGetPost: null,
    fetchingGetPost: false,
  });

/* ------------- Reducers ------------- */
export const getPostRequest = (state) => {
    return state.merge({ fetchingGetPost: true, errorGetPost: null });
  };
  export const getPostSuccess = (state, { postList }) =>
    state.merge({ fetchingGetPost: false, postList });
  export const getPostFailure = (state, { errorGetPost }) =>
    state.merge({ fetchingGetPost: false, errorGetPost });

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
    [Types.GET_POST_REQUEST]: getPostRequest,
    [Types.GET_POST_SUCCESS]: getPostSuccess,
    [Types.GET_POST_FAILURE]: getPostFailure,
  });