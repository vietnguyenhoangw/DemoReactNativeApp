import {call, put, select, take} from 'redux-saga/effects';
import { buffers, eventChannel } from 'redux-saga'

// redux
import AuthRedux from '../Redux/AuthRedux'
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
      yield put(UserRedux.getListFriendSuccess(response.data));
    } else {
      yield put(UserRedux.getListFriendFailure(response));
    }
  } catch (error) {
    yield put(UserRedux.getListFriendFailure(error.message));
  }
}

export function* uploadAvatarSaga(api, action) {
  const { avatarInfo } = action
  try {
    const accessToken = yield select(selectUserToken)
    const response = yield call(uploadImageAvatarSaga, accessToken, avatarInfo, api)
    const formattedResponse = JSON.parse(response.responseBody)
    if (response.responseCode === 200) {
      yield put(AuthRedux.changeMyAvatar(formattedResponse.url))
      yield put(UserRedux.setAvatarSuccess())
    } else {
      yield put(UserRedux.setAvatarFailure(formattedResponse.message))
    }
  } catch (error) {
    yield put(UserRedux.setAvatarFailure(error.message))
  }
}

export function * uploadImageAvatarSaga (accessToken, avatarInfo, api) {
  const { path } = avatarInfo
  try {
    if (path) {
      const channel = yield call(uploadImageAvatar, accessToken, path, api)
      while (true) {
        const { progress = 0, error, success } = yield take(channel)
        if (error) {
          yield put(UserRedux.setAvatarFailure(error))
          break
        }
        if (success) {
          const parseSuccess = JSON.parse(success.responseBody)
          yield put(AuthRedux.changeMyAvatar(parseSuccess.url))
          yield put(UserRedux.setAvatarSuccess())
          yield put(UserRedux.uploadProgress(0))
          break
        }
        yield put(UserRedux.uploadProgress(progress))
      }
    }
  } catch (error) {
    console.warn(error)
  }
}

export function * uploadImageAvatar (accessToken, avatarInfo, api) {
  try {
    return eventChannel((emitter) => {
      api.setAvatarApi(accessToken, avatarInfo, (progress) => {
        emitter({ progress })
      }, (success) => {
        emitter({ success })
      }, (error) => {
        emitter({ error })
      })
      return () => {}
    }, buffers.sliding(2))
  } catch (error) {
    console.log(error.message)
  }
}

export function* getUserById(api, userId) {
  /* Check authentication token */
  const accessToken = yield select(selectUserToken);
  const response = yield call(api.getUserById, accessToken, userId.userId);
  try {
    if (response.ok && response.status === 200) {
      yield put(UserRedux.getUserByIdSuccess(response.data));
    } else {
      yield put(UserRedux.getUserByIdFailure(response));
    }
  } catch (error) {
    yield put(UserRedux.getUserByIdFailure(error.message));
  }
}

export function* getPostByUserID(api, userId) {
  /* Check authentication token */
  const accessToken = yield select(selectUserToken);
  const response = yield call(
    api.getPostByUserIdApi,
    accessToken,
    userId.userId
  );
  try {
    if (response.ok && response.status === 200) {
      yield put(UserRedux.getPostByUserIdSuccess(response.data.results));
    } else {
      yield put(UserRedux.getPostByUserIdFailure(response));
    }
  } catch (error) {
    yield put(UserRedux.getPostByUserIdFailure(error.message));
  }
}

export function* uploadCoverSaga(api, action) {
  const { coverInfo } = action
  try {
    const accessToken = yield select(selectUserToken)
    const response = yield call(uploadImageCoverSaga, accessToken, coverInfo, api)
    const formattedResponse = JSON.parse(response.responseBody)
    if (response.responseCode === 200) {
      yield put(AuthRedux.changeMyCover(formattedResponse.url))
      yield put(UserRedux.setCoverSuccess())
    } else {
      yield put(UserRedux.setCoverFailure(formattedResponse.message))
    }
  } catch (error) {
    yield put(UserRedux.setCoverFailure(error.message))
  }
}

export function * uploadImageCoverSaga (accessToken, coverInfo, api) {
  const { path } = coverInfo
  try {
    if (path) {
      const channel = yield call(uploadImageCover, accessToken, path, api)
      while (true) {
        const { progress = 0, error, success } = yield take(channel)
        if (error) {
          yield put(UserRedux.setCoverFailure(error))
          break
        }
        if (success) {
          const parseSuccess = JSON.parse(success.responseBody)
          yield put(AuthRedux.changeMyCover(parseSuccess.url))
          yield put(UserRedux.setCoverSuccess())
          yield put(UserRedux.uploadProgress(0))
          break
        }
        yield put(UserRedux.uploadProgress(progress))
      }
    }
  } catch (error) {
    console.warn(error)
  }
}

export function * uploadImageCover (accessToken, coverInfo, api) {
  try {
    return eventChannel((emitter) => {
      api.setCoverApi(accessToken, coverInfo, (progress) => {
        emitter({ progress })
      }, (success) => {
        emitter({ success })
      }, (error) => {
        emitter({ error })
      })
      return () => {}
    }, buffers.sliding(2))
  } catch (error) {
    console.log(error.message)
  }
}
