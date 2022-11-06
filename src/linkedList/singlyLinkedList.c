// Linked List: Delete, Reverse, Add Begining, Add end, Add nth
#include <stdio.h>
#include <stdlib.h>

// definition of Node
typedef struct Node
{
  int data;
  struct Node *next;
} Node;

// insert an integer at the begin of the list
void InsertBegin(Node **head, int x)
{
  Node *temp = (Node *)malloc(sizeof(Node));
  temp->data = x;
  temp->next = *head; // one case: initially needs to be NULL other case: head to particular Node
  *head = temp;       // the head is again updated here
};

// insert an integer at the end of the list
void InsertEnd(Node **head, int x)
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

// Linked List: Inserting a node at nth position
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

// Linked List: Reverse a linked list (iterative)
void ReverseIterative(Node **head)
{
  Node *current, *prev, *next;
  current = *head;
  prev = NULL;
  while (current != NULL)
  {
    next = current->next;
    current->next = prev;
    prev = current;
    current = next;
  }
  *head = prev;
}

// Linked List: Reverse a linked list (recursion)
void ReverseRecursion(Node **headRef, Node *prev)
{
  if (prev->next == NULL)
  {
    *headRef = prev;
    return;
  }
  ReverseRecursion(headRef, prev->next);
  Node *q = prev->next;
  q->next = prev;
  prev->next = NULL;
}

// Print all elements in the list
void Print(Node *head)
{
  printf("List is:");
  while (head != NULL)
  {
    printf("\t%d->", head->data);
    head = head->next;
  }
  printf("\n");
}

void RecursivePrint(Node *head)
{ // Prints the output
  if (head == NULL)
    return; // Exit condition
  printf("\t%d->", head->data);
  RecursivePrint(head->next); // Recursive call
}
void RecursiveReversePrint(Node *head)
{ // Reverse the output
  if (head == NULL)
    return;                          // Exit condition
  RecursiveReversePrint(head->next); // Recursive call
  printf("\t%d->", head->data);      // First print the value in the Node
}

int main()
{
  Node *head = NULL; // empty list

  int n = 0;
  int i, x;
  printf("How many nodes?: ");
  scanf("%d", &n);
  for (i = 0; i < n; i++)
  {
    printf("\nEnter the data for node number %d: ", i + 1);
    scanf("%d", &x);
    InsertBegin(&head, x);
    Print(head);
  }
  Insert(&head, 2, 1);
  InsertEnd(&head, 3);
  Print(head);
  printf("Which one would you remove on the list: ");
  scanf("%d", &x);
  Delete(&head, x);
  Print(head);
  ReverseIterative(&head);
  printf("\nReverse List(iterativeWay): ");
  RecursivePrint(head);
  ReverseRecursion(&head, head);
  printf("\nReverse List(RecursiveWay): ");
  RecursivePrint(head);
  printf("\nRecursiveReversePrint: ");
  RecursiveReversePrint(head);
  printf("\n");
  Print(head);
}
