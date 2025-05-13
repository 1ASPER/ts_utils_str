import { StringUtils } from "./types";


export const stringUtils: StringUtils = {
  capitalize: (str) => str.charAt(0).toUpperCase() + str.slice(1),
  trim: (str) => str.trim(),
  repeat: (str, count) => (count > 0 ? str.repeat(count) : ''),
  toSnakeCase: (str) => str.replace(/\s+/g, '_').toLowerCase(),
  toUpperCase: (str) => str.toUpperCase(),
  toLowerCase: (str) => str.toLowerCase(),
  isEmpty: (str) => str.trim().length === 0,
  reverseString: (str) => [...str].reverse().join(''),
  truncate: (str, maxLength) => 
    str.length > maxLength ? `${str.slice(0, maxLength)}...` : str,
  removeSpaces: (str) => str.replace(/\s+/g, ''),
  countWords: (str) => str.trim().split(/\s+/).filter(Boolean).length,
  startsWith: (str, prefix) => str.startsWith(prefix),
  endsWith: (str, suffix) => str.endsWith(suffix),
  replaceAll: (str, search, replacement) => 
    str.split(search).join(replacement),
};