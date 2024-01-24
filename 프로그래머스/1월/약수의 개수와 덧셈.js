function solution(left, right) {
  var answer = 0;
  let currentNum = left;
  while (currentNum <= right) {
    let tempArr = [];
    let cnt = 0;
    while (cnt <= currentNum) {
      if (currentNum % cnt == 0) {
        tempArr.push(cnt);
      }
      cnt++;
    }
    if (tempArr.length % 2 == 0) {
      answer += currentNum;
    } else {
      answer -= currentNum;
    }
    currentNum++;
  }
  return answer;
}

let right = 24;
let left = 27;

solution(right, left);
