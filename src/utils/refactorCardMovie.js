export const refactorCardMovie = (cardMovie) => {
  return {
    country: cardMovie.country || 'Нет данных',
    director: cardMovie.director || 'Нет данных',
    duration: cardMovie.duration || 0,
    year: cardMovie.year || 'Нет данных',
    description: cardMovie.description || 'Нет данных',
    image: `https://api.nomoreparties.co${cardMovie.image.url}` || 'Нет данных',
    trailerLink: cardMovie.trailerLink || 'https://www.youtube.com/watch?v=3QtqXM5sdaY&ab_channel=NewfilmZ',
    nameRU: cardMovie.nameRU || 'Нет данных',
    nameEN: cardMovie.nameEN || 'Нет данных',
    thumbnail: `https://api.nomoreparties.co${cardMovie.image.formats.thumbnail.url}` || 'https://unsplash.com/photos/tS9Laea1ybE',
    movieId: cardMovie.id || Math.floor(Math.random() * (1000 - 110 + 1)) + 110,
  }
}