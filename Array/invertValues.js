function invert(array) {
  return array.reduce((acc, curr) => {
    if (curr >= 0) {
      acc.push(-Math.abs(curr));
    } else {
      acc.push(Math.abs(curr));
    }
    return acc;
  }, []);
}

// efficient solution
// return array.map(el => -el);
console.log(invert(arr));
