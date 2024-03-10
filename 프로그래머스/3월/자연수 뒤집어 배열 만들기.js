function solution(n) {
  var answer = [];
  while (Math.floor(n) != 0) {
    answer.push(n % 10);
    n = Math.floor(n / 10);
  }
  // console.log(answer);
  return answer;
}

const n = 2456873;
solution(n);
