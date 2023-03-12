import { strict as assert } from "node:assert";
import capitalize from "../src/capitalize.js";

if (assert.equal(capitalize("hello"), "Hello")) {
  throw new Error("Функция работает неверно!");
}

if (assert.equal(capitalize(""), "")) {
  throw new Error("Функция работает неверно!");
}

console.log("Все тесты пройдены!");
