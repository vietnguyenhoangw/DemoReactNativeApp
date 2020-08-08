import apiSauce from 'apisauce';

const create = (baseURL = 'http://00.00.00.00:0000/v0' + '/auth') => {
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
