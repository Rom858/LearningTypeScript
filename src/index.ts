// let greetUnnamed = function(name: string,age:number,): string {
// return `Hi! Age: ${age}`;

// };
// console.log(greetUnnamed('rom',18))
// ======================================
// Defualt parameter have 2 method to use it
// 1--hard to understant
function add(foo: number, bar: number, foobar?: number): number {
  return foo + bar + (foobar !== undefined ? foobar : 5);
}
// 2--code is readable
function add(foo: number, bar: number, foobar: number = 0): number {
  return foo + bar + foobar;
}
console.log(add(1, 2, 8));
add(2, 2); // Error, expected 3 arguments, but got 2.
add(2, 2, 2); // OK, returns 6d

// parameter foobar?: number mean have or dont have its ok for this parameter
//============================
