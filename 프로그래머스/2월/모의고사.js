function solution(answers) {
  var answer = [];
  let cnt = 0;
  let cnt1 = 0;
  let cnt2 = 0;
  let cnt3 = 0;
  const p1Arr = [1, 2, 3, 4, 5];
  const p2Arr = [2, 1, 2, 3, 2, 4, 2, 5];
  const p3Arr = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let p1 = [];
  let p2 = [];
  let p3 = [];

  while (cnt < answers.length) {
    p1.push(p1Arr[cnt1]);
    p2.push(p2Arr[cnt2]);
    p3.push(p3Arr[cnt3]);
    if (cnt1 == 4) cnt1 = -1;
    if (cnt2 == 7) cnt2 = -1;
    if (cnt3 == 9) cnt3 = -1;
    cnt1++;
    cnt2++;
    cnt3++;
    cnt++;
  }
  console.log(p1, p2, p3);
  let p1Cnt = 0;
  let p2Cnt = 0;
  let p3Cnt = 0;

  answers.forEach((x, n) => {
    if (p1[n] == x) p1Cnt++;
    if (p2[n] == x) p2Cnt++;
    if (p3[n] == x) p3Cnt++;
  });

  let arr = [
    [p1Cnt, 1],
    [p2Cnt, 2],
    [p3Cnt, 3],
  ];

  arr.sort((a, b) => b[0] - a[0]);

  if (arr[0][0] == arr[1][0] && arr[0][0] == arr[2][0]) {
    answer.push(arr[0][1]);
    answer.push(arr[1][1]);
    answer.push(arr[2][1]);
  } else {
    if (arr[0][0] == arr[1][0]) {
      answer.push(arr[0][1]);
      answer.push(arr[1][1]);
    } else {
      answer.push(arr[0][1]);
    }
  }
  console.log(arr, answer);
  answer.sort((a, b) => a - b);

  return answer;
}

const answers = [1, 2, 4, 5, 5, 1, 2, 2, 3, 5, 4, 5, 5];
// const answers = [1, 3, 2, 4, 2];
solution(answers);
