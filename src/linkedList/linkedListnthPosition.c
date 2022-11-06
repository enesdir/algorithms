// Linked List: Inserting a node at nth position
/*
  Insert Node at a given position in a linked list
  head can be NULL
  First element in the linked list is at position 0
  */
#include <stdlib.h>
#include <stdio.h>

// definition of Node
typedef struct Node
{
  int data;
  struct Node *next; // store the address of the next node
  // in c++ Node* next
} Node;

void Insert(Node **head, int data, int n)
{
  Node *newNode = (Node *)malloc(sizeof(Node));
  newNode->data = data;
  newNode->next = NULL;
  if (n == 1) // empty list
  {
    newNode->next = *head;
    *head = newNode;
    return;
  }
  Node *previousNode = *head;
  int i;
  for (i = 0; i < n - 2; i++) // to traverse previousNode through the nodes
  {
    previousNode = previousNode->next; // to point previousNode to (n-1)th node after loop
  }
  newNode->next = previousNode->next; // point new (nth) node to next node
  previousNode->next = newNode;       // to point the previous(n-1)th node to new node
  if (previousNode->next == NULL)
  {
    printf("Out of bounds"); // checking for outof bounds
    return;
  }
}

// Print all elements in the list
void Print(Node *head)
{
  while (head != NULL)
  {
    printf("\t%d-> ", head->data);
    head = head->next;
  }
  printf("\n");
}

int main()
{
  struct Node *head = NULL; // empty list
  Insert(&head, 2, 1);      // List: 2
  Insert(&head, 3, 2);      // List: 2,3
  Insert(&head, 4, 1);      // List: 4,2,3
  Insert(&head, 5, 2);      // List: 4,5,2,3
  Print(head);
}
