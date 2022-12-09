function countPositivesSumNegatives(input) {
  if (!input || !input.length) {
    return [];
  }
  let positive = 0;
  let negative = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      positive += 1;
    } else {
      negative += input[i];
    }
  }
  return [positive, negative];
}

// function countPositivesSumNegatives(input) {
//   return input && input.length ? input.reduce((acc, curr) => (curr > 0 ? acc[0] = acc[0] + 1 : acc[1] = acc[1] + curr, acc), [0, 0] ) : []
// }

const arr = [1, 2, 4, 5, null, -12, -22];

console.log(countPositivesSumNegatives([]));
