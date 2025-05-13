"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
console.log(utils_1.stringUtils.capitalize("typescript")); // "Typescript"
console.log(utils_1.stringUtils.trim("   Hello World   ")); // "Hello World"
console.log(utils_1.stringUtils.repeat("abc", 3)); // "abcabcabc"
console.log(utils_1.stringUtils.toSnakeCase("Hello World Again")); // "hello_world_again"
console.log(utils_1.stringUtils.toUpperCase("hello")); // "HELLO"
console.log(utils_1.stringUtils.toLowerCase("HELLO")); // "hello"
console.log(utils_1.stringUtils.isEmpty("    ")); // true
console.log(utils_1.stringUtils.isEmpty("content")); // false
console.log(utils_1.stringUtils.reverseString("abcdef")); // "fedcba"
console.log(utils_1.stringUtils.truncate("This is a long text", 10)); // "This is a..."
console.log(utils_1.stringUtils.removeSpaces("a b c d e f")); // "abcdef"
console.log(utils_1.stringUtils.countWords("one two three four")); // 4
console.log(utils_1.stringUtils.startsWith("TypeScript", "Type")); // true
console.log(utils_1.stringUtils.startsWith("TypeScript", "Script")); // false
