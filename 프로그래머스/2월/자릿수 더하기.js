function solution(n) {
  var answer = 0;
  let split = n.toString().split("");
  split.forEach((x) => {
    answer += Number(x);
  });
  return answer;
}

const n = 123;

solution(n);
