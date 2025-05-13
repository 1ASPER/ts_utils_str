export type StringFunction = (input: string, ...args: any[]) => string;


export interface StringUtils {
  capitalize: (str: string) => string;
  trim: (str: string) => string;
  repeat: (str: string, count: number) => string;
  toSnakeCase: (str: string) => string;
  toUpperCase: (str: string) => string;
  toLowerCase: (str: string) => string;
  isEmpty: (str: string) => boolean;
  reverseString: (str: string) => string;
  truncate: (str: string, maxLength: number) => string;
  removeSpaces: (str: string) => string;
  countWords: (str: string) => number;
  startsWith: (str: string, prefix: string) => boolean;
  endsWith: (str: string, suffix: string) => boolean;
  replaceAll: (str: string, search: string, replacement: string) => string;
}