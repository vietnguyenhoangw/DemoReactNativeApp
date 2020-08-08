import {all, takeLatest} from 'redux-saga/effects';
import {AuthTypes} from '../Redux/AuthRedux';
import {Login, Logout} from './AuthSaga';
import AuthApi from '../Services/AuthService';

const authApi = AuthApi.create();

export default function* rootSaga() {
  yield all([takeLatest(AuthTypes.LOGIN_EMAIL_REQUEST, Login, authApi)]);
  yield all([takeLatest(AuthTypes.LOGOUT_REQUEST, Logout, authApi)]);
}
