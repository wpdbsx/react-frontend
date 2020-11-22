// const name = "Python";
// name = "aa";
// console.log(name);

function base_10(fn) {
  return (x, y) => fn(x, y) + 10;
  //   function wrap(x, y) {
  //     return fn(x, y) + 10;
  //   }
}
function mysum(x, y) {
  return x + y;
}
const return_fn = base_10(mysum);
console.log(return_fn(1, 2));
