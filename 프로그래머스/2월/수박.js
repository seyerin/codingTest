function solution(n) {
  var answer = "";
  for (let i = 1; i <= n; i++) {
    if (i % 2 == 0) {
      answer += "박";
    } else {
      answer += "수";
    }
  }
  console.log(answer);
  return answer;
}

const n = 4;

solution(n);
