function solution(numbers) {
  var answer = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      let temp = numbers[i] + numbers[j];
      if (answer.indexOf(temp) == -1) answer.push(temp);
    }
  }
  answer.sort((a, b) => a - b);
  return answer;
}

const numbers = [5, 0, 2, 7];
solution(numbers);
