function solution(keymap, targets) {
  var answer = [];
  let sum = 0;

  targets.forEach((x) => {
    for (let i = 0; i < x.length; i++) {
      let min = Infinity;
      keymap.forEach((y) => {
        let index = y.indexOf(x[i]);
        if (index > -1) {
          min = Math.min(min, index + 1);
        }
      });
      sum += min;
    }
    answer.push(sum);
    sum = 0;
  });
  console.log(answer);
  answer = answer.map((e) => {
    if (e == Infinity) {
      e = -1;
    }
    return e;
  });
  console.log(answer);
  return answer;
}
const keymap = ["zzzz", "zzzz"];
const targets = ["ABCD", "AABB"];

solution(keymap, targets);
