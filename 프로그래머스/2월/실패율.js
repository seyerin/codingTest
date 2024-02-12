function solution(N, stages) {
  var answer = [];
  let reachObj = {};
  let noneClearObj = {};
  stages.sort((a, b) => b - a);

  for (let i = 1; i <= N; i++) {
    reachObj[i] = 0;
    noneClearObj[i] = 0;
  }

  stages.forEach((x) => {
    for (let i = 1; i <= x; i++) {
      if (reachObj[i] != undefined) reachObj[i] += 1;
    }
    if (noneClearObj[x] != undefined) noneClearObj[x] += 1;
  });
  for (let i = 1; i <= N; i++) {
    if (noneClearObj[i] == 0 && reachObj[i] == 0) {
      answer.push([i, 0]);
    } else answer.push([i, noneClearObj[i] / reachObj[i]]);
  }
  answer.sort((a, b) => b[1] - a[1]);
  for (let i = 0; i < answer.length; i++) {
    answer[i] = answer[i][0];
  }
  console.log(answer);
  return answer;
}

const N = 3;
const stages = [1, 1, 2, 2];

solution(N, stages);
