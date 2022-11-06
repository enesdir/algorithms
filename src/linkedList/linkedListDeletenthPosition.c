// Linked List: Delete a node at nth position
#include <stdio.h>
#include <stdlib.h>

// definition of Node
typedef struct Node
{
  int data;
  struct Node *next;
} Node;

// insert an integer at the end of the list
void Insert(Node **head, int x)
{
  Node *temp = (Node *)malloc(sizeof(Node));
  temp->data = x;
  if (*head == NULL)
  {
    *head = temp;
  }
  Node *ptr = *head;
  while (ptr->next)
  {
    ptr = ptr->next;
  }
  ptr->next = temp;
  temp->next = NULL;
}

// Delete node at position n
void Delete(Node **head, int n)
{
  struct Node *temp1 = *head;
  if (n == 1)
  {
    *head = temp1->next;
    free(temp1); // free up memory
    // in c++ delete(temp1);
    return;
  }

  int i;
  for (i = 0; i < n - 2; i++)
  {
    temp1 = temp1->next;
  }
  // temp1 points to(n-1)th Node
  struct Node *temp2 = temp1->next; // nth Node
  temp1->next = temp2->next;        // (n+1)th Node
  free(temp2);                      // de allocate
}

// Print all elements in the list
void Print(Node *head)
{
  printf("List is:");
  while (head != NULL)
  {
    printf(" %d", head->data);
    head = head->next;
  }

  printf("\n");
}

int main()
{
  Node *head = NULL; // empty list

  Insert(&head, 4);
  Insert(&head, 2);
  Insert(&head, 3);
  Insert(&head, 5);
  Print(head); // List: 4,2,3,5

  int n;
  printf("Enter a position\n");
  scanf("%d", &n);
  Delete(&head, n);
  Print(head);
}
