function solution(a, b) {
  var answer = 0;

  a.forEach((x, n) => {
    let temp = x * b[n];

    answer += temp;
  });
  console.log(answer);
  return answer;
}

const a = [1, 2, 3, 4];
const b = [-3, -1, 0, 2];

solution(a, b);
