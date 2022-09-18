import { useEffect, useState } from 'react';
import { RENDERING_CARDS_BY_SCREEN_WIDTH } from '../utils/constants.js';

export function useRenderingCardsByScreenWidth(listMovies) {

  const [windowInnerWidth, setWindowInnerWidth] = useState(window.innerWidth);
  const [initialNumberOfCards, setInitialNumberOfCards] = useState(0);
  const [additionalNumberOfCards, setAdditionalNumberOfCards] = useState(0);
  const [onClickMoreButton, setOnClickMoreButton] = useState(false);

  const {
    WINDOW_INNER_WIDTH_LARGE,
    WINDOW_INNER_WIDTH_MIDDLE,
    WINDOW_INNER_WIDTH_SMALL,
    ADDITIONAL_NUMBER_OF_CARDS_LARGE,
    ADDITIONAL_NUMBER_OF_CARDS_SMALL,
    INITIAL_NUMBER_OF_CARDS_LARGE,
    INITIAL_NUMBER_OF_CARDS_MIDDLE,
    INITIAL_NUMBER_OF_CARDS_SMALL
  } = RENDERING_CARDS_BY_SCREEN_WIDTH;

  const setUpdateTimer = () => {
    setTimeout(() => {
      setWindowInnerWidth(window.innerWidth);
    }, 2000)
  }

  const checkWindowInnerWidth = () => {

    if (windowInnerWidth >= WINDOW_INNER_WIDTH_LARGE) {
      setInitialNumberOfCards(INITIAL_NUMBER_OF_CARDS_LARGE);
      setAdditionalNumberOfCards(ADDITIONAL_NUMBER_OF_CARDS_LARGE);
    } else if (windowInnerWidth > WINDOW_INNER_WIDTH_SMALL && windowInnerWidth < WINDOW_INNER_WIDTH_LARGE) {
      setInitialNumberOfCards(INITIAL_NUMBER_OF_CARDS_MIDDLE);
      setAdditionalNumberOfCards(ADDITIONAL_NUMBER_OF_CARDS_SMALL);
    } else if (windowInnerWidth < WINDOW_INNER_WIDTH_MIDDLE) {
      setInitialNumberOfCards(INITIAL_NUMBER_OF_CARDS_SMALL);
      setAdditionalNumberOfCards(ADDITIONAL_NUMBER_OF_CARDS_SMALL);
    }
  }

  useEffect(() => {
    setOnClickMoreButton(false);
  }, [listMovies])

  useEffect(() => {

    if (!onClickMoreButton) {
      checkWindowInnerWidth();
    }

    window.addEventListener('resize', setUpdateTimer);
    return () => window.removeEventListener('resize', setUpdateTimer);

  }, [windowInnerWidth, listMovies, onClickMoreButton])

  return { initialNumberOfCards, additionalNumberOfCards, setInitialNumberOfCards, setOnClickMoreButton }
}