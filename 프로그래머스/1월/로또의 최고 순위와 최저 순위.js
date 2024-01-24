function solution(lottos, win_nums) {
  var answer = [];
  let zeroCnt = lottos.filter((x) => x == 0).length;
  let matchingNum = lottos.filter((x) => win_nums.indexOf(x) != -1).length;
  let lank = [6, 6, 5, 4, 3, 2, 1];
  answer = [lank[matchingNum + zeroCnt], lank[matchingNum]];
  console.log(answer);
  return answer;
}

const lottos = [0, 0, 0, 0, 0, 0];
const win_nums = [31, 10, 45, 1, 6, 19];

solution(lottos, win_nums);
