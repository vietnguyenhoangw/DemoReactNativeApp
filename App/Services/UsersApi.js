import apiSauce from 'apisauce';
import ApiConfig from '../Configs/ApiConfig';
import { newUploadFile } from '../Functions/UploadFunction'

const create = (baseURL = ApiConfig.baseURL + '/users') => {
  const api = apiSauce.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
    },
    timeOut: 30000,
  });

  function getMeApi(token) {
    api.setHeaders({Authorization: `Bearer ${token}`});
    return api.get('/me');
  }

  function getFeaturedPhotos(token, userId) {
    api.setHeaders({Authorization: `Bearer ${token}`});
    return api.get(`${userId}/featured-photos`);
  }

  function getUserPost(token) {
    api.setHeaders({Authorization: `Bearer ${token}`});
    return api.get('me/polytags');
  }

  function getListFriend(token) {
    api.setHeaders({Authorization: `Bearer ${token}`});
    return api.get('me/friends');
  }

  function setAvatarApi(token, data, process, response, error) {
    const path = data.replace('file://', '')
    return newUploadFile('/users/avatar', path, token, process, response, error)
  }

  return {
    getMeApi,
    getFeaturedPhotos,
    getUserPost,
    getListFriend,
    setAvatarApi
  };
};

export default {
  create,
};
