import apiSauce from 'apisauce';
import ApiConfig from '../Configs/ApiConfig';

const create = (baseURL = ApiConfig.baseURL + '/polytag') => {
  const api = apiSauce.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
    },
    timeOut: 30000,
  });

  function getPostApi(token, longitude, latitude) {
    api.setHeaders({Authorization: `Bearer ${token}`});
    return api.get('', {
      longitude: 106.709145,
      latitude: 10.810583,
      limit: 100,
    });
  }

  return {
    getPostApi,
  };
};

export default {
  create,
};
