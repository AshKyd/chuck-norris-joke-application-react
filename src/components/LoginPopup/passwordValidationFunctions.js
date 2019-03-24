/**
 * Passwords must include one increasing straight of at least three letters,
 * like abc , cde , fgh , and so on, up to xyz . They cannot skip letters; acd
 * doesn't count.
 * @param  {String} string
 * @return {Boolean}
 */
export function doesntContainIncreasingStraight(string) {
  return !string
    // Break up the string into characters
    .split("")
    // For any non-alpha strings, turn them into nuls so we can't match them
    .map(char => (char.match(/[A-Za-z]/) ? char : String.fromCharCode(0)))
    // Convert them to the numberic character  code
    .map(char => char.charCodeAt(0))
    // Check for an increasing straight
    .find((charCode, index, array) => {
      return (
        array[index - 1] === charCode - 1 && array[index - 2] === charCode - 2
      );
    });
}

/**
 * Passwords may not contain the letters i, O, or l, as these letters can be
 * mistaken for other characters and are therefore confusing.
 * @param  {String} string
 * @return {Boolean}
 */
export function containsInvalidChars(string) {
  return !!string.match(/[iOl]/);
}

/**
 * Passwords can only contain lower case alphabetic characters.
 * @param  {String} string
 * @return {Boolean}
 */
export function containsUppercaseLetters(string) {
  return !!string.match(/[A-Z]/);
}

/**
 * Passwords cannot be longer than 32 characters.
 * @param  {String} string
 * @return {Boolean}
 */
export function isInvalidLength(string) {
  return string.length > 32;
}

/**
 * Passwords must contain at least two non-overlapping pairs of letters, like
 * aa, bb, or cc.
 * @param  {String} string
 * @return {Boolean}
 */
export function doesntContainsTwoOverlappingPairs(string) {
  return (
    string.split("").reduce((previousMatches, currentChar, index, array) => {
      const isLetter = !!currentChar.match(/[a-z]/);
      const isPair = currentChar === array[index - 1];
      const isOverlapping = previousMatches.includes(index - 1);
      const isMatch = isLetter && isPair && !isOverlapping;
      return isMatch ? [...previousMatches, index] : previousMatches;
    }, []).length < 2
  );
}
