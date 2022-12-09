function smash (words) {
  return words.map(word => word.trim()).join(' ');
};

const arr = ['hello', 'world', 'this', 'is', 'great   ']
console.log(smash(arr));