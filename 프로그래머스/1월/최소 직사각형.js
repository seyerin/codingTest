function solution(sizes) {
  var answer = 0;
  sizes.forEach((x, n) => {
    let max = Math.max(x[0], x[1]);
    let min = Math.min(x[0], x[1]);
    sizes[n][0] = max;
    sizes[n][1] = min;
  });
  let maxX = 0;
  let maxY = 0;
  sizes.forEach((x) => {
    maxX = Math.max(x[0], maxX);
    maxY = Math.max(x[1], maxY);
  });
  answer = maxX * maxY;
  return answer;
}

// const sizes = [
//   [60, 50],
//   [30, 70],
//   [60, 30],
//   [80, 40],
// ];

const sizes = [
  [14, 4],
  [19, 6],
  [6, 16],
  [18, 7],
  [7, 11],
];

solution(sizes);
