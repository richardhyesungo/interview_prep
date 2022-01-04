// const sums = require("./problems/testFile");
// import sum from "./problems/testFile";
var reverse = require("/Users/richardo/Desktop/leetcode/problems/reverseALinkedList/reverseALinkedList");

test("2 steps away from top", function () {
  expect(reverse(2)).toBe(2);
});

test("3 steps away from top", function () {
  expect(reverse(3)).toBe(3);
});

test("4 steps away from top", function () {
  expect(reverse(4)).toBe(5);
});

test("5 steps away from top", function () {
  expect(reverse(5)).toBe(8);
});

test("6 steps away from top", function () {
  expect(reverse(6)).toBe(13);
});
