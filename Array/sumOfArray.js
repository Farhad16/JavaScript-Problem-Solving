function sum (numbers) {
 return numbers.length ? numbers.reduce((acc, curr)=> acc + curr, 0): numbers ? 0 : []
};

const n = [-2.398]
console.log(sum(0));