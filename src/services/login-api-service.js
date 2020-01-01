import config from '../config';

const LoginApiService = {
  postLogin(credentials){
    return fetch(`${config.API_ADDRESS}/login`, 
    {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(credentials)
    })
    .then(res => 
      (!res.ok)
      ? res.json().then(e => Promise.reject(e))
      : res.json()
      )
  }
}

export default LoginApiService;