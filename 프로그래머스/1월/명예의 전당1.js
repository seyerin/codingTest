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
      //---------------------------> 명예의 전당에 오른 점수의 수가 k보다 클 때
    }
    temp.sort((a, b) => a - b); // temp[0]으로 가장 작은 명예의 전당 점수를 조회 함으로 정렬

    if (temp.length > k) {
      // 명예의 전당에 오른 점수의 개수가 k 보다 커지면 이전까지 가장 낮은 점수를 삭제 시킴
      temp.splice(0, 1);
    }
    answer.push(temp[0]); // 명예의 전당에 오른 점수 중 가장 작은 수를 push
  });

  return answer;
}

const k = 4;
const score = [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000];

solution(k, score);
