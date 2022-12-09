function positiveSum(arr) {
  let sum = 0;
  let i = 0;
  while (i < arr.length) {
    if(arr[i] > 0 ){
      sum += arr[i];
    }
    i++
  }
  return sum;
}

// function positiveSum(arr) {
//   return arr.reduce((acc, cur) => cur > 0 ? acc + cur : acc, 0)
// }

const arr = [1,-4,7,12]
console.log(positiveSum(arr));
