// function solution(babbling) {
//   var answer = 0;
//   let temp = [];
//   babbling.forEach((x) => {
//     let check = [];
//     let cnt = 0;
//     let idx = 0;
//     let str = x;
//     while (idx < x.length - 1) {
//       if (x[idx] == "a") {
//         if (check[cnt - 1] != 1) {
//           str = str.replace("aya", "");
//           check.push(1);
//           cnt++;
//         }
//         idx += 3;
//       } else if (x[idx] == "y") {
//         if (check[cnt - 1] != 2) {
//           str = str.replace("ye", "");
//           check.push(2);
//           cnt++;
//         }
//         idx += 2;
//       } else if (x[idx] == "w") {
//         if (check[cnt - 1] != 3) {
//           str = str.replace("woo", "");
//           check.push(3);
//           cnt++;
//         }
//         idx += 3;
//       } else if (x[idx] == "m") {
//         if (check[cnt - 1] != 4) {
//           str = str.replace("ma", "");
//           check.push(4);
//           cnt++;
//         }
//         idx += 2;
//       } else {
//         idx += 31;
//       }
//     }
//     temp.push(str);
//   });

//   temp.forEach((x) => {
//     if (x.length == 0) answer++;
//   });
//   return answer;
// }

const babbling = ["aya", "yemawoo", "u", "maa"];

// function solution(babbling) {
//   let a = 0;
//   const regexp1 = /(aya|ye|woo|ma)\1+/;
//   const regexp2 = /^(aya|ye|woo|ma)+$/;
//   console.log(regexp2);
//   babbling.reduce((ans, word) => {
//     if (!regexp1.test(word) && regexp2.test(word)) {
//       console.log(word);
//       console.log(ans);
//     }
//   }, 0);
//   console.log(a);
// }

solution(babbling);
