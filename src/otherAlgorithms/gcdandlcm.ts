/**
 * Calculates the greatest common divisor (GCD) of two numbers.
 *
 * @param {number} n1 - The first number.
 * @param {number} n2 - The second number.
 * @returns {number} - The GCD of the two numbers.
 */
function gcd(n1: number, n2: number): number {
  if (n2 === 0) {
    return n1
  } else {
    return gcd(n2, n1 % n2)
  }
}

/**
 * Calculates the least common multiple (LCM) of two numbers.
 *
 * @param {number} n1 - The first number.
 * @param {number} n2 - The second number.
 * @returns {number} - The LCM of the two numbers.
 */
function lcm(n1: number, n2: number): number {
  return (n1 * n2) / gcd(n1, n2)
}

/**
 * Calculates the GCD and LCM of two numbers.
 *
 * @param {number} n1 - The first number.
 * @param {number} n2 - The second number.
 * @returns {Object} - The GCD and LCM as properties of an object.
 */
function calculateGCDAndLCM(
  n1: number,
  n2: number
): { gcd: number; lcm: number } {
  if (n1 === null || n2 === null || isNaN(n1) || isNaN(n2)) {
    throw new Error("Invalid input: number must be a integer.")
  }

  const gcdResult = gcd(Math.abs(n1), Math.abs(n2))
  const lcmResult = lcm(Math.abs(n1), Math.abs(n2))

  console.log(`The greatest common divisor of ${n1} and ${n2} is ${gcdResult}`)
  console.log(`The least common multiple of ${n1} and ${n2} is ${lcmResult}`)

  return { gcd: gcdResult, lcm: lcmResult }
}

export { calculateGCDAndLCM }

// Example usage
// console.log(calculateGCDAndLCM(12, 21))
