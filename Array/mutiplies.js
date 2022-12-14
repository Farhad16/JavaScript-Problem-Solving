function findMultiples(integer, limit) {
  let result = [];
  for (let i = 1; i * integer <= limit; i++) {
    if (integer <= limit) {
      result.push(integer * i);
    } else return 0;
  }
  return result;
}

console.log(findMultiples(11, 54));
