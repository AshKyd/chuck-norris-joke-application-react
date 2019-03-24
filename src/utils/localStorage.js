/**
 * Save to localStorage. Silently ignore errors (eg. if we're trying to
 * access loadLocalStorage in private browsing mode).
 * @param  {Array} state Array of favourites
 */
export function saveLocalStorage(key, value, type = "localStorage") {
  return new Promise((resolve, reject) => {
    try {
      window[type].setItem(key, JSON.stringify(value));
    } catch (e) {}
    resolve();
  });
}

/**
 * Restore from localStorage. If no entries are found, return the initial
 * state. Silently ignore errors (eg. if we're trying to access loadLocalStorage
 * in private browsing mode).
 */
export function loadLocalStorage(key, defaultValue, type = "localStorage") {
  return new Promise((resolve, reject) => {
    let notes = defaultValue;
    try {
      const localItem = window[type].getItem(key);
      if (localItem) notes = JSON.parse(localItem);
    } catch (e) {}
    resolve(notes);
  });
}
