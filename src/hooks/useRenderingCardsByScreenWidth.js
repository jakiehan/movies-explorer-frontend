import { useEffect, useState } from 'react';
import { RENDERING_CARDS_BY_SCREEN_WIDTH } from '../utils/constants.js';

export function useRenderingCardsByScreenWidth(listMovies) {

  const [windowInnerWidth, setWindowInnerWidth] = useState(window.innerWidth);
  const [initialNumberOfCards, setInitialNumberOfCards] = useState(0);
  const [additionalNumberOfCards, setAdditionalNumberOfCards] = useState(0);
  const [onClickMoreButton, setOnClickMoreButton] = useState(false);

  const {
    WINDOW_INNER_WIDTH_LARGE,
    WINDOW_INNER_WIDTH_SMALL,
    ADDITIONAL_NUMBER_OF_CARDS_LARGE,
    ADDITIONAL_NUMBER_OF_CARDS_SMALL,
    INITIAL_NUMBER_OF_CARDS_LARGE,
    INITIAL_NUMBER_OF_CARDS_MIDDLE,
    INITIAL_NUMBER_OF_CARDS_SMALL,
    ADDITIONAL_NUMBER_OF_CARDS_MIDDLE
  } = RENDERING_CARDS_BY_SCREEN_WIDTH;

  const setUpdateTimer = () => {
    setTimeout(() => {
      setWindowInnerWidth(window.innerWidth);
    }, 2000)
  }

  const defineNumberOfCards = () => {

    if (windowInnerWidth >= WINDOW_INNER_WIDTH_LARGE) {
      setInitialNumberOfCards(INITIAL_NUMBER_OF_CARDS_LARGE);
    } else if (windowInnerWidth > WINDOW_INNER_WIDTH_SMALL) {
      setInitialNumberOfCards(INITIAL_NUMBER_OF_CARDS_MIDDLE);
    } else {
      setInitialNumberOfCards(INITIAL_NUMBER_OF_CARDS_SMALL);
    }
  }

  const defineAdditionalNumberOfCardsWhenClicked = () => {

    if (windowInnerWidth >= WINDOW_INNER_WIDTH_LARGE) {
      setAdditionalNumberOfCards(ADDITIONAL_NUMBER_OF_CARDS_LARGE);
    } else if (windowInnerWidth > WINDOW_INNER_WIDTH_SMALL) {
      setAdditionalNumberOfCards(ADDITIONAL_NUMBER_OF_CARDS_MIDDLE);
    } else {
      setAdditionalNumberOfCards(ADDITIONAL_NUMBER_OF_CARDS_MIDDLE);
    }
  }

  const defineAdditionalNumberOfCardsWhenChangingWidth = () => {
    if ((windowInnerWidth > WINDOW_INNER_WIDTH_SMALL && windowInnerWidth < WINDOW_INNER_WIDTH_LARGE) && (initialNumberOfCards % 2 !== 0)) {
      setInitialNumberOfCards(initialNumberOfCards + 1)
    }
    if (windowInnerWidth > WINDOW_INNER_WIDTH_LARGE && initialNumberOfCards % 3 === 1) {
      setInitialNumberOfCards(initialNumberOfCards + ADDITIONAL_NUMBER_OF_CARDS_MIDDLE)
    }
    if (windowInnerWidth > WINDOW_INNER_WIDTH_LARGE && initialNumberOfCards % 3 === 2) {
      setInitialNumberOfCards(initialNumberOfCards + ADDITIONAL_NUMBER_OF_CARDS_SMALL)
    }
  }


  useEffect(() => {
    setOnClickMoreButton(false);
  }, [listMovies])

  useEffect(() => {

    if (!onClickMoreButton) {
      defineNumberOfCards();
      defineAdditionalNumberOfCardsWhenClicked();
    } else {
      defineAdditionalNumberOfCardsWhenChangingWidth();
      defineAdditionalNumberOfCardsWhenClicked();
    }

    window.addEventListener('resize', setUpdateTimer);
    return () => window.removeEventListener('resize', setUpdateTimer);

  }, [windowInnerWidth, listMovies, onClickMoreButton])

  return { initialNumberOfCards, additionalNumberOfCards, setInitialNumberOfCards, setOnClickMoreButton }
}