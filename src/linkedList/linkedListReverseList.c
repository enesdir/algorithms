// Linked List: Reverse a linked list (iterative way & recursion)
#include <stdlib.h>
#include <stdio.h>

typedef struct Node
{
  int data;
  struct Node *next;
} Node;

// Reverse a Linked list iterative solution
struct Node *ReverseIterative(struct Node *head)
{
  struct Node *current, *prev, *next;
  current = head;
  prev = NULL;
  while (current != NULL)
  {
    next = current->next;
    current->next = prev;
    prev = current;
    current = next;
  }
  head = prev;
  return head;
}
struct Node *ReverseRecursion(struct Node *ptr)
{
  struct Node *head;
  if (ptr->next == NULL)
  {
    head = ptr; // update the head_ptr
    return head;
  }
  head = ReverseRecursion(ptr->next);
  struct Node *temp = ptr->next;
  temp->next = ptr;
  ptr->next = NULL;
  return head;
}
// insert an integer at the end of the list
Node *Insert(Node *head, int data)
{
  Node *temp = malloc(sizeof(struct Node));
  temp->data = data;
  temp->next = NULL;
  if (head == NULL)
    head = temp;
  else
  {
    Node *temp1 = head;
    while (temp1->next != NULL)
      temp1 = temp1->next;
    temp1->next = temp;
  }
  return head;
}

// Print all elements in the list
void Print(Node *head)
{
  printf("List is: ");
  while (head != NULL)
  {
    printf("\t%d->", head->data);
    head = head->next;
  }
  printf("\n");
}

void RecursivePrint(Node *ptrHead)
{ // Prints the output
  if (ptrHead == NULL)
    return; // Exit condition
  printf("\t%d->", ptrHead->data);
  RecursivePrint(ptrHead->next); // Recursive call
}
void RecursiveReversePrint(Node *ptrHead)
{ // Reverse the output
  if (ptrHead == NULL)
    return;                             // Exit condition
  RecursiveReversePrint(ptrHead->next); // Recursive call
  printf("\t%d->", ptrHead->data);      // First print the value in the Node
                                        // in c++: cout << " " << ptrHead->data; //First print the value in the Node
}
int main()
{
  struct Node *head = NULL; // local variable
  head = Insert(head, 2);
  head = Insert(head, 4);
  head = Insert(head, 6);
  head = Insert(head, 8);
  Print(head);
  head = ReverseIterative(head);
  Print(head);
  head = ReverseRecursion(head);
  printf("\nRecursive List: ");
  RecursivePrint(head);
  printf("\nRecursiveReversePrint: ");
  RecursiveReversePrint(head);
}
