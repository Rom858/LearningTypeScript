// let greetUnnamed = function(name: string,age:number,): string {
// return `Hi! Age: ${age}`;

// };
// console.log(greetUnnamed('rom',18))
function add(foo: number, bar: number, foobar: number): number {
  return foo + bar + foobar;
}
console.log(add(1, 2, 3));
add(2, 2); // Error, expected 3 arguments, but got 2.
add(2, 2, 2); // OK, returns 6
