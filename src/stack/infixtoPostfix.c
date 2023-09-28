#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>

#define MAX_SIZE 100

// Define a stack structure
struct StackNode
{
  char data;
  struct StackNode *next;
};

struct Stack
{
  struct StackNode *top;
};

// Function to initialize the stack
void initialize(struct Stack *stack)
{
  stack->top = NULL;
}

// Function to check if the stack is empty
int isEmpty(struct Stack *stack)
{
  return stack->top == NULL;
}

// Function to push an item onto the stack
void push(struct Stack *stack, char item)
{
  struct StackNode *new_node = malloc(sizeof(struct StackNode));
  new_node->data = item;
  new_node->next = stack->top;
  stack->top = new_node;
}

// Function to pop an item from the stack
char pop(struct Stack *stack)
{
  if (isEmpty(stack))
  {
    printf("Stack underflow!\n");
    exit(1);
  }

  struct StackNode *top_node = stack->top;
  char data = top_node->data;
  stack->top = top_node->next;
  free(top_node);

  return data;
}

// Function to check if a character is an operator
int isOperator(char ch)
{
  return (ch == '+' || ch == '-' || ch == '*' || ch == '/');
}

// Function to return the precedence of an operator
int precedence(char ch)
{
  switch (ch)
  {
  case '+':
  case '-':
    return 1;
  case '*':
  case '/':
    return 2;
  default:
    return 0;
  }
}

void printStack(struct Stack *stack)
{
  struct StackNode *current_node = stack->top;
  while (current_node != NULL)
  {
    printf("%c ", current_node->data);
    current_node = current_node->next;
  }
  printf("\n");
}

// Function to convert infix expression to postfix expression
void infixToPostfix(char infix[], char postfix[])
{
  struct Stack stack;
  initialize(&stack);

  int i, j = 0;

  for (i = 0; infix[i]; i++)
  {
    char token = infix[i];

    if (isalnum(token))
    {
      postfix[j++] = token;
    }
    else if (token == '(')
    {
      push(&stack, token);
    }
    else if (token == ')')
    {
      while (!isEmpty(&stack) && stack.top->data != '(')
      {
        postfix[j++] = pop(&stack);
      }
      if (!isEmpty(&stack) && stack.top->data == '(')
      {
        pop(&stack);
      }
      else
      {
        printf("Mismatched parentheses!\n");
        exit(1);
      }
    }
    else if (isOperator(token))
    {
      while (!isEmpty(&stack) && precedence(token) <= precedence(stack.top->data))
      {
        postfix[j++] = pop(&stack);
      }
      push(&stack, token);
    }
  }

  while (!isEmpty(&stack))
  {
    if (stack.top->data == '(' || stack.top->data == ')')
    {
      printf("Mismatched parentheses!\n");
      exit(1);
    }
    postfix[j++] = pop(&stack);
  }

  postfix[j] = '\0';
}

int main()
{
  char infix[MAX_SIZE], postfix[MAX_SIZE];

  printf("Enter an infix expression: ");
  fgets(infix, MAX_SIZE, stdin);
  infixToPostfix(infix, postfix);

  printf("Postfix expression: %s\n", postfix);

  return 0;
}

/*
src/stack> gcc ./infixtoPostfix.c
src/stack> a.out

Enter an infix expression: A*(B+C)-D
Postfix expression: ABC+*D-

Enter an infix expression: (A+B)*C-D/E
Postfix expression: AB+C*DE/-
*/
