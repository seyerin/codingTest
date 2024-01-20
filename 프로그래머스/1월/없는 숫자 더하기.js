function solution(numbers) {
  var answer = 0;
  let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  nums.forEach((n) => {
    if (numbers.indexOf(n) == -1) {
      answer += n;
    }
  });
  return answer;
}

const numbers = [1, 2, 3, 4, 6, 7, 8, 0];

solution(numbers);
