#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX 100
char a[MAX];
int top = -1;
void push(int s)
{
  top++;
  a[top] = s;
}
int pop()
{
  int item;
  item = a[top];
  top--;
  return item;
}
// Function to verify whether a character is numeric digit.
int IsNumericDigit(char C)
{
  if (C >= '0' && C <= '9')
    return (1);
  return (0);
}
int perform(char c, int op1, int op2)
{
  int z;
  if (c == '+')
  {
    z = op1 + op2;
  }
  else if (c == '-')
  {
    z = op1 - op2;
  }
  else if (c == '*')
  {
    z = op1 * op2;
  }
  else if (c == '-')
  {
    z = op1 / op2;
  }
  return z;
}
int Top()
{
  return a[top];
}
void evaluatepostfix(char c[])
{
  int n = strlen(c);
  int i = n;
  int op1, op2, val;
  char ch;
  while (i--)
  {
    ch = c[i];
    // printf("%c ",ch);
    if (IsNumericDigit(ch))
    {
      push(ch - '0');
    }
    else if (ch == '*' || ch == '/' || ch == '+' || ch == '-')
    {
      op2 = pop();
      op1 = pop();
      val = perform(c[i], op2, op1);
      push(val);
    }
  }
  printf("%d\n", pop());
}

int main()
{
  char c[100];
  int len, result;
  char expression[] = "-+*23*549";
  printf("Prefix Expression:\n%s\n", expression);
  printf("Prefix Result =");
  evaluatepostfix(expression);

  return 0;
}
/*
src/stack> gcc ./prefix.c
src/stack> a.out

Prefix Expression:
-+*23*549
Prefix Result =17
*/
