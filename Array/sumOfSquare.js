function squareSum(numbers){
 return numbers.reduce((acc, curr)=>   acc + curr ** 2, 0)
}

const arr = [1, -2, 2, 3]
console.log(squareSum(arr));