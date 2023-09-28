// C program for fast inverse square root.
#include <stdio.h>

float inverse_rsqrt(float number)
{
  long i;
  float x2, y;
  const float threehalfs = 1.5F;

  x2 = number * 0.5F;
  y = number;
  i = *(long *)&y;           // evil floating point bit level hacking
  i = 0x5f3759df - (i >> 1); // what the fuck?
  y = *(float *)&i;
  y = y * (threehalfs - (x2 * y * y)); // 1st iteration
  // y  = y * ( threehalfs - ( x2 * y * y ) );   // 2nd iteration, this can be removed

  return y;
}

// driver code
int main()
{
  int n = 0;
  printf("Enter number: ");
  scanf("%d", &n);
  float f = inverse_rsqrt(n);
  printf("Entered number: %d", n);
  printf(" inverse square root is: %f", f);
  return 0;
}

/*
src/numericalAnalysisAlgorithms> gcc ./inverseSquareRoot.c
src/numericalAnalysisAlgorithms> a.out
*/
