import {call, put, select} from 'redux-saga/effects';
import AuthRedux from '../Redux/AuthRedux';
import {getErrorAPI} from '../Functions/errorFuntions';

// Redux
import { getUserToken } from '../Redux/AuthRedux'

// Selectors
const selectUserToken = (state) => getUserToken(state.auth)

export function* Login(api, action) {
  const {email, password} = action;
  try {
    const response = yield call(api.loginEmail, email, password);
    if (response.ok && response.status === 201) {
      yield put(AuthRedux.loginEmailSuccess(response.data));
    } else {
      if (response.status === 400) {
        yield put(AuthRedux.loginEmailFailure(getErrorAPI(response)));
      } else {
        yield put(AuthRedux.loginEmailFailure(response));
      }
    }
  } catch (error) {
    yield put(AuthRedux.loginEmailFailure(error.message));
  }
}

export function* Logout(api, action) {
  try {
    const { token } = action;
    console.log('token >>', token)
    const response = yield call(api.logout, token);
    console.log('response >>', response)
    if (response.ok && response.status === 201) {
      yield put(AuthRedux.logoutSuccess(response.data));
    } else {
      if (response.status === 400) {
        yield put(AuthRedux.logoutFailure(getErrorAPI(response)));
      } else {
        yield put(AuthRedux.logoutFailure(response));
      }
    }
  } catch (error) {
    yield put(AuthRedux.logoutFailure(error.message));
  }
}
