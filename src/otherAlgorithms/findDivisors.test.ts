import { findDivisors } from "./findDivisors"

// test for findDivisors function
test("Finds divisors correctly", () => {
  expect(findDivisors(320)).toEqual([
    1, 2, 4, 5, 8, 10, 16, 20, 32, 40, 64, 80, 160, 320,
  ])
  expect(findDivisors(100, 5)).toEqual([1, 2, 4, 10, 20, 25, 50, 100])
})

test("Throws error for negative input", () => {
  expect(() => {
    findDivisors(-5)
  }).toThrowError("The input number must be non-negative.")
})
