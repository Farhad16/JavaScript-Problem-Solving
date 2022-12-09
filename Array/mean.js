function getAverage(marks){
  return Math.floor(marks.reduce((acc, curr) => (acc + curr), 0)/marks.length);
}

const num = [ 77, 88, 66, 65, 99, 78]
console.log(getAverage(num));