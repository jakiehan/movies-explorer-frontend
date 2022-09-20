import { MAIN_API_URL } from './constants.js';

class MainApi {
  constructor() {
    this._url = MAIN_API_URL;
  }

  _processRequest(promise) {
    return promise.then(res => {
      if (res.ok) {
        return res.json();
      }
      return res.json()
        .then((err) => {
          if (err) {
            throw err;
          }
        })
    }).then((obj) => obj);
  }

  register(name, email, password) {
    const promise = fetch(`${this._url}/signup`,{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name, email, password})
    })
    return this._processRequest(promise);
  }

  login(email, password) {
    const promise = fetch(`${this._url}/signin`,{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email, password})
    })
    return this._processRequest(promise);
  }

  checkJwt(jwt) {
    const promise = fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwt}`,
      },
    })
    return this._processRequest(promise);
  }

  updateUserData(name, email, jwt) {
    const promise = fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwt}`,
      },
      body: JSON.stringify({name, email})
    })
    return this._processRequest(promise);
  }

  setMovies(cardMovie, jwt) {
    const promise = fetch(`${this._url}/movies`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwt}`,
      },
      body: JSON.stringify(cardMovie)
    })
    return this._processRequest(promise);
  }

  deleteMovies(id, jwt) {
    const promise = fetch(`${this._url}/movies/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwt}`,
      },
    })
    return this._processRequest(promise);
  }

  getMovies(jwt) {
    const promise = fetch(`${this._url}/movies`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwt}`,
      },
    })
    return this._processRequest(promise);
  }
}

const mainApi = new MainApi();

export default mainApi;
