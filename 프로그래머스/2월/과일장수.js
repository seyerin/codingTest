function solution(k, m, score) {
  var answer = 0;
  let box = [];
  let temp = [];

  score.sort((a, b) => b - a);

  score.forEach((x, n) => {
    temp.push(x);
    if ((n + 1) % m == 0) {
      box.push(temp);
      temp = [];
    }
  });

  if (box.length == 0) return 0;

  box.forEach((x) => {
    let min = Infinity;
    x.forEach((y) => {
      if (min > y) {
        min = y;
      }
    });
    answer = answer + min * m;
    min = Infinity;
  });
  return answer;
}

const k = 3;
const m = 4;
const score = [1, 2, 3, 1, 2, 3, 1];
// 5555 4542
solution(k, m, score);
