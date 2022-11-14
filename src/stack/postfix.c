/*
  Evaluation Of postfix Expression in C
  Input Postfix expression must be in a desired format.
  Operands must be integers and there should be space in between two operands.
  Only '+'  ,  '-'  , '*' and '/'  operators are expected.
*/
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct Node
{
  int data;
  struct Node *next;
};

// Pointer to last Node
struct Node *top = NULL;

// Add new Node in Stack
void Push(int x)
{
  struct Node *temp = (struct Node *)malloc(sizeof(struct Node *));
  temp->data = x;
  temp->next = top;
  top = temp;
}

// Delete last Node in Stack
void Pop()
{
  struct Node *temp;
  if (top == NULL)
    return;
  temp = top;
  top = top->next;
}

// Function to verify whether a character is numeric digit.
int IsNumericDigit(char C)
{
  if (C >= '0' && C <= '9')
    return (1);
  return (0);
}

// Function to verify whether a character is operator symbol or not.
int IsOperator(char C)
{
  if (C == '+' || C == '-' || C == '*' || C == '/')
    return (1);

  return (0);
}

// Function to perform an operation and return output.
int PerformOperation(char operation, int operand1, int operand2)
{
  if (operation == '+')
    return operand1 + operand2;
  else if (operation == '-')
    return operand1 - operand2;
  else if (operation == '*')
    return operand1 * operand2;
  else if (operation == '/')
    return operand1 / operand2;

  else
    printf("Unexpected Error \n");
  return -1;
}

// Function to evaluate Postfix expression and return output
int EvaluatePostfix(char *expression)
{
  int i, operand1, operand2, result, len;
  len = strlen(expression);
  struct Node *temp, *temp1, *temp2;

  for (i = 0; i < len; i++)
  {
    // Scanning each character from left.
    // If character is a delimitter, move on.
    if (expression[i] == ' ' || expression[i] == ',')
      continue;

    // If character is operator, pop two elements from stack, perform operation and push the result back.
    else if (IsOperator(expression[i]))
    {
      // Pop two operands.
      temp1 = top;
      operand2 = temp1->data;
      Pop();

      temp2 = top;
      operand1 = temp2->data;
      Pop();

      // Perform operation
      result = PerformOperation(expression[i], operand1, operand2);
      // Push back result of operation on stack.
      Push(result);
    }
    else if (IsNumericDigit(expression[i]))
    {
      // Extract the numeric operand from the string
      // Keep incrementing i as long as you are getting a numeric digit.
      int operand = 0;
      while (i < len && IsNumericDigit(expression[i]))
      {
        // For a number with more than one digits, as we are scanning from left to right.
        // Everytime , we get a digit towards right, we can multiply current total in operand by 10
        // and add the new digit.
        operand = (operand * 10) + (expression[i] - '0');
        i++;
      }
      // Finally, you will come out of while loop with i set to a non-numeric character or end of string
      // decrement i because it will be incremented in increment section of loop once again.
      // We do not want to skip the non-numeric character by incrementing i twice.
      i--;

      // Push operand on stack.
      Push(operand);
    }
  }
  temp = top;
  // If expression is in correct format, Stack will finally have one element. This will be the output.
  return (temp->data);
}
// Function to evaluate Postfix expression and return output
// int EvaluatePrefix(char *expression)
// {
//   int i, operand1, operand2, result, len;
//   len = strlen(expression);
//   i = len;
//   struct Node *temp, *temp1, *temp2;
//   while (i--)
//   {
//     // Scanning each character from left.
//     // If character is a delimitter, move on.
//     if (expression[i] == ' ' || expression[i] == ',')
//       continue;
//     else if (IsNumericDigit(expression[i]))
//     {
//       // Extract the numeric operand from the string
//       // Keep incrementing i as long as you are getting a numeric digit.
//       int operand = 0;
//       while (i < len && IsNumericDigit(expression[i]))
//       {
//         // For a number with more than one digits, as we are scanning from left to right.
//         // Everytime , we get a digit towards right, we can multiply current total in operand by 10
//         // and add the new digit.
//         operand = (operand * 10) + (expression[i] - '0');
//         i++;
//       }
//       // Finally, you will come out of while loop with i set to a non-numeric character or end of string
//       // decrement i because it will be incremented in increment section of loop once again.
//       // We do not want to skip the non-numeric character by incrementing i twice.
//       i--;

//       // Push operand on stack.
//       Push(operand);
//     } // If character is operator, pop two elements from stack, perform operation and push the result back.
//     else if (IsOperator(expression[i]))
//     {
//       // Pop two operands.
//       temp1 = top;
//       operand2 = temp1->data;
//       Pop();

//       temp2 = top;
//       operand1 = temp2->data;
//       Pop();

//       // Perform operation
//       result = PerformOperation(expression[i], operand2, operand1);
//       // Push back result of operation on stack.
//       Push(result);
//     }
//   }
//   temp = top;
//   // If expression is in correct format, Stack will finally have one element. This will be the output.
//   return (temp->data);
// }
int main(void)
{
  int result, result2;
  char expression[] = "2,3 * 5 4 * + 9-";

  result = EvaluatePostfix(expression);
  printf("Postfix Expression:\n%s\n", expression);
  printf("Postfix Result = %d\n", result);
  printf("\n");
  // char expression2[] = "-+* 2 3 * 5 4 9";
  // result2 = EvaluatePrefix(expression2);
  // printf("Prefix Expression:\n%s\n", expression2);
  // printf("Prefix Result = %d\n", result2);
  return 0;
}
/*
src/stack> gcc ./postfix.c
src/stack> a.out

Postfix Expression:
2,3 * 5 4 * + 9-
Postfix Result = 17

// Prefix Expression:
// -+* 2 3 * 5 4 9
// Prefix Result = 17
*/
