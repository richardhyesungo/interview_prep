import { bubbleSort } from "./bubbleSort";

it("runs simple test to make sure tests are working", () => {
  expect(5).toBe(5);
});

describe("placeholder", () => {
  it("runs simple test to make sure tests are working", () => {
    expect(5).toBe(5);
  });

  expect(bubbleSort([4, 3, 2, 1])).toEqual([1, 2, 3, 4]);
  // expect(bubbleSort([4, 3, 2, 1])).toEqual([1, 2, 3, 4]);
  // expect(bubbleSort([4, 3, 2, 1])).toEqual([1, 2, 3, 4]);
  // expect(bubbleSort([4, 3, 2, 1])).toEqual([1, 2, 3, 4]);
});
