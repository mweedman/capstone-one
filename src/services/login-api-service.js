import config from '../config';

const LoginApiService = {
  postLogin({ user_name, password }){
    return fetch(`${config.API_ADDRESS}/login`, {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({user_name, password})
    })
    .then(res => 
      (!res.ok)
      ? res.json().then(e => Promise.reject(e))
      : res.json()
      )
  },
  postUser(user) {
    return fetch(`${config.API_ADDRESS}/create`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => {
      (!res.ok)
      ? res.json().then(e => Promise.reject(e))
      :res.json();
    })
  }
}

export default LoginApiService;