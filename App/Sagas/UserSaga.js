import {call, put, select} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';

// redux
import UserRedux from '../Redux/UserRedux';
import {getUserToken} from '../Redux/AuthRedux';

// selectors
const selectUserToken = (state) => getUserToken(state.auth);

export function* getFeaturedPhotos(api, action) {
  /* Check authentication token */
  const {userId} = action;
  const accessToken = yield select(selectUserToken);
  const response = yield call(api.getFeaturedPhotos, accessToken, userId);
  try {
    if (response.ok && response.status === 200) {
      yield put(UserRedux.getFeaturedPhotosSuccess(response.data));
    } else {
      yield put(UserRedux.getFeaturedPhotosFailure(response));
    }
  } catch (error) {
    yield put(UserRedux.getFeaturedPhotosFailure(error.message));
  }
}

export function* getUserPost(api) {
  /* Check authentication token */
  const accessToken = yield select(selectUserToken);
  const response = yield call(api.getUserPost, accessToken);
  try {
    if (response.ok && response.status === 200) {
      yield put(UserRedux.getUserPostSuccess(response.data));
    } else {
      yield put(UserRedux.getUserPostFailure(response));
    }
  } catch (error) {
    yield put(UserRedux.getUserPostFailure(error.message));
  }
}

export function* getListFriendSaga(api) {
  /* Check authentication token */
  const accessToken = yield select(selectUserToken);
  const response = yield call(api.getListFriend, accessToken);
  try {
    if (response.ok && response.status === 200) {
      yield put(UserRedux.getListFriendSucess(response.data));
    } else {
      yield put(UserRedux.getListFriendFailure(response));
    }
  } catch (error) {
    yield put(UserRedux.getListFriendFailure(error.message));
  }
}
