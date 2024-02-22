function solution(n) {
  var answer = 0;
  let numArr = new Array(n + 1).fill(true);
  numArr[0] = numArr[1] = false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    for (let j = i * i; j <= n; j += i) {
      numArr[j] = false;
    }
  }

  for (let i = 2; i <= n; i++) {
    if (numArr[i]) {
      answer++;
    }
  }
  return answer;
}

const n = 25;
solution(n);
