import validator from 'validator/es';
import { backupTrailerLink } from './constants.js';

export const refactorCardMovie = (cardMovie) => {

  const trailerLink = validator.isURL(cardMovie.trailerLink) ? cardMovie.trailerLink : backupTrailerLink;

  return {
    country: cardMovie.country || 'Нет данных',
    director: cardMovie.director || 'Нет данных',
    duration: cardMovie.duration || 0,
    year: cardMovie.year || 'Нет данных',
    description: cardMovie.description || 'Нет данных',
    image: `https://api.nomoreparties.co${cardMovie.image.url}` || 'Нет данных',
    trailerLink: trailerLink,
    nameRU: cardMovie.nameRU || 'Нет данных',
    nameEN: cardMovie.nameEN || 'Нет данных',
    thumbnail: `https://api.nomoreparties.co${cardMovie.image.formats.thumbnail.url}` || 'https://unsplash.com/photos/tS9Laea1ybE',
    movieId: cardMovie.id || Math.floor(Math.random() * (1000 - 110 + 1)) + 110,
  }
}