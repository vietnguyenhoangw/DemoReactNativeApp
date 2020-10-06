import {createActions, createReducer} from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */
const {Types, Creators} = createActions({
  uploadProgress: ['progressUpload'],

  getFeaturedPhotosRequest: ['userId'],
  getFeaturedPhotosSuccess: ['featuredPhotos'],
  getFeaturedPhotosFailure: ['errorGetFeaturedPhotos'],

  getUserPostRequest: [''],
  getUserPostSuccess: ['userPost'],
  getUserPostFailure: ['errorGetUserPost'],

  getListFriendRequest: [''],
  getListFriendSuccess: ['userFriendList'],
  getListFriendFailure: ['errorGetFriendList'],

  setAvatarRequest: ['avatarInfo'],
  setAvatarSuccess: [],
  setAvatarFailure: ['errorSetAvatar'],

  setCoverRequest: ['coverInfo'],
  setCoverSuccess: [],
  setCoverFailure: ['errorSetCover'],

  getUserByIdRequest: ['userId'],
  getUserByIdSuccess: ['userByIdData'],
  getUserByIdFailure: ['errorGetUserById'],

  getPostByUserIdRequest: ['userId'],
  getPostByUserIdSuccess: ['postByUserId'],
  getPostByUserIdFailure: ['errorGetPostByUserId'],

  setCoverRequest: ['coverInfo'],
  setCoverSuccess: [],
  setCoverFailure: ['errorSetCover'],
});

export const UserTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
  progressUpload: 0,

  featuredPhotos: null,

  errorGetFeaturedPhotos: null,
  fetchingGetFeaturedPhotos: false,

  userPost: [],

  errorGetUserPost: null,
  fetchingGetUserPost: false,

  userFriendList: [],
  fetchingGetListFriend: false,
  errorGetListFriend: null,

  fetchingSetAvatar: false,
  errorSetAvatar: null,
  showUploadAvatarProcessBar: false,

  fetchingGetUserById: false,
  userByIdData: null,
  errorGetUserById: null,

  postByUserId: [],

  errorGetPostByUserId: null,
  fetchingGetPostByUserId: false,

  fetchingSetCover: false,
  errorSetCover: null,
  showUploadCoverProcessBar: false,
});

/* ------------- Reducers ------------- */
export const uploadProgress = (state, {progressUpload}) => {
  const newProgressUpload = progressUpload / 100;
  return state.merge({progressUpload: newProgressUpload});
};

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
};
export const getListFriendFailure = (state, {errorGetListFriend}) =>
  state.merge({fetchingGetListFriend: false, errorGetListFriend});

export const setAvatarRequest = (state) =>
  state.merge({fetchingSetAvatar: true, errorSetAvatar: null});
export const setAvatarSuccess = (state) =>
  state.merge({
    fetchingSetAvatar: false,
  });
export const setAvatarFailure = (state, {errorSetAvatar}) =>
  state.merge({fetchingSetAvatar: false, errorSetAvatar});

export const getUserByIdRequest = (state) => {
  return state.merge({
    fetchingGetUserById: true,
    errorGetUserById: null,
  });
};
export const getUserByIdSuccess = (state, {userByIdData}) =>
  state.merge({fetchingGetUserById: false, userByIdData});
export const getUserByIdFailure = (state, {errorGetUserById}) =>
  state.merge({fetchingGetUserById: false, errorGetUserById});

export const getPostByUserIdRequest = (state) => {
  return state.merge({
    fetchingGetPostByUserId: true,
    errorGetPostByUserId: null,
  });
};
export const getPostByUserIdSuccess = (state, {postByUserId}) =>
  state.merge({fetchingGetPostByUserId: false, postByUserId});
export const getPostByUserIdFailure = (state, {errorGetPostByUserId}) =>
  state.merge({fetchingGetPostByUserId: false, errorGetPostByUserId});

export const setCoverRequest = (state) =>
  state.merge({fetchingSetCover: true, errorSetCover: null});
export const setCoverSuccess = (state) =>
  state.merge({
    fetchingSetCover: false,
  });
export const setCoverFailure = (state, {errorSetCover}) =>
  state.merge({fetchingSetCover: false, errorSetCover});
/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.UPLOAD_PROGRESS]: uploadProgress,

  [Types.GET_FEATURED_PHOTOS_REQUEST]: getFeaturedPhotosRequest,
  [Types.GET_FEATURED_PHOTOS_SUCCESS]: getFeaturedPhotosSuccess,
  [Types.GET_FEATURED_PHOTOS_FAILURE]: getFeaturedPhotosFailure,

  [Types.GET_USER_POST_REQUEST]: getUserPostRequest,
  [Types.GET_USER_POST_SUCCESS]: getUserPostSuccess,
  [Types.GET_USER_POST_FAILURE]: getUserPostFailure,

  [Types.GET_LIST_FRIEND_REQUEST]: getListFriendRequest,
  [Types.GET_LIST_FRIEND_SUCCESS]: getListFriendSuccess,
  [Types.GET_LIST_FRIEND_FAILURE]: getListFriendFailure,

  [Types.SET_AVATAR_REQUEST]: setAvatarRequest,
  [Types.SET_AVATAR_SUCCESS]: setAvatarSuccess,
  [Types.SET_AVATAR_FAILURE]: setAvatarFailure,

  [Types.GET_USER_BY_ID_REQUEST]: getUserByIdRequest,
  [Types.GET_USER_BY_ID_SUCCESS]: getUserByIdSuccess,
  [Types.GET_USER_BY_ID_FAILURE]: getUserByIdFailure,

  [Types.GET_POST_BY_USER_ID_REQUEST]: getPostByUserIdRequest,
  [Types.GET_POST_BY_USER_ID_SUCCESS]: getPostByUserIdSuccess,
  [Types.GET_POST_BY_USER_ID_FAILURE]: getPostByUserIdFailure,

  [Types.SET_COVER_REQUEST]: setCoverRequest,
  [Types.SET_COVER_SUCCESS]: setCoverSuccess,
  [Types.SET_COVER_FAILURE]: setCoverFailure,
});
