var isSquare = function (n) {
  return Math.sqrt(n) === Math.floor(Math.sqrt(n)) ? true : false;
};
console.log(isSquare(-1));
console.log(isSquare(0));
console.log(isSquare(3));
console.log(isSquare(4));
console.log(isSquare(25));
console.log(isSquare(26));
console.log(isSquare(1600));
