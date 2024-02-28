function solution(x, n) {
  var answer = [];
  let num = 0;
  while (answer.length != n) {
    num += x;
    answer.push(num);
  }
  console.log(answer);
  return answer;
}
const x = -4;
const n = 2;

solution(x, n);
