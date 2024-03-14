function solution(arr, divisor) {
  var answer = [];
  answer = arr.filter((x) => x % divisor == 0);
  if (answer[0] == undefined) {
    answer.push(-1);
  }
  answer.sort((a, b) => a - b);
  console.log(answer);
  return answer;
}

const arr = [2, 36, 1, 3];
const divisor = 1;

solution(arr, divisor);
