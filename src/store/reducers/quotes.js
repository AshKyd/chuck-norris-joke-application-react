import {
  SET_LIST,
  SET_ERROR,
  ADD_FAVOURITE,
  REMOVE_FAVOURITE,
  SET_FAVOURITES,
  ADD_RANDOM_FAVOURITE,
  SET_LOADING,
  CLEAR_LOADING
} from "../actions/quotes";

export const MAX_FAVOURITES = 10;

function applyCheckedStatus(list, favourites) {
  return list.map(quote => ({
    ...quote,
    checked: !!favourites.find(fav => fav.id === quote.id)
  }));
}

/**
 * Add a favourite by payload
 * @param {Object} fav   The favourite payload, as seen in the Quotes action
 * @param {Object} state
 * @return {Object}
 */
function addFavourite(fav, state) {
  if (state.favourites.length >= MAX_FAVOURITES)
    return {
      ...state,
      error: `You may only add a total of ${MAX_FAVOURITES} favourites. Remove some favourites and try again.`
    };

  // Fav already set (this shouldn't happen, but you never know)
  const existingFav = state.favourites.find(quote => quote.id === fav.id);
  if (existingFav) return state;

  const checkedFav = { ...fav, checked: true };

  const favourites = [checkedFav, ...state.favourites];

  const newState = {
    ...state,
    list: applyCheckedStatus(state.list, favourites),
    favourites,
    error: false
  };

  return newState;
}

/**
 * Add a favourite by ID
 * @param  {Number} id    ID of the favourite to add
 * @param  {Object} state
 * @return {Object}
 */
function setFavourite(id, state) {
  const fav = state.list.find(quote => quote.id === id);
  if (!fav) throw new Error("Favourite not found");
  return addFavourite(fav, state);
}

/**
 * Remove a favourite by ID
 * @param  {Number} id    ID of the favourite to remove
 * @param  {Object} state
 * @return {Object}
 */
function removeFavourite(id, state) {
  const favourites = state.favourites.filter(quote => quote.id !== id);

  const newState = {
    ...state,
    list: applyCheckedStatus(state.list, favourites),
    favourites,
    error: false
  };

  return newState;
}

export default function(
  state = { list: [], favourites: [], error: false },
  action
) {
  switch (action.type) {
    case SET_LIST:
      return {
        ...state,
        list: applyCheckedStatus(action.list, state.favourites),
        error: false
      };
    case SET_ERROR:
      return { ...state, error: action.error };
    case ADD_FAVOURITE:
      return setFavourite(action.id, state);
    case REMOVE_FAVOURITE:
      return removeFavourite(action.id, state);
    case SET_FAVOURITES:
      return { ...state, favourites: action.favourites.slice(0) };
    case ADD_RANDOM_FAVOURITE:
      return addFavourite(action.favourite, state);
    case SET_LOADING:
      return { ...state, loading: true };
    case CLEAR_LOADING:
      return { ...state, loading: false };
    default:
      return state;
  }
}
