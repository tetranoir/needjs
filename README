# needjs
is a small library that implements lazy evaluation (call by *need* evaluation) as nonintrusively as possible with native JavaScript.

Works for arrays and objects.

### Usage
Define a scope by calling the default export
```
import Scope from L;

Const L = Scope();
```
Define a lazy array
```
L.fib = [ 0, 1, i => fib[i - 1] + fib[i - 2] ];
fib[10]; // 10th digit of fib sequence
```
The array is generative instead of declarative. Declarative is on the feature list.
Notice how you refer to the array by only its name. In this way `L.` acts like `var` et al.

You can also define a lazy object
```
L.o = { a: () => 1 + 2, b: () => o.a + 3 };
o.a; // 3
o.b; // 6
```
