function arrayPlusArray(arr1, arr2) {
  return  arr1.concat(arr2).reduce((acc, curr) => acc + curr, 0)
}

const arr1 = [55, 66, 77]
const arr2 = [ 77, 88, 66, 65, 99, 78]
console.log(arrayPlusArray(arr1, arr2));
