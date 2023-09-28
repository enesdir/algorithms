import { InverseRsqrt } from "./inverseSquareRoot"

// Test inverse square root
test("computes inverse square root correctly", () => {
  expect(InverseRsqrt(4)).toBeCloseTo(0.49915357479239103)
})
