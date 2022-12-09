function fakeBin(x) {
  return x
    .split("")
    .map((digit) => (digit >= 5 ? "1" : "0"))
    .join("");
}

const digits = "45385593107843568";
console.log(fakeBin(digits));
