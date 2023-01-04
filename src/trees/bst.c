// Binary Search Tree - Implemenation in C
// Simple program to create a BST of integers and search an element in it
#include <stdio.h>
#include <stdlib.h>

// Definition of Node for Binary search tree
typedef struct BstNode
{
  int data;
  struct BstNode *left;
  struct BstNode *right;
} BstNode;

// Function to create a new Node in Heap
BstNode *BstNode_create(int data)
{
  BstNode *rPtr = (BstNode *)malloc(sizeof(BstNode));
  rPtr->data = data;
  rPtr->left = NULL;
  rPtr->right = NULL;
  return rPtr;
}
// To insert data in BST, returns address of root node
void BstNode_insert(BstNode **node, int data)
{
  if (*node == NULL) // empty tree
  {
    *node = BstNode_create(data);
  }
  else if (data > (*node)->data)
  {
    BstNode_insert(&(*node)->right, data);
  }
  else
  {
    BstNode_insert(&(*node)->left, data);
  }
}

// to search an element in BST, returns true if elements
BstNode *BstNode_search(BstNode *node, int data)
{
  if (node == NULL)
  {
    return NULL;
  }
  else if (data == node->data)
  {
    return node;
  }
  else if (data > node->data)
  {
    return BstNode_search(node->right, data);
  }
  else
  {
    return BstNode_search(node->left, data);
  }
}

void BstNode_destroy(BstNode **node)
{
  if ((*node)->left != NULL)
  {
    BstNode_destroy(&(*node)->left);
  }

  if ((*node)->right != NULL)
  {
    BstNode_destroy(&(*node)->right);
  }

  free(*node);
  *node = NULL;
}

int main()
{
  BstNode *root = BstNode_create(10);
  BstNode_insert(&root, 4);
  BstNode_insert(&root, 12);
  BstNode_insert(&root, 6);
  BstNode_insert(&root, 16);
  BstNode_insert(&root, 5);
  BstNode_insert(&root, 32);

  const int MAX_SEARCH = 5;
  int numbers[MAX_SEARCH];
  numbers[0] = 4;
  numbers[1] = 9;
  numbers[2] = 13;
  numbers[3] = 7;
  numbers[4] = 32;

  BstNode *found_node;

  for (int i = 0; i < MAX_SEARCH; ++i)
  {
    printf("searching [%d] ", numbers[i]);

    found_node = BstNode_search(root, numbers[i]);
    printf("%s.\n", found_node != NULL ? "found" : "not found");
  }

  BstNode_destroy(&root);

  return EXIT_SUCCESS;
}
/*
src/trees> gcc ./bst.c
src/trees> a.out

searching [4] found.
searching [9] not found.
searching [13] not found.
searching [7] not found.
searching [32] found.
*/
