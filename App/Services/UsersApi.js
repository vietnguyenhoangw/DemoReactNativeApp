import apiSauce from 'apisauce';

const create = (baseURL = 'http://00.00.00.00:0000/v0' + '/users') => {
  const api = apiSauce.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
    },
    timeOut: 30000,
  });

  function getMeApi(token) {
    api.setHeaders({ Authorization: `Bearer ${token}` })
    return api.get('/me')
  }

  return {
    getMeApi
  };
};

export default {
  create,
};
