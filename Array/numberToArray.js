function monkeyCount(n) {
  return [...Array(n)].map((_, i) => ++i)
}

//return [...Array(n+1).keys()].slice(1);

console.log( monkeyCount(10));