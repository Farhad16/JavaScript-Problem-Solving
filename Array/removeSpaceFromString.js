// function noSpace(x){
//   let noSpace = ''

//   for(let i = 0; i < x.length; i++){
//     if(x[i] !== ' '){
//       noSpace += x[i]
//     }
//   }

//   return noSpace
// }

function noSpace(x){
  return x.split(' ').join('');
}

const str = '    Ad df d  f   d fdfd fdfd     '
console.log(noSpace(str)); 