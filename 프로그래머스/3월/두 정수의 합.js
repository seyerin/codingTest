function solution(a, b) {
  var answer = 0;
  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
    answer += i;
  }
  return answer;
}

const a = 3;
const b = 5;

solution(a, b);
