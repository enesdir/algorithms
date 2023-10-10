#include <stdio.h>

long gcd(long, long);
long lcm(long, long);

int main()
{
  long n1, n2, hcf, lcmValue;

  printf("Enter two integers: ");
  scanf("%ld%ld", &n1, &n2);

  // Check if either number is negative. If so, make it positive.
  if (n1 < 0)
  {
    n1 = -n1;
  }
  if (n2 < 0)
  {
    n2 = -n2;
  }

  // Find the HCF and LCM using the gcd() and lcm() functions.
  hcf = gcd(n1, n2);
  lcmValue = lcm(n1, n2);

  // Print the results.
  printf("Greatest common divisor of %ld and %ld = %ld\n", n1, n2, hcf);
  printf("Least common multiple of %ld and %ld = %ld\n", n1, n2, lcmValue);

  return 0;
}

// Recursive function to find the greatest common divisor (GCD) of two numbers.
long gcd(long n1, long n2)
{
  if (n2 == 0)
  {
    return n1;
  }
  else
  {
    return gcd(n2, n1 % n2);
  }
}

// Function to find the least common multiple (LCM) of two numbers.
long lcm(long n1, long n2)
{
  return n1 * n2 / gcd(n1, n2);
}
