function solution(array, commands) {
  var answer = [];
  commands.forEach((x) => {
    let i = x[0] - 1;
    let j = x[1];
    let k = x[2] - 1;
    let temp = array.slice(i, j);
    temp.sort((a, b) => a - b);
    answer.push(temp[k]);
  });
  return answer;
}

let array = [1, 5, 2, 6, 3, 7, 4];
let commands = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];

solution(array, commands);

/*
0~1 까지 자르고 sort 후 2번째 수
*/
