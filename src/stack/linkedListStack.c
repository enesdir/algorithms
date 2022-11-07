// Stack - linked list based implementation
#include <stdio.h>
#include <stdlib.h>

// A structure to represent a stack
typedef struct StackNode
{
  int data;
  struct StackNode *link;
} StackNode;

struct StackNode *newNode(int data)
{
  struct StackNode *stackNode = (struct StackNode *)malloc(sizeof(struct StackNode));
  stackNode->data = data;
  stackNode->link = NULL;
  return stackNode;
}

// Function to add an item to stack.
void push(struct StackNode **top, int x)
{
  struct StackNode *temp = newNode(x);
  temp->link = *top;
  *top = temp;
}

// Function to remove an item to stack
int pop(struct StackNode **top)
{
  struct StackNode *temp = *top;
  *top = (*top)->link;
  int popped = temp->data;
  free(temp);
  return popped;
}

// This function is just to test the implementation of stack.
// This will print all the elements in the stack at any stage.
void print(struct StackNode *top)
{
  struct StackNode *temp = top;
  printf("stack is :");
  while (temp != NULL)
  {
    printf("%d => ", temp->data);
    temp = temp->link;
  }
  printf("\n");
}

void topVal(struct StackNode *top)
{
  struct StackNode *temp = top;
  printf("the top element is : %d \n", temp->data);
}

// Stack is empty when top is equal to NULL
void isEmpty(struct StackNode *top)
{
  // struct node *temp = top;
  if (top == NULL)
    printf("\n true");
  else
    printf("false");
}

int main()
{
  struct StackNode *top = NULL;
  push(&top, 12);
  push(&top, 87);
  // print all elements in stack :
  print(top);
  pop(&top);
  push(&top, 10);
  // print all elements in stack :
  print(top);
  topVal(top);
  isEmpty(top);
}
/*
src/stack> gcc ./linkedListStack.c
src/stack> a.out

stack is :87 => 12 =>
stack is :10 => 12 =>
the top element is : 10
false
*/
