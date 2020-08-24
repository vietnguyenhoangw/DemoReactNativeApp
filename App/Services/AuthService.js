import apiSauce from 'apisauce';
import ApiConfig from '../Configs/ApiConfig'

const create = (baseURL = ApiConfig.baseURL + '/auth') => {
  const api = apiSauce.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
    },
    timeOut: 30000,
  });

  function loginEmail(email, password) {
    return api.post('/login', {
      email,
      password
    });
  }

  function logout(token) {
    api.setHeaders({ Authorization: `Bearer ${token}` })
    return api.post('/logout');
  }

  return {
    loginEmail,
    logout
  };
};

export default {
  create,
};
