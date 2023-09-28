// TypeScript program for fast inverse square root.

// function to find the inverse square root
function InverseRsqrt(number: number): number {
  const threehalfs: number = 1.5

  let x2: number = number * 0.5
  let y: number = number

  // evil floating point bit level hacking
  let i: number = new Int32Array(new Float32Array([y]).buffer)[0]

  // value is pre-assumed
  i = 0x5f3759df - (i >> 1)
  y = new Float32Array(new Int32Array([i]).buffer)[0]

  // 1st iteration
  y = y * (threehalfs - x2 * y * y)

  // 2nd iteration, this can be removed
  // y = y * (threehalfs - x2 * y * y);

  return y
}

// Export functions
export { InverseRsqrt }

// Test
// const input: number = 4
// const result: number = InverseRsqrt(input)
// console.log(result) // Output: 0.49915357479239103
