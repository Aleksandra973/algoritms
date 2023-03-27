const isOneEditDistance = require("./index");
const isOneEditDistance_v2 = require("./index");

test("ab, abc", () => {
  expect(isOneEditDistance("ab", "abc")).toBe(true);
});

test("empty strings", () => {
  expect(isOneEditDistance("", "")).toBe(false);
});

test("same strings", () => {
  expect(isOneEditDistance("a", "a")).toBe(false);
});

test("ab, abc", () => {
  expect(isOneEditDistance_v2("ab", "abc")).toBe(true);
});

test("ab, acb", () => {
  expect(isOneEditDistance_v2("ab", "acb")).toBe(true);
});

test("a, ", () => {
  expect(isOneEditDistance_v2("a", "")).toBe(true);
});

test(",A", () => {
  expect(isOneEditDistance_v2("", "A")).toBe(true);
});

test("empty strings", () => {
  expect(isOneEditDistance_v2("", "")).toBe(false);
});

test("same strings", () => {
  expect(isOneEditDistance_v2("a", "a")).toBe(false);
});
