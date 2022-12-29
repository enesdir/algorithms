# Queue

A list or collection with the restriction that insertion can be performed at one end(rear) and deletion can be performed at other end(front).

Types of Queues:

- Simple Queue
- Circular Queue
- Priority Queue
- Dequeue

Implementation of Queue:

- using array
- using linked list

## Advantages

### Advantages of array implementation

- Easy to implement.
- A large amount of data can be managed efficiently with ease.
- Operations such as insertion and deletion can be performed with ease as it follows the first in first out rule.

### Advantages of Linked List implementation

- The linked list implementation of a queue can grow and shrink according to the needs at runtime.

## Disadvantages

### Disadvantages of array implementation

- Static Data Structure, fixed size.
- If the queue has a large number of enqueue and dequeue operations, at some point (in case of linear increment of front and rear indexes) we may not be able to insert elements in the queue even if the queue is empty (this problem is avoided by using circular queue).
- Maximum size of a queue must be defined prior.

### Disadvantages of Linked List implementation

- Requires extra memory due to the involvement of pointers.

## Operations

- enqueue() Inserts an element at the end of the queue i.e. at the rear end.
- dequeue() This operation removes and returns an element that is at the front end of the queue.
- front() This operation returns the element at the front end without removing it.
- rear() This operation returns the element at the rear end without removing it.
- isEmpty() returns true is queue is empty else false
- isFull() returns true is queue is full else false
- size() This operation returns the size of the queue i.e. the total number of elements it contains.

### array implementation

#### Time Complexity

Enqueue(insertion)  Θ(1)
Deque(deletion)    Θ(1)
Front(Get front)    Θ(1)
Rear(Get Rear) Θ(1)
IsFull(Check queue is full or not) Θ(1)
IsEmpty(Check queue is empty or not) Θ(1)

#### Auxilary Space

Θ(N) where N is the size of the array for storing elements.

### Linked List implementation

#### Time Complexity

Θ(1) The time complexity of both operations enqueue() and dequeue() is O(1) as it only changes a few pointers in both operations

#### Auxilary Space

Θ(1) The auxiliary Space of both operations enqueue() and dequeue() is O(1) as constant extra space is required

### linked list implementation

## Applications

Queue is most often used in a scenario where there is a shared resource that's supposed to serve some request, but the resource can handle only one request at a time.

- Printer queue
- Process scheduling
- Simulating wait
