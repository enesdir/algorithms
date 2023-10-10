import { withdrawAmount } from "./withDrawAmount"

// test withDrawAmount Function
describe("withdrawAmount", () => {
  it("should correctly withdraw the amount with minimum number of banknotes", () => {
    expect(withdrawAmount(420)).toEqual([
      { denomination: 100, count: 4 },
      { denomination: 20, count: 1 },
    ])

    expect(withdrawAmount(150)).toEqual([
      { denomination: 100, count: 1 },
      { denomination: 50, count: 1 },
    ])

    // Add more test cases as needed
  })

  it("should throw an error for invalid input", () => {
    expect(() => withdrawAmount(-100)).toThrow(
      "Invalid input: Amount must be a positive integer."
    )

    expect(() => withdrawAmount("abc" as any)).toThrow(
      "Invalid input: Amount must be a positive integer."
    )

    // Add more test cases as needed
  })
})
