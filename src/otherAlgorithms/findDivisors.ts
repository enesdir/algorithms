/**
 * Finds the divisors of a number.
 *
 * @param {number} number - The number to find the divisors of.
 * @param {number} [divisor] - The optional divisor to exclude from the divisors list.
 * @returns {number[]} - An array of divisors.
 * @throws {Error} - If the input number is negative.
 */
function findDivisors(number: number, divisor?: number): number[] {
  // Check if the input number is non-negative.
  if (number < 0) {
    throw new Error("The input number must be non-negative.")
  }

  // Create an array of numbers from 1 to the input number.
  const divisors: number[] = Array.from(Array(number), (_, i) => i + 1)

  // Filter the array to only include numbers that divide the input number evenly
  // and are not equal to the divisor argument.
  const filteredDivisors = divisors.filter(
    (x) => number % x === 0 && x !== divisor
  )

  // Optionally output the divisions to the divisor.
  if (divisor) {
    console.log(
      `The divisions of ${number} to ${divisor} are: ${filteredDivisors.map(
        (x) => number / x
      )}`
    )
  }

  // Output the number to be divided.
  console.log(`The number to be divided is: ${number}`)

  // Output the divisions apart from itself.
  console.log(
    `The divisions apart from itself are: ${filteredDivisors.filter(
      (x) => x !== 100
    )}`
  )

  return filteredDivisors
}

// export function
export { findDivisors }

// Example Usage
// console.log(findDivisors(320))
// console.log(findDivisors(100, 5))
