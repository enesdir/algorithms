/* Doubly Linked List */
#include <stdio.h>
#include <stdlib.h>

typedef struct Node
{
  int data;
  struct Node *next;
  struct Node *prev;
} Node;

// Creates a new Node and returns pointer to it.
struct Node *GetNewNode(int x)
{
  // Creating memory for newNode
  struct Node *newNode = (struct Node *)malloc(sizeof(struct Node));
  newNode->data = x;
  newNode->prev = NULL;
  newNode->next = NULL;
  return newNode;
}

// Inserts a Node at head of doubly linked list
void InsertAtHead(struct Node **head, int x)
{
  struct Node *newNode = GetNewNode(x);
  if (*head == NULL)
  {
    *head = newNode;
    return;
  }
  // assigning newNode's next as the current head
  (*head)->prev = newNode;
  newNode->next = *head;
  // change head to this newNode
  *head = newNode;
}

// Inserts a Node at tail of Doubly linked list
void InsertAtTail(struct Node **head, int x)
{
  struct Node *newNode = GetNewNode(x);
  // need this if there is no node present in in linked list at all
  if (*head == NULL)
  {
    *head = newNode;
    return;
  }
  struct Node *temp = *head;

  while (temp->next != NULL)
  {
    temp = temp->next;
  }
  // assign last node's next to this new Node
  temp->next = newNode;
  // assign this new Node's previous to last node(temp)
  newNode->prev = temp;
}

int calcSize(struct Node *node)
{
  int size = 0;

  while (node != NULL)
  {
    node = node->next;
    size++;
  }
  return size;
}

// Insertion After a certain Position
void insertPosition(struct Node **head, int pos, int x)
{
  int size = calcSize(*head);

  // If pos is 0 then should use insertStart method
  // If pos is less than 0 then can't enter at all
  // If pos is greater than size then bufferbound issue
  if (pos < 1 || size < pos)
  {
    printf("Can't insert, %d is not a valid position\n", pos);
  }
  else
  {
    struct Node *newNode = GetNewNode(x);
    struct Node *temp = *head, *next;
    int i;
    for (i = 0; i < pos - 1; i++)
    {
      temp = temp->next;
    }
    next = temp->next;
    newNode->next = temp->next;
    newNode->prev = temp;
    temp->next = newNode;
    next->prev = newNode;
  }
}

// required for deleteNthNode
int getLength(struct Node *node)
{
  int len = 0;

  while (node != NULL)
  {
    node = node->next;
    len++;
  }

  return len;
}
// Deletion at beginning
void deleteFront(struct Node **head)
{
  struct Node *tempNode = *head;

  // if DLL is empty
  if (*head == NULL)
  {
    printf("Linked List Empty, nothing to delete\n");
    return;
  }

  // if Linked List has only 1 node
  if (tempNode->next == NULL)
  {
    printf("%d deleted\n", tempNode->data);
    *head = NULL;
    return;
  }

  // move head to next node
  *head = (*head)->next;
  // assign head node's previous to NULL
  (*head)->prev = NULL;

  printf("%d deleted\n", tempNode->data);
  free(tempNode);
}

// Deletion at last
void deleteEnd(struct Node **head)
{
  struct Node *tempNode = *head;

  // if DLL is empty
  if (*head == NULL)
  {
    printf("Linked List Empty, nothing to delete\n");
    return;
  }

  // if Linked List has only 1 node
  if (tempNode->next == NULL)
  {
    printf("%d deleted\n", tempNode->data);
    *head = NULL;
    return;
  }

  // else traverse to the last node
  while (tempNode->next != NULL)
    tempNode = tempNode->next;

  struct Node *secondLast = tempNode->prev;

  // Curr assign 2nd last node's next to Null
  secondLast->next = NULL;

  printf("%d deleted\n", tempNode->data);
  free(tempNode);
}
// Delete at nth position
void deleteNthNode(struct Node **head, int n)
{
  // if the head node itself needs to be deleted
  int len = getLength(*head);

  // not valid
  if (n < 1 || n > len)
  {
    printf("Enter valid position\n");
    return;
  }

  // delete the first node
  if (n == 1)
  {
    deleteFront(head);
    return;
  }

  if (n == len)
  {
    deleteEnd(head);
    return;
  }

  struct Node *tempNode = *head;

  // traverse to the nth node
  while (--n)
  {
    tempNode = tempNode->next;
  }

  struct Node *previousNode = tempNode->prev; // (n-1)th node
  struct Node *nextNode = tempNode->next;     // (n+1)th node

  // assigning (n-1)th node's next pointer to (n+1)th node
  previousNode->next = tempNode->next;

  // assigning (n+1)th node's previous pointer to (n-1)th node
  nextNode->prev = tempNode->prev;

  // deleting nth node
  printf("%d deleted \n", tempNode->data);
  free(tempNode);
}

// Prints all the elements in linked list in forward traversal order
void Print(struct Node *head)
{

  printf("Forward: ");
  while (head != NULL)
  {
    printf("%d ", head->data);
    head = head->next;
  }
  printf("\n");
}
void ReversePrint(struct Node *head)
{
  if (head == NULL)
    return; // empty list, exit
  // going to last node
  while (head->next != NULL)
  {
    head = head->next;
  }
  // Traversing backward using prev pointer
  printf("Reverse: ");
  while (head != NULL)
  {
    printf("%d ", head->data);
    head = head->prev;
  }
  printf("\n");
}
int main()
{
  struct Node *head = NULL; // pointer to head node
  InsertAtTail(&head, 3);
  InsertAtTail(&head, 4);
  InsertAtTail(&head, 5);
  InsertAtHead(&head, 9);
  insertPosition(&head, 2, 100);
  insertPosition(&head, 4, 101);
  Print(head);
  ReversePrint(head);
  deleteFront(&head);
  Print(head);
  deleteEnd(&head);
  Print(head);

  // delete 3rd node
  deleteNthNode(&head, 3);
  Print(head);
}
