import {call, put, select} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage'

// redux
import PostRedux from '../Redux/PostRedux';
import { getUserToken } from '../Redux/AuthRedux'

// selectors
const selectUserToken = (state) => getUserToken(state.auth)

export function* getPost(api) {
    /* Check authentication token */
    const accessToken = yield select(selectUserToken)
    const response = yield call(api.getPost, accessToken);
    try {
      if (response.ok && response.status === 200) {
        yield put(PostRedux.getPostSuccess(response.data));
      } else {
        yield put(PostRedux.getPostFailure(response));
      }
    } catch (error) {
      yield put(PostRedux.getPostFailure(error.message));
    }
  }