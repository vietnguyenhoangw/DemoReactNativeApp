import {all, takeLatest} from 'redux-saga/effects';

// api
import AuthApi from '../Services/AuthService';
import UsersApi from '../Services/UsersApi'

// type
import { AuthTypes } from '../Redux/AuthRedux';
import { StartupTypes } from '../Redux/StartupRedux'
import { UserTypes } from '../Redux/UserRedux'

// saga
import { Login, Logout, checkAuthTokenSaga } from './AuthSaga';
import { startup } from './StartupSaga';
import { getFeaturedPhotos } from './UserSaga'

// api
const authApi = AuthApi.create();
const usersApi = UsersApi.create();

export default function* rootSaga() {
  // some sagas only receive an action
  yield all([takeLatest(StartupTypes.STARTUP, startup)]),

  // auth
  yield all([takeLatest(AuthTypes.LOGIN_EMAIL_REQUEST, Login, authApi)]);
  yield all([takeLatest(AuthTypes.LOGOUT_REQUEST, Logout, authApi)]);
  yield all([takeLatest(AuthTypes.CHECK_AUTH_TOKEN_REQUEST,checkAuthTokenSaga,usersApi)]);

  // user
  yield all([takeLatest(UserTypes.GET_FEATURED_PHOTOS_REQUEST, getFeaturedPhotos, usersApi)]);
}
