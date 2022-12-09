// function digitize(n) {
//   const digits = n.toString()
//   let result = []
//   for(let i = digits.length - 1; i >= 0; i--) {
//     result.push(parseInt(digits[i]))
//   }
//   return result
// }

function digitize(n) {
  return String(n).split('').map(Number).reverse()
}

const num = 348597
digitize(num)