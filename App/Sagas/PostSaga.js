import {call, put, select, take} from 'redux-saga/effects';

// redux
import PostRedux from '../Redux/PostRedux';
import {getUserToken} from '../Redux/AuthRedux';

// selectors
const selectUserToken = (state) => getUserToken(state.auth);

export function* getPost(api, location) {
  const {latitude, longitude} = location.location
  /* Check authentication token */
  const accessToken = yield select(selectUserToken);
  const response = yield call(
    api.getPostApi,
    accessToken,
    longitude,
    latitude,
  );
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
