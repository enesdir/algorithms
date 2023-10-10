type WithdrawalResult = {
  denomination: number
  count: number
}
/**
 * Perform a withdrawal of a given amount using the available banknote denominations.
 * @param {number} amount - The amount to be withdrawn. Must be a positive integer.
 * @returns {Array<{ denomination: number, count: number }>} - An array of objects representing the withdrawn banknotes,
 * where each object contains the denomination (value) and the count (number of banknotes).
 * @throws {Error} - If the amount is not a positive integer or cannot be fulfilled with the available denominations.
 */
function withdrawAmount(amount: number): WithdrawalResult[] {
  // Check if the input amount is a positive integer
  if (!Number.isInteger(amount) || amount <= 0) {
    throw new Error("Invalid input: Amount must be a positive integer.")
  }

  // Define banknote denominations
  const denominations: number[] = [100, 50, 20, 5]

  // Initialize an empty array to store the withdrawal result
  const withdrawalResult: WithdrawalResult[] = []

  // Iterate through the denominations array
  for (let i = 0; i < denominations.length; i++) {
    // Calculate the number of banknotes of this denomination that can be withdrawn
    const numBanknotes = Math.floor(amount / denominations[i])

    // If there are any banknotes of this denomination to be withdrawn, add them to the result
    if (numBanknotes > 0) {
      withdrawalResult.push({
        denomination: denominations[i],
        count: numBanknotes,
      })

      // Update the remaining amount to be withdrawn
      amount -= numBanknotes * denominations[i]
    }
  }

  // If there is any remaining amount, it cannot be fulfilled with the available denominations
  if (amount > 0) {
    throw new Error(
      "Invalid input: Amount cannot be fulfilled with the available denominations."
    )
  }

  // Return the withdrawal result as an array of objects
  return withdrawalResult
}

// Export functions
export { withdrawAmount }

// Example usage
const amount = 810
const result = withdrawAmount(amount)
console.log(`Withdrawal: ${amount}`)
console.log(`Banknotes: ${JSON.stringify(result)}`)
