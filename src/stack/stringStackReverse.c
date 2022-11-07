#include <stdlib.h>
#include <stdio.h>

#define MAX_SIZE 10 // Maximum Size for Array.
int top = -1;

char str[MAX_SIZE], reverseStr[MAX_SIZE]; // Global Array Name “Str” and "reverseStr"

// Define Push Operation for Stack.
void push(char x)
{
  if (top == MAX_SIZE)
  {
    printf("Stack Overflow\n");
  }
  reverseStr[++top] = x;
}
// Define Pop Operation for Stack.
void pop()
{
  if (top == -1)
  {
    printf("\nStack Overflow ");
  }
  printf("%c", reverseStr[top]);
  --top;
}

int main()
{
  int i = 0;
  printf("What is your keyword want to reverse: ");
  scanf("%s", str);
  for (i = 0; str[i] != '\0'; i++)
  {
    push(str[i]);
  }
  for (i = 0; str[i] != '\0'; i++)
  {
    pop();
  }
  printf("\n");
  return 0;
}

/*
src/stack> gcc ./stringStackReverse.c
src/stack> a.out

What is your keyword want to reverse: yourInput
tupnIruoy
*/
