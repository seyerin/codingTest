function solution(n) {
  var answer = 0;
  let arr = n.toString().split("");
  arr.sort((a, b) => b - a);
  answer = Number(arr.join(""));
  return answer;
}

const n = 118372;

solution(n);
