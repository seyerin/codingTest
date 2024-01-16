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
    // console.log(x);
    let num = alpha.findIndex((y) => x == y);
    let cnt = 0;
    let current;
    while (cnt != index) {
      current = index <= 1 ? alpha[num + 1] : alpha[num];
      if (skip.indexOf(current) == -1) {
        cnt++;
        num++;
      } else {
        num++;
      }
      if (num >= alpha.length) {
        num = 0;
        if (index <= 1) {
          current = alpha[num];
        }
      }
    }
    console.log("----------------");
    console.log(current, cnt);
    answer += current;
  });

  console.log(answer);
  return answer;
}

const s = "klmnopqrstuvwxyz"; //lmnopqrstuvwxyz
const skip = "abcdefghij";
const index = 20;
solution(s, skip, index);

// split.forEach((x) => {
//   let current = x.charCodeAt();
//   let after;
//   let cnt = 0;
//   let i = 1;
//   while (cnt < index) {
//     after = String.fromCharCode(current + i);
//     console.log(after, cnt);
//     if (current + i + 1 > 122) {
//       // console.log(current, i, index, after, cnt);
//       current = 97;
//       i = 0;
//       if (index - cnt <= 1) {
//         after = String.fromCharCode(current + i);
//         break;
//       }
//     }
//     if (skip.indexOf(after) == -1) {
//       if (after == "{") {
//         // console.log("a");
//       }
//       // console.log(after, cnt);
//       cnt++;
//       i++;
//     } else {
//       i++;
//     }
//   }
//   console.log("=====================================================");
//   answer += after;
// });
