function solution(n, m) {
  var answer = [];
  let arr = [n, m].sort((a, b) => a - b);
  let small = arr[0];
  let big = arr[1];
  let cnt = big;
  while (cnt) {
    if (small % cnt == 0 && big % cnt == 0) {
      break;
    }
    cnt--;
  }

  // console.log(cnt);
  answer.push(cnt);

  while (1) {
    while (small < big) {
      small += arr[0];
    }
    if (small == big) {
      break;
    }
    small = arr[0];
    big += arr[1];
  }
  answer.push(big);

  console.log(answer);
  return answer;
}

const n = 3;
const m = 12;

solution(n, m);
