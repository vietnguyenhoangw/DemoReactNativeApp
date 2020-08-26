import {call, put, select} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage'

// Redux
import AuthActions from '../Redux/AuthRedux'

export function* startup(api, action) {
    /* Check authentication token */
  const userToken = yield AsyncStorage.getItem('accessToken')
    try {
      if (userToken) {
        yield put(AuthActions.checkAuthTokenRequest())
      } else {
        yield put(AuthActions.checkAuthTokenRequest())
      }
    } catch (error) {
      yield put(AuthActions.loginEmailFailure(error.message));
    }
  }