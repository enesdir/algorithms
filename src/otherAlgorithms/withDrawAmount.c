// C program for perform a withdrawal of a given amount using the available banknote denominations
#include <stdio.h>
#include <stdlib.h>

struct WithdrawalResult
{
  int denomination;
  int count;
};

struct WithdrawalResult *withdrawAmount(int amount)
{
  // Check if the input amount is a positive integer
  if (amount <= 0)
  {
    printf("Invalid input: Amount must be a positive integer.\n");
    return NULL;
  }

  // Define banknote denominations
  int denominations[] = {100, 50, 20, 5};
  int numDenominations = sizeof(denominations) / sizeof(denominations[0]);

  // Create a dynamic array to store the withdrawal result
  struct WithdrawalResult *withdrawalResult = malloc(numDenominations * sizeof(struct WithdrawalResult));

  // Iterate through the denominations array
  for (int i = 0; i < numDenominations; i++)
  {
    // Calculate the number of banknotes of this denomination that can be withdrawn
    int numBanknotes = amount / denominations[i];

    // If there are any banknotes of this denomination to be withdrawn, add them to the result
    if (numBanknotes > 0)
    {
      withdrawalResult[i].denomination = denominations[i];
      withdrawalResult[i].count = numBanknotes;

      // Update the remaining amount to be withdrawn
      amount -= numBanknotes * denominations[i];
    }
  }

  // If there is any remaining amount, it cannot be fulfilled with the available denominations
  if (amount > 0)
  {
    printf("Invalid input: Amount cannot be fulfilled with the available denominations.\n");
    free(withdrawalResult);
    return NULL;
  }

  // Return the withdrawal result
  return withdrawalResult;
}

int main()
{
  int amount = 420;
  struct WithdrawalResult *result = withdrawAmount(amount);

  if (result != NULL)
  {
    printf("Withdrawal Result:\n");
    for (int i = 0; i < 4; i++)
    {
      printf("%d x %d\n", result[i].count, result[i].denomination);
    }

    // Don't forget to free the memory allocated for the result
    free(result);
  }

  return 0;
}

/*
src/otherAlgorithms> gcc ./withDrawAmount.c
src/otherAlgorithms> a.out
Output:
Withdrawal Result:
4 x 100
0 x 0
1 x 20
0 x 0
*/
