export const aboutMe = {
  name: 'Михаил',
  rank: 'Фронтенд-разработчик, 28 лет',
  description:
    'Я родился в Зилово сити. Сейчас живу в Ульяновске, закончил факультет информационных систем и технологий УлГТУ. ' +
    'Я люблю слушать музыку, а ещё увлекаюсь велопрогулками. Это мой дипломный проект на курсе Веб-разработчик от ЯП. ' +
    'Работал инженером-конструктором на АО "Авиастар-СП". После прохождения курса, планирую найти работу в IT и дальше развиваться в этом направлении.'
}

export const aboutProject = [
  {
    id: 1,
    subtitle: 'Дипломный проект включал 5 этапов',
    description: 'Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.'
  },
  {
    id: 2,
    subtitle: 'На выполнение диплома ушло 5 недель',
    description: 'У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.'
  }
]

export const portfolio = [
  {
    id: 1,
    href: 'https://github.com/jakiehan/how-to-learn',
    title: 'Статичный сайт',
    arrow: '↗'
  },
  {
    id: 2,
    href: 'https://github.com/jakiehan/russian-travel',
    title: 'Адаптивный сайт',
    arrow: '↗'
  },
  {
    id: 3,
    href: 'https://github.com/jakiehan/react-mesto-api-full',
    title: 'Одностраничное приложение',
    arrow: '↗'
  }
]

export const techs = [
  { id: 1, tech: 'HTML' },
  { id: 2, tech: 'CSS' },
  { id: 3, tech: 'JS' },
  { id: 4, tech: 'React' },
  { id: 5, tech: 'Git' },
  { id: 6, tech: 'Express.js' },
  { id: 7, tech: 'MongoDB' },
]

export const footerLink = [
  {
    id: 1,
    title: 'Яндекс.Практикум',
    href: 'https://practicum.yandex.ru'
  },
  {
    id: 2,
    title: 'Github',
    href: 'https://github.com/jakiehan'
  },
  {
    id: 3,
    title: 'Telegram',
    href: 'https://t.me/jakiehan'
  }
]

export const messageError = {
  getMoviesError: 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз',
  getInfoUserError: 'При загрузке данных произошла ошибка',
  deleteMoviesError: 'Не удалось удалить фильм.',
  setMoviesError: 'Не удалось сохранить фильм=(',
  noKeyword: 'Нужно ввести ключевое слово',
  collectionMoviesEmpty: 'В вашей коллекции ещё нет фильмов',
  nothingFound: 'Ничего не найдено',
}

export const updateUserOkMessage = 'Информация профиля успешно обновлена';

export const customValidityMessage = {
  tooShort: '`Текст должен быть не короче 2 символов. Длина текста сейчас',
  valueMissing: 'Заполните это поле',
  patternMismatch: 'Поле может содержать только латиницу, кириллицу, пробел или дефис.'
}

export const RENDERING_CARDS_BY_SCREEN_WIDTH = {
  WINDOW_INNER_WIDTH_LARGE: 1113,
  WINDOW_INNER_WIDTH_MIDDLE: 661,
  WINDOW_INNER_WIDTH_SMALL: 660,
  INITIAL_NUMBER_OF_CARDS_LARGE: 12,
  INITIAL_NUMBER_OF_CARDS_MIDDLE: 8,
  INITIAL_NUMBER_OF_CARDS_SMALL: 5,
  ADDITIONAL_NUMBER_OF_CARDS_LARGE: 3,
  ADDITIONAL_NUMBER_OF_CARDS_SMALL: 2,
}

export const MAIN_API_URL = 'https://api.jakimovies.nomoredomains.xyz';
export const MOVIES_API_URL = 'https://api.nomoreparties.co/beatfilm-movies';