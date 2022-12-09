function countBy(x, n) {
  let z = [];
  for (let i = 1; i <= n; i++) {
    z.push(i * x);
  }
  return z;
}

function countBy1(x, n) {
  return [...Array(n)].map((_, idx) => (idx + 1) * x);
}

console.log(countBy1(3, 5));