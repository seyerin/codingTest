function solution(k, score) {
  var answer = [];
  let min = -Infinity;
  let temp = [];
  let cnt = 0;

  score.forEach((x, n) => {
    if (temp.length < k) {
      temp.push(x);
      //---------------------------> 명예의 전당에 오른 점수의 수가 k보다 작을 때
    } else if (x > min) {
      temp.push(x);
      cnt++;
      min = temp[0];
      //---------------------------> 명예의 전당에 오른 점수의 수가 k보다 작을 때
    }
    temp.sort((a, b) => a - b);
    if (temp.length > k) {
      temp.splice(0, 1);
    }
    answer.push(temp[0]);
  });

  return answer;
}

const k = 4;
const score = [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000];

solution(k, score);
