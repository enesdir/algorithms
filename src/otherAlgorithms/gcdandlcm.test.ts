import { calculateGCDAndLCM } from "./gcdandlcm"

test("Calculates GCD and LCM correctly", () => {
  expect(calculateGCDAndLCM(8, 20)).toEqual({ gcd: 4, lcm: 40 })
  expect(calculateGCDAndLCM(12, 18)).toEqual({ gcd: 6, lcm: 36 })
})

test("Handles invalid input", () => {
  expect(() => calculateGCDAndLCM("abc" as any, 5)).toThrow(
    "Invalid input: number must be a integer."
  )
  expect(() => calculateGCDAndLCM(null, 5)).toThrow(
    "Invalid input: number must be a integer."
  )
})
