function solution(X, Y) {
  var answer = "";
  let arr = [];
  const numberX = new Array(10).fill(0);
  const numberY = new Array(10).fill(0);

  X.split("").forEach((n) => numberX[n]++);
  Y.split("").forEach((n) => numberY[n]++);
  for (let i = 0; i < 10; i++) {
    // 숫자가 10까지 있어서
    const m = Math.min(numberX[i], numberY[i]); // 같은 숫자의 개수만큼 push
    for (let j = 0; j < m; j++) {
      arr.push(i);
    }
  }
  arr.sort((a, b) => b - a);
  answer = arr.join("");
  if (arr.length == 0) return "-1";
  if (answer[0] == 0) return "0";
  return answer;
}

const X = "12581";
const Y = "32205";
solution(X, Y);
