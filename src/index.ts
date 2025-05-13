import { stringUtils } from "./utils";


console.log(stringUtils.capitalize("typescript")); // "Typescript"
console.log(stringUtils.trim("   Hello World   ")); // "Hello World"
console.log(stringUtils.repeat("abc", 3)); // "abcabcabc"
console.log(stringUtils.toSnakeCase("Hello World Again")); // "hello_world_again"
console.log(stringUtils.toUpperCase("hello")); // "HELLO"
console.log(stringUtils.toLowerCase("HELLO")); // "hello"
console.log(stringUtils.isEmpty("    ")); // true
console.log(stringUtils.isEmpty("content")); // false
console.log(stringUtils.reverseString("abcdef")); // "fedcba"
console.log(stringUtils.truncate("This is a long text", 10)); // "This is a..."
console.log(stringUtils.removeSpaces("a b c d e f")); // "abcdef"
console.log(stringUtils.countWords("one two three four")); // 4
console.log(stringUtils.startsWith("TypeScript", "Type")); // true
console.log(stringUtils.startsWith("TypeScript", "Script")); // false