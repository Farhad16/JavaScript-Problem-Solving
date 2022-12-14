function isVow(a) {
  const vowel = {
    97: "a",
    101: "e",
    105: "i",
    111: "o",
    117: "u",
  };
  return a.map((number) => (vowel[number] ? vowel[number] : number));
}

// complex
const isVow1 = (a) => {
  return a.map((x) => ("aeiou".includes((y = String.fromCharCode(x))) ? y : x));
};

const arr = [
  118, 117, 120, 121, 117, 98, 122, 97, 120, 106, 104, 116, 113, 114, 113, 120,
  106,
];
console.log(isVow(arr));
