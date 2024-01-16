function solution(s, skip, index) {
  var answer = "";
  let split = [];
  let alpha = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  for (let i = 0; i < s.length; i++) {
    split.push(s[i]);
  }
  split.forEach((x) => {
    let num = alpha.findIndex((y) => x == y);
    let cnt = 0;
    let current;
    while (cnt != index) {
      if (num == alpha.length - 1) {
        num = -1;
        if (index <= 1) {
          current = alpha[num];
        }
      }
      current = alpha[num + 1];
      if (skip.indexOf(current) == -1) {
        cnt++;
        num++;
      } else {
        num++;
      }
    }
    answer += current;
  });

  console.log(answer);
  return answer;
}

const s = "aukks";
const skip = "wbqd";
const index = 5;
solution(s, skip, index);
