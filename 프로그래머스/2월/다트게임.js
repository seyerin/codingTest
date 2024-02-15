function solution(dartResult) {
  var answer = 0;
  let split = [];
  let idx = 0;
  for (let i = 0; i < dartResult.length; i++) {
    if (
      dartResult[i] == "S" ||
      dartResult[i] == "D" ||
      dartResult[i] == "T" ||
      dartResult[i] == "#" ||
      dartResult[i] == "*"
    ) {
      split.push(dartResult.substring(idx, i));
      split.push(dartResult.substring(i, i + 1));
      idx = i + 1;
    }
  }

  let arr = [];
  split.forEach((x, n) => {
    if (x == "S") {
      arr.push(Math.pow(split[n - 1], 1));
    } else if (x == "D") {
      arr.push(Math.pow(split[n - 1], 2));
    } else if (x == "T") {
      arr.push(Math.pow(split[n - 1], 3));
    }
    if (x == "*") {
      let cnt = 0;
      while (cnt != 2) {
        arr[arr.length - 1 - cnt] = arr[arr.length - 1 - cnt] * 2;
        cnt++;
      }
    }
    if (x == "#") {
      arr[arr.length - 1] = -arr[arr.length - 1];
    }
  });

  answer = arr.reduce((acc, cur, idx) => {
    return (acc += cur);
  }, 0);
  console.log(answer);
  console.log(arr);
  console.log(split);
  return answer;
}

const dartResult = "1D2S3T*";

solution(dartResult);
