/*Queue - Linked List implementation*/
#include <stdio.h>
#include <stdlib.h>

typedef struct Node
{
  int data;
  struct Node *next;
} Node;

// to enqueue an integer
void enqueue(Node **head, int data)
{
  // Creating a memory for newNode
  Node *newNode = malloc(sizeof(Node));
  if (!newNode)
    return;

  newNode->data = data;
  newNode->next = *head;

  *head = newNode;
}
// to dequeue an integer
int dequeue(Node **head)
{
  Node *current, *prev = NULL;
  int retval = -1;

  if (*head == NULL)
    return -1;

  current = *head;
  while (current->next != NULL)
  {
    prev = current;
    current = current->next;
  }

  retval = current->data;
  free(current);

  if (prev)
    prev->next = NULL;
  else
    *head = NULL;

  return retval;
}

void print_list(Node *head)
{
  Node *current = head;

  while (current != NULL)
  {
    printf("%d\n", current->data);
    current = current->next;
  }
}

int main()
{
  Node *head = NULL;
  int ret;

  enqueue(&head, 11);
  enqueue(&head, 22);
  enqueue(&head, 33);
  enqueue(&head, 44);

  print_list(head);

  while ((ret = dequeue(&head)) > 0)
  {
    printf("dequeued %d\n", ret);
  }
  printf("done. head=%p\n", head);

  return 0;
}
/*
src/queue> gcc ./linkedListQueue.c
src/queue> a.out

4
33
22
11
dequeued 11
dequeued 22
dequeued 33
dequeued 44
done. head=0x0
*/
