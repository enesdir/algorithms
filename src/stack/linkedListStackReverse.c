#include <stdio.h>
#include <stdlib.h>

typedef struct node
{
  char word;
  struct node *next;
} node;

void push(struct node **top, char letter)
{
  struct node *temp = (struct node *)malloc(sizeof(node));
  temp->word = letter;

  if (top == NULL)
  {
    *top = temp;
    (*top)->next = NULL;
    return;
  }

  temp->next = *top;
  *top = temp;
}

void reverse_string(struct node **top, char *word)
{
  int i = 0;

  for (i = 0; (word[i]) != '\0'; i++)
  {
    printf("%c", word[i]);
    push(top, word[i]);
  }
  printf("\n");
}

void print(struct node *top)
{
  node *iter = top;
  int i = 0;

  while (iter != NULL)
  {
    printf("%c", iter->word);
    iter = iter->next;
  }
  printf("\n");
}

int main()
{
  struct node *top = NULL;
  char *word = "1racecar2";

  reverse_string(&top, word);
  print(top);
}
/*
src/stack> gcc ./linkedListStackReverse.c
src/stack> a.out

1racecar2
2racecar1
*/
