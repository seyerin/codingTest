function solution(number) {
  var answer = 0;
  number.forEach((x, n) => {
    for (let i = n + 1; i < number.length; i++) {
      for (let j = i + 1; j < number.length; j++) {
        if (x + number[i] + number[j] == 0) {
          answer++;
        }
      }
    }
  });
  return answer;
}

const number = [-2, 3, 0, 2, -5];

solution(number);
