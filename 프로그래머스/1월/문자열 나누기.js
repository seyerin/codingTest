function solution(s) {
  var answer = 0;
  let split = s.split("");
  let anotherCharCnt = 0;
  let standardCharCnt = 1;
  let i = 1;
  let cnt = 0;
  let temp = [];
  let length = split.length;

  while (cnt < length) {
    let standard = split[0];
    let next = split[i];

    if (next == standard) {
      standardCharCnt++;
    } else {
      anotherCharCnt++;
    }
    i++;
    cnt++;
    if (standardCharCnt == anotherCharCnt) {
      answer++;
      split.splice(0, standardCharCnt * 2);
      standardCharCnt = 1;
      anotherCharCnt = 0;
      i = 1;
    }
  }
  if (answer == 0) answer++;
  // console.log(answer);
  return answer;
}

const s = "aa";

solution(s);

if ("0") {
  console.log("a");
}
