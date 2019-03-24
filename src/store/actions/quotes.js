import entities from "entities";

export const SET_LIST = "SET_LIST";
export const SET_ERROR = "SET_ERROR";
export const SET_LOADING = "SET_LOADING";
export const CLEAR_LOADING = "CLEAR_LOADING";
export const ADD_FAVOURITE = "ADD_FAVOURITE";
export const REMOVE_FAVOURITE = "REMOVE_FAVOURITE";
export const ADD_RANDOM_FAVOURITE = "ADD_RANDOM_FAVOURITE";
export const SET_FAVOURITES = "SET_FAVOURITES";

export function setLoading() {
  return { type: SET_LOADING };
}
export function clearLoading() {
  return { type: CLEAR_LOADING };
}

export function getRandom() {
  return function(dispatch) {
    dispatch(setLoading());
    fetch("http://api.icndb.com/jokes/random/10")
      .then(response => response.json())
      .then(json => {
        dispatch({
          type: SET_LIST,
          list: json.value.map(({ id, joke }) => ({
            id,
            // Some quotes come back with entities in the JSON payload.
            text: entities.decodeHTML(joke)
          }))
        });
      })
      .catch(e => dispatch({ type: SET_ERROR, error: e.message }))
      .finally(() => dispatch(clearLoading()));
  };
}

export function addRandomFavourite() {
  return function(dispatch) {
    dispatch(setLoading());
    fetch("http://api.icndb.com/jokes/random/1")
      .then(response => response.json())
      .then(json => {
        const { id, joke } = json.value[0];
        dispatch({
          type: ADD_RANDOM_FAVOURITE,
          favourite: {
            id,
            // Some quotes come back with entities in the JSON payload.
            text: entities.decodeHTML(joke)
          }
        });
      })
      .catch(e => dispatch({ type: SET_ERROR, error: e.message }))
      .finally(() => dispatch(clearLoading()));
  };
}

export function addFavourite(id) {
  return { type: ADD_FAVOURITE, id };
}

export function removeFavourite(id) {
  return { type: REMOVE_FAVOURITE, id };
}

export function setFavourites(favourites) {
  return { type: SET_FAVOURITES, favourites };
}
