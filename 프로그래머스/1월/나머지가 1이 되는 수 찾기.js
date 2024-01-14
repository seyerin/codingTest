function solution(n) {
  var answer = 0;
  while (1) {
    if (n % answer == 1) {
      break;
    }
    answer++;
  }
  return answer;
}

const n = 10;

// solution(n);
