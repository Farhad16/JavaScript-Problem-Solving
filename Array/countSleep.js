// function countSheeps(arrayOfSheep) {
//   let count = 0;
//   for(let i = 0; i < arrayOfSheep.length; i++) {
//     if(arrayOfSheep[i]){
//       count += 1
//     }
//   }
//  return count
// }

function countSheeps(arrayOfSheep) {
  return arrayOfSheep.filter(Boolean).length
}

const sleeps = [true,  false,  true,  false,
  true,  true,  true,  true ,
  false,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]

console.log(countSheeps(sleeps));