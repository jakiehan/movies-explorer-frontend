import { MOVIES_API_URL } from './constants';

class MoviesApi {
  constructor() {
    this._url = MOVIES_API_URL;
  }

  _processRequest(promise) {
    return promise.then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(res.status);
    })
  }

  getMovies() {
    const promise = fetch(`${this._url}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
    return this._processRequest(promise);
  }
}

const moviesApi = new MoviesApi();

export default moviesApi;