/*
  C Program to check for balanced parentheses in an expression using stack.
  Given an expression as string comprising of opening and closing characters
  of parentheses - (), curly braces - {} and square brackets - [], we need to
  check whether symbols are balanced or not.
*/
#include <stdlib.h>
#include <stdio.h>
#include <string.h>
#define MAX 100

struct Node
{
  int data;
  struct Node *next;
};
typedef struct Node node;

node *top = NULL;

// PUSH()
void Push(char c)
{
  node *temp = (node *)malloc(sizeof(node));
  temp->data = c;
  temp->next = top;
  top = temp;
}

// POP()
void Pop()
{
  node *temp;
  if (top == NULL)
  {
    return;
  }
  temp = top;
  top = top->next;
  free(temp);
}
// Function to check whether two characters are opening
// and closing of same type.
int isMatching(char c)
{
  if (top->data == '(' && c == ')')
  {
    return 1;
  }
  else if (top->data == '[' && c == ']')
  {
    return 1;
  }
  else if (top->data == '{' && c == '}')
  {
    return 1;
  }

  else
    return 0;
}

void isBalanced(char exp[], unsigned long len)
{
  for (int i = 0; i < len; i++)
  {
    if ((exp[i] == '(') || (exp[i] == '{') || (exp[i] == '['))
    {
      Push(exp[i]);
    }
    else if ((exp[i] == ')') || (exp[i] == ']') || (exp[i] == '}'))
    {
      if (top == NULL)
      {
        return;
      }
      if (isMatching(exp[i]))
      {
        Pop();
      }
      else
        return;
    }
  }
  return;
}

int main(void)
{
  char exp[MAX];
  unsigned long len;
  printf("Enter expression: ");
  scanf("%s", exp); // input expression from console
  len = strlen(exp);
  isBalanced(exp, len);
  if (top == NULL)
  {
    printf("Balanced\n");
  }
  else
    printf("Not Balanced\n");

  return 0;
}

/*
src/stack> gcc ./bracketValidation.c
src/stack> a.out

your valid expression => output will be balanced
your non-valid expression => output will be Not Balanced
*/
