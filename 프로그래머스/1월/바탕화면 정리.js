function solution(wallpaper) {
  var answer = [];
  let coordinate = [];
  wallpaper.forEach((x, n) => {
    for (let i = 0; i < x.length; i++) {
      if (x[i] == "#") {
        let obj = {
          x: n,
          y: i,
        };
        coordinate.push(obj);
      }
    }
  });
  let minY = coordinate[0].y;
  let maxY = coordinate[0].y;
  coordinate.forEach((arr) => {
    if (arr.y < minY) minY = arr.y;
    if (arr.y > maxY) maxY = arr.y;
  });
  answer.push(coordinate[0].x);
  answer.push(minY);
  answer.push(coordinate[coordinate.length - 1].x + 1);
  answer.push(maxY + 1);

  return answer;
}

const wallpaper = [
  ".##...##.",
  "#..#.#..#",
  "#...#...#",
  ".#.....#.",
  "..#...#..",
  "...#.#...",
  "....#....",
];

solution(wallpaper);
