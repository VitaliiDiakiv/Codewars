function persistence(num) {
  let count = 0;
  while (num.toString().length > 1) {
    num = num
      .toString()
      .split("")
      .reduce((cur, el) => cur * el);
    count++;
  }
  return count;
}

console.log(persistence(999));
console.log(persistence(27));
console.log(persistence(39));
console.log(persistence(0));
