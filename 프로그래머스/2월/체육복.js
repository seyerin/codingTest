function solution(n, lost, reserve) {
  var answer = 0;
  let cnt = 0;
  let lostFilter = lost
    .filter((x) => !reserve.includes(x))
    .sort((a, b) => a - b);

  let reserveFilter = reserve
    .filter((x) => !lost.includes(x))
    .sort((a, b) => a - b);

  for (let i = 0; i < lostFilter.length; i++) {
    for (let j = 0; j < reserveFilter.length; j++) {
      if (
        lostFilter[i] - 1 == reserveFilter[j] ||
        lostFilter[i] + 1 == reserveFilter[j]
      ) {
        lostFilter.shift();
      }
    }
  }

  answer = n - lostFilter.length;
  return answer;
}

const n = 5;
const lost = [4, 5];
const reserve = [3, 4];

solution(n, lost, reserve);
