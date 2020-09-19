import {createActions, createReducer} from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */
const {Types, Creators} = createActions({
  getFeaturedPhotosRequest: ['userId'],
  getFeaturedPhotosSuccess: ['featuredPhotos'],
  getFeaturedPhotosFailure: ['errorGetFeaturedPhotos'],

  getUserPostRequest: [''],
  getUserPostSuccess: ['userPost'],
  getUserPostFailure: ['errorGetUserPost'],

  getListFriendRequest: [''],
  getListFriendSuccess: ['userFriendList'],
  getListFriendFailure: ['errorGetFriendList'],
});

export const UserTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
  featuredPhotos: null,

  errorGetFeaturedPhotos: null,
  fetchingGetFeaturedPhotos: false,

  userPost: [],

  errorGetUserPost: null,
  fetchingGetUserPost: false,

  userFriendList: [],
  fetchingGetListFriend: false,
  errorGetListFriend: null,
});

/* ------------- Reducers ------------- */
export const getFeaturedPhotosRequest = (state) => {
  return state.merge({
    fetchingGetFeaturedPhotos: true,
    errorGetFeaturedPhotos: null,
  });
};
export const getFeaturedPhotosSuccess = (state, {featuredPhotos}) =>
  state.merge({fetchingGetFeaturedPhotos: false, featuredPhotos});
export const getFeaturedPhotosFailure = (state, {errorGetFeaturedPhotos}) =>
  state.merge({fetchingGetFeaturedPhotos: false, errorGetFeaturedPhotos});

export const getUserPostRequest = (state) => {
  return state.merge({fetchingGetUserPost: true, errorGetUserPost: null});
};
export const getUserPostSuccess = (state, {userPost}) =>
  state.merge({fetchingGetUserPost: false, userPost});
export const getUserPostFailure = (state, {errorGetUserPost}) =>
  state.merge({fetchingGetUserPost: false, errorGetUserPost});

export const getListFriendRequest = (state) => {
  return state.merge({fetchingGetListFriend: true, errorGetListFriend: null});
};
export const getListFriendSuccess = (state, {userFriendList}) => {
  return state.merge({fetchingGetListFriend: false, userFriendList});
}
export const getListFriendFailure = (state, {errorGetListFriend}) =>
  state.merge({fetchingGetListFriend: false, errorGetListFriend});

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_FEATURED_PHOTOS_REQUEST]: getFeaturedPhotosRequest,
  [Types.GET_FEATURED_PHOTOS_SUCCESS]: getFeaturedPhotosSuccess,
  [Types.GET_FEATURED_PHOTOS_FAILURE]: getFeaturedPhotosFailure,

  [Types.GET_USER_POST_REQUEST]: getUserPostRequest,
  [Types.GET_USER_POST_SUCCESS]: getUserPostSuccess,
  [Types.GET_USER_POST_FAILURE]: getUserPostFailure,

  [Types.GET_LIST_FRIEND_REQUEST]: getListFriendRequest,
  [Types.GET_LIST_FRIEND_SUCCESS]: getListFriendSuccess,
  [Types.GET_LIST_FRIEND_FAILURE]: getListFriendFailure,
});
