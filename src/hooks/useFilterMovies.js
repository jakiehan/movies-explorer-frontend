import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { messageError } from '../utils/constants.js';

export function useFilterMovies(list) {

  const [listSortedMovies, setListSortedMovies] = useState([]);
  const [isMessageError, setIsMessageError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [isStateForm, setIsStateForm] = useState({search: '', checkbox: false});
  const [enteredValue, setEnteredValue] = useState({search: '', checkbox: false});
  const [checked, setChecked] = useState(false);
  const [isFirstRender, setIsFirstRender] = useState(false);
  const [sorted, setSorted] = useState(false);

  const keyForm = useLocation().pathname.replace('/', 'form-');
  const { noKeyword, collectionMoviesEmpty, nothingFound } = messageError;

  const sortMovies = (movies, formElemValues) => {
    const { search, checkbox } = formElemValues;

    if (formElemValues.search === '') {
      return movies.filter(({ duration }) => (
         (!checkbox || duration <= 40)
      ))
    }
    return movies.filter(({ nameRU, nameEN, duration }) => (
      ((nameRU.toLowerCase().includes(search.toLowerCase()) || nameEN?.toLowerCase().includes(search?.toLowerCase())) && (!checkbox || duration <= 40))
    ))
  }

  const handleSortMovies = (res, formElemValues) => {
    setIsStateForm(formElemValues);
    const result = sortMovies(res, formElemValues);
    compareResultSorted(result);
  }

  const compareResultSorted = (result) => {
    switch (JSON.stringify(result)) {

      case JSON.stringify(list):
        setListSortedMovies([]);
        setSorted(false);
        setIsMessageError('');
        break;

      case JSON.stringify([]):
        setIsMessageError(nothingFound);
        setSorted(true);
        break;

      default:
        const newListSorted = [...result]
        setListSortedMovies(newListSorted);
        setIsMessageError('');
        setSorted(true);
    }
  }

  const toggleCheckbox = () => {
    setChecked(!checked);
    setIsStateForm({ ...isStateForm, checkbox: !checked});
  }

  const handleClickBtnReset = () => {
    setIsMessageError('');
    setListSortedMovies([]);
    setChecked(false);
    setIsStateForm({...isStateForm, search: '', checkbox: false});
    setSorted(false);
  }

  const checkValuesInput = () => {
    return isStateForm.search === enteredValue.search;
  }

  const showLastSearchQuery = () => {
    const searchParameters = getItemSessionStorage(keyForm);
    setIsFirstRender(true);

    if (searchParameters !== null) {
      const { sortMovies, checkbox, search, error, sorting } = searchParameters;
      setIsMessageError(error);
      setListSortedMovies([...sortMovies]);
      setChecked(checkbox);
      setSearchQuery(search);
      setSorted(sorting);
      setIsStateForm({
        ...isStateForm,
        search,
        checkbox,
      });
    }
  }

  useEffect(() => {

    if (isFirstRender) {
      const { search, checkbox } = isStateForm;
      const messageError = (isMessageError === collectionMoviesEmpty || isMessageError === noKeyword) ? '' : isMessageError;
      const newParameters = isMessageError === noKeyword;

      const searchParameters = {
        checkbox: newParameters ? false : checkbox,
        search: newParameters ? '' : search,
        error: messageError,
        sortMovies: newParameters ? [] : listSortedMovies,
        sorting: sorted,
      }
      setItemSessionStorage(keyForm, searchParameters);
    }
  }, [compareResultSorted])

  const setItemSessionStorage = (key, item) => {
    sessionStorage.setItem(key, JSON.stringify(item));
  }

  const getItemSessionStorage = (key) => {
    return JSON.parse(sessionStorage.getItem(key));
  }

  return {
    sortMovies,
    handleSortMovies,
    setItemSessionStorage,
    getItemSessionStorage,
    showLastSearchQuery,
    handleClickBtnReset,
    checkValuesInput,
    toggleCheckbox,
    listSortedMovies,
    isMessageError,
    setIsMessageError,
    setListSortedMovies,
    checked,
    setChecked,
    isStateForm,
    setIsStateForm,
    searchQuery,
    setSearchQuery,
    enteredValue,
    setEnteredValue,
    isFirstRender,
    sorted,
    setSorted
  }
}
