import Scope from '../src/L';

// extraenous functions to play with
const tail = ([, ...ary]) => ary;
const add = (a, b) => a + b;
const zipWith = (op, ary, bry) => ary.map((a, i) => op(a, bry[i]));



// you must first define a lazy scope
const L = Scope();

// array inf recursive generation
L.a = [ 0, 1, i => a[i - 1] + a[i - 2] ];
a[100] // = 100th value in fib sequence

// lazy obj keys, the "lazy" vars must be functions, no way around that in js
L.b = { a: 4, b: () => 5 + 6, c: () => 'H' + 'ello' };
b.a // 4
b.b // 11
b.c // 'Hello'

