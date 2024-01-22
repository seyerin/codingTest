function solution(s) {
  var answer = "";
  let temp = [];
  let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let numStr = [
    "zer",
    "one",
    "two",
    "thr",
    "fou",
    "fiv",
    "six",
    "sev",
    "eig",
    "nin",
  ];
  let split = s.split("");

  for (let i = 0; i < split.length; i++) {
    let str = split[i] + split[i + 1] + split[i + 2];
    if (numStr.indexOf(str) != -1) {
      temp.push(numStr.indexOf(str));
      answer += numStr.indexOf(str);
    }
    if (num.indexOf(Number(split[i])) != -1) {
      temp.push(Number(split[i]));
      answer += split[i];
    }
  }
  // console.log(temp);
  // console.log(answer);
  return Number(answer);
}

const s = "2three45sixseven";
solution(s);
