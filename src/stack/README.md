# Stack

A list with the restriction that insertion and deletion can be performed only from one end, called the top

Implementation of Stack:

- using array
- using linked list

## Advantages

### Advantages of array implementation

- Easy to implement.
- Memory is saved as pointers are not involved.

### Advantages of Linked List implementation

- The linked list implementation of a stack can grow and shrink according to the needs at runtime.
- It is used in many virtual machines like JVM.
- Stacks are more secure and reliable as they do not get corrupted easily.
- Stack cleans up the objects automatically.

## Disadvantages

### Disadvantages of array implementation

- It is not dynamic.
- It doesn’t grow and shrink depending on needs at runtime.

### Disadvantages of Linked List implementation

- Requires extra memory due to the involvement of pointers.
- Random accessing is not possible in stack.
- The total size of the stack must be defined before.
- If the stack falls outside the memory it can lead to abnormal termination.

## Operations

- push() to insert an element into the stack
- pop() to remove an element from the stack
- top() Returns the top element of the stack.
- isEmpty() returns true is stack is empty else false
- size() returns the size of stack

### array implementation

Push(x) Pop() Top() isEmpty() => constant time or Θ(1)

### linked list implementation

insert/delete

- at end of list(tail)  => Θ(n) // not an option we will not able to do push/pop actions in constant time
- at beginning(head)    => Θ(1)

## Applications

- Function calls/recursion
- Undo in an editor
- Balanced parentheses
