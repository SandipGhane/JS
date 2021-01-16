## Introduction to js callstack

```
js engine uses a call stack to manage execution contexts (Global and Functional).
```

- The call stack works based on the LIFO principle. LIFO

- When you execute a script , the js engine creates a global execution context. and push it on the top of the call stack. 

- whenever a function is called ,the js engine creates a new function execution contexts for the function and pushed it on the top of the call stack and starts excution of the function.

- if a function calls another function, the js engine creates a new function execution context for the function that being called and pushed it on the top of the call stack.

- when the current function completes , the js engine pops it off the call stack.

- the script eill stop when the call stacj is empty.

## Stack Overflow

```
The call stack is fixed size depending on the implementation of the host env. either web browser or nodeJS. if the number of the exection contexts exceedes the size of the stack , a stack overflow is occurs.
eg. when you execute recursive call without base condition , it will result in stack overflow error
```