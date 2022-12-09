function grow(x){
  return x.reduce((acc, curr) => acc * curr, 1);
}

const a = [2,3,4,5,6,7]
console.log(grow(a));