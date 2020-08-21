import {createActions, createReducer} from 'reduxsauce';
import Immutable from 'seamless-immutable';
import { pathOr } from 'ramda'

/* ------------- Types and Action Creators ------------- */
const {Types, Creators} = createActions({
  loginEmailRequest: ['email', 'password'],
  loginEmailSuccess: ['userData'],
  loginEmailFailure: ['errorLoginEmail'],

  logoutRequest: ['token'],
  logoutSuccess: [],
  logoutFailure: ['errorLogout'],

  checkAuthTokenRequest: [''],
  checkAuthTokenSuccess: ['userData'],
  checkAuthTokenFailure: ['errorCheckAuthToken'],
});

export const AuthTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
  userData: null,

  errorLoginEmail: null,
  fetchingLoginEmail: false,

  errorLogout: null,
  fetchingLogout: false,

  errorCheckAuthToken: null,
  fetchingCheckAuthToken: false,
  isAuthenticated: false
});

/* ------------- Reducers ------------- */
export const loginEmailRequest = (state) => {
  return state.merge({ fetchingLoginEmail: true, errorLoginEmail: null });
};
export const loginEmailSuccess = (state, { userData }) =>
  state.merge({ fetchingLoginEmail: false, userData });
export const loginEmailFailure = (state, { errorLoginEmail }) =>
  state.merge({ fetchingLoginEmail: false, errorLoginEmail });

export const logoutRequest = (state) => {
  return state.merge({ fetchingLogout: true, errorLogout: null });
};
export const logoutSuccess = (state) =>
  state.merge({ fetchingLogout: false });
export const logoutFailure = (state, { errorLogout }) =>
  state.merge({ fetchingLogout: false, errorLogout });

export const checkAuthTokenRequest = (state) => {
  return state.merge({ fetchingCheckAuthToken: true, errorCheckAuthToken: null });
};
export const checkAuthTokenSuccess = (state, { userData }) =>
  state.merge({ fetchingCheckAuthToken: false, isAuthenticated: true, userData });
export const checkAuthTokenFailure = (state, { errorCheckAuthToken }) =>
  state.merge({ fetchingCheckAuthToken: false, errorCheckAuthToken });

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN_EMAIL_REQUEST]: loginEmailRequest,
  [Types.LOGIN_EMAIL_SUCCESS]: loginEmailSuccess,
  [Types.LOGIN_EMAIL_FAILURE]: loginEmailFailure,

  [Types.LOGOUT_REQUEST]: logoutRequest,
  [Types.LOGOUT_SUCCESS]: logoutSuccess,
  [Types.LOGOUT_FAILURE]: logoutFailure,

  [Types.CHECK_AUTH_TOKEN_REQUEST]: checkAuthTokenRequest,
  [Types.CHECK_AUTH_TOKEN_SUCCESS]: checkAuthTokenSuccess,
  [Types.CHECK_AUTH_TOKEN_FAILURE]: checkAuthTokenFailure
});

/* ------------- Selectors ------------- */
export const getUserToken = (state) =>
  pathOr(null, ['userData', 'token'], state)
