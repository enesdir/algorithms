// Linked List: Inserting a node at beginning
#include <stdlib.h>
#include <stdio.h>

// definition of Node
typedef struct Node
{
  int data;
  struct Node *next; // store the address of the next node
  // in c++ Node* next
} Node;

// Create a Node, fill in the value 'x' here that is passed as argument
void Insert(Node **head, int x)
{
  Node *temp = (Node *)malloc(sizeof(Node));
  temp->data = x;
  temp->next = *head; // one case: initially needs to be NULL other case: head to particular Node
  *head = temp;       // the head is again updated here
};
void Print(Node *head)
{
  printf("List is: ");
  while (head != NULL)
  {
    printf("\t%d->", head->data);
    head = head->next;
  }
  printf("\n");
};
int main()
{
  Node *head = NULL; // empty list
  int n = 0;
  int i, x;
  printf("How many nodes?\n");
  scanf("%d", &n);
  for (i = 0; i < n; i++)
  {
    printf("\nEnter the data for node number %d: ", i + 1);
    scanf("%d", &x);
    Insert(&head, x);
    Print(head);
  }
  return 0;
};
