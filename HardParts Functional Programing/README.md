## Function scope

```
Scope determines the accessibility of these veriables.
- Local function scope
- Global function scope

## Local Scope
- Variables declared within a js function.become a local to the function .
- cant accessible from outside the function.

## Automatically global
- if u assign a value to a variable that has not been declared .it will automatically become a GLOBAL variable.

```
myFunct();
function myFunc(){
    name = 'sandip ghane';
}

// name become a global variable automatically and can accessebile outside the myFunct function.

```
Local scope can be devided into function scope and block scope.
The concept of block scope introduced in ECMA script 6 (ES6) together with the new ways to declare variables -- const and let
```

## Functional scope
- whenever u declared a variable in a function, the variable is visible only within the function. u cant access it outside the function. var is the keyword to define variable for a function scope accessebility.

## Block scope
- A block scope is the area within if-else , switch conditions or for and while loops. whenever u see {} ,it is a block. IN ES6 -- const and let keywords is allow to delopers to declare varaibles in the block scope, which means those varaibles exist only within the corresponding block. 


## Lexical Scoping
- JS has lexical scoping with function scope.In other words , even through js look likeit should have block scope becuse it uses {} braces. new scope is created when u create a new function.