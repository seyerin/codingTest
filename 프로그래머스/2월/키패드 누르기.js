function solution(numbers, hand) {
  var answer = [];
  let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ["*", 0, "#"],
  ];
  let l = "*";
  let r = "#";
  function start(s) {
    let start = [];
    arr.forEach((x, n2) => {
      if (x.indexOf(s) != -1) {
        start = [n2, x.indexOf(s)];
      }
    });
    return start;
  }
  function search(n) {
    let search = [];
    arr.forEach((x, n2) => {
      if (x.indexOf(n) != -1) {
        search = [n2, x.indexOf(n)];
      }
    });
    return search;
  }
  let cnt = 0;
  numbers.forEach((x) => {
    if (x == 1 || x == 4 || x == 7) {
      answer.push("L");
      l = x;
    } else if (x == 3 || x == 6 || x == 9) {
      answer.push("R");
      r = x;
    } else {
      cnt++;
      let ln = start(l);
      let rn = start(r);
      let s = search(x);

      let lc = Math.abs(ln[0] - s[0]) + Math.abs(ln[1] - s[1]);
      let rc = Math.abs(rn[0] - s[0]) + Math.abs(rn[1] - s[1]);

      if (lc > rc) {
        answer.push("R");
        r = x;
      } else if (lc < rc) {
        answer.push("L");
        l = x;
      } else if (lc == rc) {
        if (hand == "right") {
          answer.push("R");
          r = x;
        } else {
          answer.push("L");
          l = x;
        }
      }
    }
  });
  answer = answer.join("");
  console.log(answer == "LLRLLRLLRL");
  return answer;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const hand = "right";

solution(numbers, hand);
