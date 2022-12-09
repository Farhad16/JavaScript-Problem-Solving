function points(games) {
  let points = 0;
  for (let i = 0; i < games.length; i++) {
    const [x, y] = games[i].split(":");
    if (x > y) {
      points += 3;
    }
    if (x === y) {
      points += 1;
    }
  }
  return points;
}

function points1(games) {
  return games.reduce((acc, curr) => {
    const [x, y] = curr.split(":");
    if (x === y) {
      acc += 1;
    }
    if (x > y) {
      acc += 3;
    }
    return acc;
  }, 0);
}

const point = [
  "1:0",
  "2:0",
  "3:0",
  "4:0",
  "2:1",
  "1:3",
  "1:4",
  "2:3",
  "2:4",
  "3:4",
];
console.log(points(point));
console.log(points1(point));
