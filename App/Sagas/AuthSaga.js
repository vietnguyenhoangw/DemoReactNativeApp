import { call, put, select } from 'redux-saga/effects';
import AuthRedux from '../Redux/AuthRedux';
import { getErrorAPI } from '../Functions/ErrorFuntions';
import AsyncStorage from '@react-native-community/async-storage'

// Redux
import AuthActions, { getUserToken } from '../Redux/AuthRedux'

// Selectors
const selectUserToken = (state) => getUserToken(state.auth)

// Save token into storage (offline)
export function* saveTokenToStoreSaga(response) {
  yield AsyncStorage.multiSet(
    [
      ['accessToken', response.data.token],
      ['refreshToken', response.data.refreshToken]
    ],
    (err) => {
      if (err !== null) {
        console.log('ERROR saveTokenToStore: ', err)
      }
    }
  )
}

// Remove token from storage
export function* removeTokenFromStoreSaga() {
  yield AsyncStorage.multiRemove(['accessToken', 'refreshToken'], (err) => {
    if (err !== null) {
      console.log('ERROR removeTokenFromStore: ', err)
    }
  })
}

export function* Login(api, action) {
  const {email, password} = action;
  try {
    const response = yield call(api.loginEmail, email, password);
    if (response.ok && response.status === 201) {
      yield put(AuthRedux.loginEmailSuccess(response.data));
      yield call(saveTokenToStoreSaga, response)
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
    const response = yield call(api.logout, token);
    if (response.ok && response.status === 201) {
      yield put(AuthRedux.logoutSuccess(response.data));
      yield call(removeTokenFromStoreSaga)
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

export function* checkAuthTokenSaga(usersApi, authApi) {
  const accessToken = yield AsyncStorage.getItem('accessToken')
  try {
    const response = yield call(usersApi.getMeApi, accessToken)
    if (response.ok && response.status === 200) {
      yield put(AuthActions.checkAuthTokenSuccess(response.data))
    } else if (response.ok && response.status === 22) {
      const refreshTokenResult = yield call(refreshTokenSaga, authApi)
      if (refreshTokenResult) {
        yield put(AuthActions.checkAuthTokenSuccess(response.data))
      }
      return
    } else {
      yield put(AuthActions.checkAuthTokenFailure(getErrorAPI(response)))
    }
  } catch (error) {
    yield put(AuthActions.checkAuthTokenFailure(error.message))
  }
}
